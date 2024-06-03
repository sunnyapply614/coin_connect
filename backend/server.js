import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("db connected")
    })
    .catch((err) => {
        console.log(err);
    });

const userSchema = mongoose.Schema({
    email: {type: String},
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body

    User.findOne({ email: email}).then((user) => {
        if(user){
            //comparing to hashed password
            bcrypt.compare(password, user.password, function (err, result) {
                if(result){
                    res.send({ message:"Welcome, Log in with Google please!", user})
                } else {
                    res.send({ message: "Invalid password"})
                }
            })
            } else {
                res.send({message: "Please Sign up first"})
        }
    })
})

app.post("/register", (req, res) => {
    const {email, password} = req.body
    
    //Checking if user is already registered
    User.findOne({email: email}).then((user) => {
        if (user){
            res.send({message: "User already exists"})
            console.log("User exists")
        } else {
            const user = new User({
                email,
                password
            })
            //Hashing the password
            bcrypt.genSalt(10).then((salt) =>{
                bcrypt.hash(user.password,salt).then((hashpass) =>{
                    user.password = hashpass
                    //Saving in the database
                    user.save().then(() =>{
                        res.send({message: "Successfully registered"})
                        console.log("registered successfully")
                    })
                    .catch((err) => {
                        res.send(err)
                    })
                })
            })
        }
    })
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})
