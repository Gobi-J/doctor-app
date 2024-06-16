import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;
    if (role === "patient") user = await User.findOne({ email });
    else if (role === "doctor") user = await Doctor.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (role === "patient") {
      user = new User({
        email,
        password: hashedPassword,
        name,
        photo,
        role,
        gender,
      });
    }
    if (role === "doctor") {
      user = new Doctor({
        email,
        password: hashedPassword,
        name,
        photo,
        role,
        gender,
      });
    }
    await user.save();
    res.status(200).json({ success: true, message: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;
    const doc = await Doctor.findOne({ email });
    const pat = await User.findOne({ email });
    user = doc || pat;
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const valid = await bcrypt.compare(req.body.password, user.password);

    if (!valid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    const { password, role, appointments, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "Succussfully logged in",
      data: { ...rest },
      token,
      role,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
