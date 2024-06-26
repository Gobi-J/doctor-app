import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const getAllReviews = async (req, res) => {
    const {id} = req.params;
  try {
    const reviews = await Review.findById(id);
    res
      .status(200)
      .json({
        success: true,
        message: "Successful",
        totalReview: reviews.length,
        data: reviews,
      });
  } catch (err) {
    res.status(404).json({ success: true, message: " Not found" });
  }
};

export const createReview = async (req, res) => {
  if (!req.body.doctor) {
    req.body.doctor = req.params.doctorId;
  }
  if (!req.body.user) {
    req.body.user = req.userId;
  }
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(req.params.doctorId, {
      $push: { reviews: savedReview._id },
    });
    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
