import Measurement from "../models/Measurementmodel.js";

export const addmeasurement = async (req, res) => {
  const {
    category,
    shirtcollar,
    shirtheight,
    shirtsleeve,
    shirtchest,
    shirtwaist,
    shirtsholder,
    pantheight,
    pantwaist,
    panthibs,
    pantabdomen,
    pantthigh,
    pantknee,
    pantcalf,
    pantinstep,
    kurtacollar,
    kurtaheight,
    kurtasleeve,
    kurtachest,
    kurtawaist,
    kurtasholder,
    payjamaheight,
    payjamawaist,
    payjamahibs,
    payjamaabdomen,
    payjamathigh,
    payjamaknee,
    payjamacalf,
    payjamainstep,
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
      shirtcollar: shirtcollar,
      shirtheight: shirtheight,
      shirtsleeve: shirtsleeve,
      shirtchest: shirtchest,
      shirtwaist: shirtwaist,
      shirtsholder: shirtsholder,
      pantheight: pantheight,
      pantwaist: pantwaist,
      panthibs: panthibs,
      pantabdomen: pantabdomen,
      pantthigh: pantthigh,
      pantknee: pantknee,
      pantcalf: pantcalf,
      pantinstep: pantinstep,
      kurtacollar: kurtacollar,
      kurtaheight: kurtaheight,
      kurtsleeve: kurtsleeve,
      kurtaheight: kurtaheight,
      kurtasleeve: kurtasleeve,
      kurtachest: kurtachest,
      kurtawaist: kurtawaist,
      kurtasholder: kurtasholder,
      payjamaheight: payjamaheight,
      payjamawaist: payjamawaist,
      payjamahibs: payjamahibs,
      payjamaabdomen: payjamaabdomen,
      payjamathigh: payjamathigh,
      payjamaknee: payjamaknee,
      payjamacalf: payjamacalf,
      payjamainstep: payjamainstep,
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
