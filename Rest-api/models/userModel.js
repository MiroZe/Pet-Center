const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = Number(process.env.SALTROUNDS) || 5;

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    minlength: [5, "Username should be at least 5 characters"],
    validate: {
      validator: function (v) {
        return /[a-zA-Z0-9]+/g.test(v);
      },
      message: (props) =>
        `${props.value} must contains only latin letters and digits!`,
    },
  },
  location: {
    type: String,
    required: true,
    minlength: [3, "Location should be at least 3 characters"],
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "Password should be at least 5 characters"],
    validate: {
      validator: function (v) {
        return /[a-zA-Z0-9]+/g.test(v);
      },
      message: (props) =>
        `${props.value} must contains only latin letters and digits!`,
    },
  },
  tel: {
    type: String,
  },
  pets: {
    type: [ObjectId],
    ref: "Pet",
  },

  favorites: {
    type: [ObjectId],
    ref: "Pet",
  },
});

userSchema.methods = {
  matchPassword: function (password) {
    return bcrypt.compare(password, this.password);
  },
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        next(err);
      }
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          next(err);
        }
        this.password = hash;
        next();
      });
    });
    return;
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
