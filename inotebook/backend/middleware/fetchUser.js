const jwt = require("jsonwebtoken");
const JWT_SEC_STRING = "Sanskrititryingcode";

const fetchUser = (req, res, next) => {
  //Get the user from JWT token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: " Please authenticate using a valid Token" });
  }
  try {
    const data = jwt.verify(token, JWT_SEC_STRING);
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: " Please authenticate using a valid Token" });
  }
};
module.exports = fetchUser;
