const jwt = require("jsonwebtoken");
const User = require("../model/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });
  
      if (existingUser) {
        return res.status(400).json({ errors: { email: "User already exists" } });
      }
  
      const user = await User.create(req.body);
  
      const token = jwt.sign(
        { id: user._id, email: user.email },
        "hvdvay6ert72839289aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?pou89ywe",
        { expiresIn: "1d" }
      );
  
      res.status(200).json({
        user: {
          id: user._id,
          email: user.email,
          password: user.password,
        },
        token,
      });
    } catch (error) {
      console.error("Signup error:", error); 
      res.status(500).json({
        message: "Signup failed",
        error: error.message, 
      });
    }
  };
  

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const token = jwt.sign(
          { id: user._id, email: user.email },
          "hvdvay6ert72839289aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?pou89ywe",
          { expiresIn: "1d" }
        );

        res.status(200).json({
          user: {
            id: user._id,
            email: user.email,
            password: user.password,
          },
          token,
        });
      } else {
        res.status(400).json({ message: "Incorrect password" });
      }
    } else {
      res.status(400).json({ message: "No user found with this email" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
    });
  }
};

module.exports = { createUser, loginUser };
