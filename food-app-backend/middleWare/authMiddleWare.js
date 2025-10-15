// const jwt = require("jsonwebtoken");
// const UserProducts = require("../model/user");

// const authUser = async (req, res, next) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(400).json({ error: " Auth token required!" });
//   }

//   const token = authorization.split(" ")[1];
//   try {
//     const { _id } = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await UserProducts.findOne({ _id }).select("_id");
//     next();
//   } catch (error) {
//     return res.status(400).json({ error: " Request is not authorized" });
//   }
// };

// module.exports = authUser;
