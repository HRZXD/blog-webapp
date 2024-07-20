const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const app = express();
app.use(express.json())
app.use(cors());

const Admin = require('./model/adminModel')
const Blog = require('./model/blogModels')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://adminhrz:PhtfuMrarlLHv4Qf@cluster0.ewbiuim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=>{
    console.log("mongodb connected");
}).catch(() => {
    console.error;
})
app.get("/", (req, res) => {
  res.send("Default Route Works!");
})
app.post('/admin' , async (req, res) => {
    const {username, password} = req.body;
    try{
        await Admin.findOne({username: username, password: password})
        .then(admin => {
            if (admin){
                if(admin.password === password){
                    res.send("success")
                }else{
                    res.status(500).send("Error occurred while inserting booking.");
                }
            }
            console.log(admin);
        })
    }catch(err){
        console.error(err);
        res.status(500).send("Error occurred while inserting booking.");
    }
})

app.post('/blogs', upload.single('file'), async (req, res) => {
    const newBlog = new Blog({
      topic: req.body.topic,
      story: req.body.story,
      date: req.body.date,
      detail: req.body.detail,
      img: req.file ? {
        data: req.file.buffer,
        contentType: req.file.mimetype
      } : null
    });
    try {
        await newBlog.save();
        res.status(200).json({ message: 'Blog post created successfully' });
      } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/blogs', async (req, res) => {
    try {
      const blogs = await Blog.find({});
      res.status(200).json(blogs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});
  
  // Route to fetch image by ID
app.get('/image/:id', async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
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

app.listen(4000, () => {
    console.log("Server listening on 4000");
})



