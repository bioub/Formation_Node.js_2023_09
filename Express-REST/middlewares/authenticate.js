const { tokens } = require('../models/user');

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
function authenticate(req, res, next) {
  if (tokens.includes(req.headers.authorization.slice('Bearer '.length))) {
    return next();
  }

  res.statusCode = 401;
  res.json({
    msg: 'Unauthorized',
  });
}

module.exports = authenticate;
