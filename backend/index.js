const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const app = express();
app.use(express.json())
app.use(cors());
require('dotenv').config();

const Admin = require('./adminModel')
const Blog = require('./blogModels')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


mongoose.connect(`${process.env.MONGODB_URI}` ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("mongodb connected");
}).catch(() => {
    console.error;
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

