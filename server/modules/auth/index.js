const userProfileModel = require("./model");
const { signToken, verifyToken } = require("./jwt");
// const { sign } = require("crypto");

const handlers = {
  async signIn(req, res, next) {
    try {
      let { email, password } = req.body;
      console.log('request body login', req.body)
      if (!email) {
        throw new Error(`Missing 'email'`);
      }
      if (!password) {
        throw new Error(`Missing 'password'`);
      }
      let user = await userProfileModel.findOne({
        email: String(email).toLocaleLowerCase().trim(),
      });
      // {email, password,...,update,populate,delete,toObject}
      let hashPassword = hashMd5(String(password));
      if (!user || hashPassword !== user.password) {
        throw new Error(`Wrong email or password`);
      }
      // sign in success here if no error trow
      let userPayload = user.toObject();
      // gen access token
      delete userPayload.password;
      userPayload.accessToken = signToken(userPayload);
      res.json(userPayload);
    } catch (err) {
      next(err);
    }
  },
  validateAccessToken(req, res, next) {
    try {
      console.log(req.headers);
      let token = req.headers.authorization;
      if (!token) {
        throw new Error("Missing Token");
      }
      let payload = verifyToken(token);
      req.user = payload;
      next();
    } catch (err) {
      next(err);
    }
  },
  async signUpUser(req, res, next) {
    try {
      let body = req.body // { email, password = '123456', fullname }
      let userData = {
        email: body.email,
        password: hashMd5(body.password),
        comfirmPassword: hashMd5(body.password),
        fullname: body.fullname,
        firstname: body.firstname,
        lastname: body.lastname,
        roles: ['user']
      }
      let user = await userProfileModel.create(userData);
      res.json(user);
    } catch (err) {
      next(err)
    }
  },
  async signUpAdmin(req, res, next) {
    try {
      let body = req.body;
      let adminData = {
        email: body.email,
        password: hashMd5(body.password),
        fullname: body.fullname,
        roles: ['admin']
      }
      let admin = await userProfileModel.create(adminData);
      res.json(admin);
    } catch (err) {
      next(err);
    }
  }
};

function hashMd5(string) {
  return require("crypto").createHash("md5").update(string).digest("hex");
}

module.exports = handlers;
