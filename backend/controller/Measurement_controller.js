import Measurement from "../models/Measurementmodel.js";

export const addShirtMeasurement = async (req, res) => {
  const { category, collar, height, sleeve, chest, waist, sholder } = req.body;

  try {
    const measureData = await Measurement.create({
      category: category,
      collar: collar,
      height: height,
      sleeve: sleeve,
      chest: chest,
      waist: waist,
      sholder: sholder,
    });
    res.status(200).json({
      success: true,
      msg: "measurement add",
      data: measureData,
    });
  } catch (error) {
    res.send(error);
  }
};

export const addPantMeasurement = async (req, res) => {
  const {
    category,

    pantheight,
    pantwaist,
    panthibs,
    pantabdomen,
    pantthigh,
    pantknee,
    pantcalf,
    pantinstep,
  } = req.body;

  try {
    const measureData = await Measurement.create({
      category: category,

      pantheight: pantheight,
      pantwaist: pantwaist,
      panthibs: panthibs,
      pantabdomen: pantabdomen,
      pantthigh: pantthigh,
      pantknee: pantknee,
      pantcalf: pantcalf,
      pantinstep: pantinstep,
    });
    res.status(200).json({
      success: true,
      msg: "measurement add",
      data: measureData,
    });
  } catch (error) {
    res.send(error);
  }
};



export const addSafariMeasurement = async (req, res) => {
  const {
    category,

    safaricollar,
    safarichest,
    safarishirtwaist,
    safarisleeve,
    safarisholder,
    safaritrouserwaist,
    safaritrouserhip,
    safaritrouserthigh,
  } = req.body;

  try {
    const measureData = await Measurement.create({
      category: category,

      safaricollar: safaricollar,
      safarichest: safarichest,
      safarishirtwaist: safarishirtwaist,
      safarisleeve: safarisleeve,
      safarisholder: safarisholder,
      safaritrouserwaist: safaritrouserwaist,
      safaritrouserhip: safaritrouserhip,
      safaritrouserthigh: safaritrouserthigh,
    });
    res.status(200).json({
      success: true,
      msg: "measurement add",
      data: measureData,
    });
  } catch (error) {
    res.send(error);
  }
};

// get all
export const GetMeasurementDatas = async (req, res) => {
  const GetAllData = await Measurement.find();
  res.json({
    success: true,
    msg: " All Gallery Data Fetched Successfully",
    data: GetAllData,
  });
};

// get one
export const GetMeasurementData = async (req, res) => {
  try {
    const { _id } = req.params;
    const oneData = await Measurement.findOne({ _id: _id });

    res.json({
      success: true,
      data: oneData,
      msg: "Find data successfully...",
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
};
