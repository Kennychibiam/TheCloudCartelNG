const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signUp = async function (email, password) {
  if (email && password) {
    const emailExist = await this.findOne({ email });
    if (emailExist) {
      throw Error("Email is already in use");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await this.create({ email: email, password: hashPassword });
    return user;
  }
};

userSchema.statics.logIn = async function (email, password) {
  if (email && password) {
    const user = await this.findOne({ email });
    if (!user) {
      throw Error("Incorrect Email");
    }
    const salt = await bcrypt.genSalt(10);
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Incorrect Password");
    }
    return user;
  }
};

module.exports = mongoose.model("User", userSchema);
