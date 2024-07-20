const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

const connectToDatabase = async () => {
  try {
    await client.connect();
    db = client.db('test'); // Replace with your database name
    console.log("MongoDB connected");

    // Initialize the default route only after the database connection is successful
    app.get("/", (req, res) => {
      res.send("Default Route Works!");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

connectToDatabase();

app.post('/admin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await db.collection('admins').findOne({ username: username, password: password });
    if (admin) {
      if (admin.password === password) {
        res.send("success");
      } else {
        res.status(500).send("Error occurred while inserting booking.");
      }
    }
    console.log(admin);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while inserting booking.");
  }
});

app.post('/blogs', upload.single('file'), async (req, res) => {
  const newBlog = {
    topic: req.body.topic,
    story: req.body.story,
    date: req.body.date,
    detail: req.body.detail,
    img: req.file ? {
      data: req.file.buffer,
      contentType: req.file.mimetype
    } : null
  };
  try {
    await db.collection('blogs').insertOne(newBlog);
    res.status(200).json({ message: 'Blog post created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await db.collection('blogs').find({}).toArray();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to fetch image by ID
app.get('/image/:id', async (req, res) => {
  try {
    const blog = await db.collection('blogs').findOne({ _id: new ObjectId(req.params.id) });
    if (!blog || !blog.img) {
      res.status(404).json({ error: 'Image not found' });
    } else {
      res.contentType(blog.img.contentType);
      res.send(blog.img.data);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
