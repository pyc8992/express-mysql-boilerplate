
exports.getHello = async (req, res, next) => {
  try {
    res.send('hello');
  } catch (e) {
    console.error(e);
    next(e);
  }
};