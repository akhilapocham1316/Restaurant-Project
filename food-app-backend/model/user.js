const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: [validator.isEmail,"Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Password is Reuired"],
    minlength:[ 6, "Password must be at least 6 characters long"]
  },
});

accountSchema.pre('save', async function(next){
    const salt =  await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = new mongoose.model("User", accountSchema)

module.exports = User;
