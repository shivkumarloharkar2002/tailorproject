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

    height,
    waist,
    hibs,
    abdomen,
    thigh,
    knee,
    calf,
    instep,
  } = req.body;

  try {
    const measureData = await Measurement.create({
      category: category,

      height: height,
      waist: waist,
      hibs: hibs,
      abdomen: abdomen,
      thigh: thigh,
      knee: knee,
      calf: calf,
      instep: instep,
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

// export const addKurtaMeasurement = async (req, res) => {
//   const {
//     category,

//     kurtacollar,
//     kurtaheight,
//     kurtasleeve,
//     kurtachest,
//     kurtawaist,
//     kurtasholder,
//   } = req.body;

//   try {
//     const measureData = await Measurement.create({
//       category: category,

//       kurtacollar: kurtacollar,
//       kurtaheight: kurtaheight,
//       kurtsleeve: kurtsleeve,
//       kurtaheight: kurtaheight,
//       kurtasleeve: kurtasleeve,
//       kurtachest: kurtachest,
//       kurtawaist: kurtawaist,
//       kurtasholder: kurtasholder,
//     });
//     res.status(200).json({
//       success: true,
//       msg: "measurement add",
//       data: measureData,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

// export const addPayjamaMeasurement = async (req, res) => {
//   const {
//     category,

//     payjamaheight,
//     payjamawaist,
//     payjamahibs,
//     payjamaabdomen,
//     payjamathigh,
//     payjamaknee,
//     payjamacalf,
//     payjamainstep,
//   } = req.body;

//   try {
//     const measureData = await Measurement.create({
//       category: category,

//       payjamaheight: payjamaheight,
//       payjamawaist: payjamawaist,
//       payjamahibs: payjamahibs,
//       payjamaabdomen: payjamaabdomen,
//       payjamathigh: payjamathigh,
//       payjamaknee: payjamaknee,
//       payjamacalf: payjamacalf,
//       payjamainstep: payjamainstep,
//     });
//     res.status(200).json({
//       success: true,
//       msg: "measurement add",
//       data: measureData,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

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
