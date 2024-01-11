const protect = (req, res, next) => {
  const {user} = req.session;

  if (!user) {
    return res.ststus(401).json({status: 'fail', message: 'unauthorized'});
  }

  req.user = user;

  next();
};

module.exports = protect