import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({ success: true, message: "User Updated", data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({ success: true, message: "User Found", data: user });
  } catch (error) {
    res.status(404).json({ success: false, message: "User not found" });
  }
};

export const getAllUser = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await User.find({}).select("-password");

    res
      .status(200)
      .json({ success: true, message: "All User Found", data: users });
  } catch (error) {
    res.status(404).json({ success: false, message: "Users not found" });
  }
};

export const getUserProfile = async (req, res) => {
    const id = req.userId;
  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User Found", data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to get user" });
  }
};

export const getMyAppointment = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId });
    const doctorIds = bookings.map((el) => el.doctor.id);
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Doctor appointments list",
        data: doctors.length == 0 ? [] : doctors,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong ,cannnot get" });
  }
};
