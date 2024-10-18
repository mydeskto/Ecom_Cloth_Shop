const express = require('express');
const app =express()
const cors = require('cors')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer= require('multer')
const path = require('path')


const usermodel = require('./models/usermodel')
const pModel = require('./models/productmodel')

app.use(cors())
app.use(express.json())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const port = 1300


app.listen( {port} , ()=>{
  console.log(`server is running on port ${port}`)

})

const dburl = 'mongodb://localhost:27017/Online-Store'

mongoose.connect(dburl);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage })



app.post('/api/register' , async (req , res)=>{
    // console.log(req.body)

    try{
        const existingUser = await usermodel.findOne({ email: req.body.email });
      
    if (existingUser) {
      return res.json({ status: 'error', error: 'Duplicate Email' });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const user = await usermodel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.json({status :'ok'})
    }catch(error){
        console.log(error)
        res.json({status :'error' , error : 'server error'})
    }
})


app.post('/api/login' , async (req , res)=>{
    
    const  email  = req.body.email;
   const   Password = req.body.password
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(401).json({ status: 'error', message : 'invalid Email address' });
    }
      if(user ){

         const isPasswordCorrect = await bcrypt.compare(Password, user.password);
        if (!isPasswordCorrect) {
            return res.json({ status: 'error', error: 'Invalid email or password' });
        }

        // Generate JWT token if the password is correct
        if(isPasswordCorrect === true){
          const token = jwt.sign({
            name: user.name,
            email: user.email,
          }, 'shahah12', { expiresIn: '1h' });
      
          res.json({ status: 'ok', user: token });
        }
        
      }else{
        res.json({status :'error' , user : false})
      }
        // console.log(user)
    
})

// app.post('/product/details' , async (req , res)=>{

//     const product = await pModel.create({
//         productName : req.body.name,
//         Description : req.body.description,
//         price : req.body.price,
//         old_price : req.body.old_price
//     })
//     res.send(product)

// })

app.get('/hello' , (req , res)=>{
  res.send('hello world ')
})

app.post('/api/addproduct',  upload.single("image") , async (req, res) => {
  try {
    let products = await pModel.find({});
    let Id;
    const imagePath = `/uploads/${req.file.filename}`
    const realpath = `http://localhost:1300${imagePath}`
    
    // const existingProduct = await pModel.findOne({ name: req.body.name });

    // if (existingProduct) {
    //   // return console.log('already have this product')
    // return  res.json({
    //     success: false,
    //     message: 'Product with this name already exists',
    //   });
    // }
    if (products.length > 0) {
      // Get the last product
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      
      // Increment the last product's ID
      Id = last_product.id + 1;
    } else {
      // If no products exist, start with ID 1
      id = 1 ;
      re.json('id start from 1')
    }

    const product = new pModel({
      id: Id,
      name: req.body.name,
      image: realpath,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price
    });

    console.log(product);
    await product.save();

    console.log("saved");
    res.json({
      success: true,
      name: req.body.name
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    console.log(error)
  }
});

// creating api for removing any item
app.post('/api/remove' , async(req, res)=>{
  const { productId } = req.body;
    const product = await pModel.findOneAndDelete(productId)
    console.log(product)
    if(!product){
    return   res.json({
        status : false,
        meassage : "product Not Found"
      })
    }
    console.log("Removed")
    res.json({
      success : true,
      name : req.body.name,
    })
})
app.post('/api/removeUser' , async(req, res)=>{
  const { userEmail } = req.body;
    const user = await pModel.findOneAndDelete(userEmail)
    console.log(user)
    if(!user){
    return   res.json({
        status : false,
        meassage : "product Not Found"
      })
    }
    console.log("Removed")
    res.json({
      success : true,
      name : req.body.name,
    })
})

// creating api for getting all products

app.post('/api/allproducts' , async(req , res)=>{
  let products = await pModel.find({
    
  })
  console.log("all products are fetched")
  res.json(products)
})
app.post('/api/users' , async(req , res)=>{
  let users = await usermodel.find({
    
  })
  console.log("all users data are fetched")
  res.json(users)
})