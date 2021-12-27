import mongoose from "mongoose";


const mileageDisengageSchema = mongoose.Schema(
  {
    year: {
      type: String,
      required: true,
    },
    mileage: {
      type: Array,
      required: true,
    },
    disengagements: {
      type: Array,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const MilesDisengage = mongoose.model("MilesDisengages", mileageDisengageSchema);

export default MilesDisengage;
