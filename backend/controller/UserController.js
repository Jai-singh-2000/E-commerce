const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      res.status(404).json({
        message: "User not found",
        status: false,
      });
      return;
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      res.status(400).json({
        message: "Invalid credentials",
        status: false,
      });
      return;
    }

    const token = await jwt.sign(
      { id: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "User login successfully",
      user: existingUser,
      token: token,
      status: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something is wrong",
      status: false,
    });
  }
};

const signupController = async (req, res) => {
  try {
    //Validate
    //Email validation & verification
    //Already exist
    //Password Cap,small,Number,Speal
    //Check if already exist in db
    const { name, email, password, confirmPassword } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res.status(409).json({
        message: "User already exist",
        status: false,
      });
      return;
    }

    if (password !== confirmPassword) {
      res.status(409).json({
        message: "Password and confirm password not matched",
        status: false,
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      status: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error in token verification",
      status: false,
    });
  }
};

const tokenController = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      const jwtResponse = jwt.verify(token, process.env.SECRET_KEY);
      if (Object.keys(jwtResponse).length > 0) {
        res.status(200).json({
          message: "Token is valid",
          status: true,
        });
      }
    } else {
      res.status(401).json({
        message: "Unauthorized user",
        status: false,
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized user",
      status: false,
    });
  }
};

module.exports = {
  loginController,
  signupController,
  tokenController,
};
