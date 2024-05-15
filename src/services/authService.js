const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const logger = require("../loaders/logger");
const userService = require("../services/userService");
const tokenService = require("../services/tokenService");
const AppError = require("../errors/appError");
const config = require("../config/");

const login = async (email, password) => {
  try {
    //Email validation
    const user = await userService.findByEmail(email);
    console.log(user);
    if (!user) {
      throw new AppError(
        "Authentication failed Email or Password is incorrect",
        401
      );
    }

    //User is enabled
    if (!user.enable) {
      throw new AppError("Authentication failed User disabled", 401);
    }

    //Password Validation
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new AppError(
        "Authentication failed Email or Password is incorrect",
        401
      );
    }

    //Generate JWT
    const token = _encrypt(user.id);

    //Generate the Login date
    const date = new Date();
    let userLoginUpdate = {
      lastLogin: date,
    };
    await userService.update(user.id, userLoginUpdate);

    return {
      token,
      name: user.name,
      role: user.role,
    };
  } catch (error) {
    throw error;
  }
};

const validToken = async (token) => {
  try {
    // Token validation as parameter
    if (!token) {
      throw new AppError("Authentication failed, token required", 401);
    }

    logger.info(`Token received ${token}`);

    // Validate the token comes from the server
    let id;
    try {
      // Remove Bearer from string
      token = token.replace(/^Bearer\s+/, "");
      const obj = jwt.verify(token, config.auth.secret);
      id = obj.id;
    } catch (verifyError) {
      throw new AppError("Authentication failed, invalid token", 401);
    }

    logger.info(`User ID in the token: ${id}`);

    // IF token is valid, search up the user in DB through the ID
    const user = await userService.findById(id);
    if (!user) {
      throw new AppError("Authentication failed, invalid token", 401);
    }

    // Validate if the user is enabled
    if (!user.enable) {
      throw new AppError("Authentication failed, user disabled", 401);
    }
    // Return the user
    return user;
  } catch (err) {
    throw err;
  }
};

const validRole = (user, ...roles) => {
  if (!roles.includes(user.role)) {
    throw new AppError("Authorization failed, user without privileges", 403);
  }
  return true;
};

const register = async (user) => {
  await userService.save(user);

  //TODO: Validate email with nodemailer
  return "User registered, you can login now";
};

const requestPasswordReset = async (email) => {
  try {
    const user = await userService.findByEmail(email);
    if (!user) {
      throw new AppError("Reset password failed Email is incorrect", 401);
    }
    let userToken = await tokenService.findByUserId(user.id);
    if (userToken) await tokenService.remove(user.id);
    await tokenService.save(user);
    const resetToken = await tokenService.findByUserId(user.id);

    return {
      resetToken,
      email: user.email,
    };
  } catch (err) {
    throw err;
  }
};

_encrypt = (id) => {
  return jwt.sign({ id }, config.auth.secret, { expiresIn: config.auth.ttl });
};

module.exports = {
  login,
  register,
  validToken,
  validRole,
  requestPasswordReset,
};
