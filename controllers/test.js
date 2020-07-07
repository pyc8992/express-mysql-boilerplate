const db = require('../models');

exports.getHello = async (req, res, next) => {
  try {
    const newData = await db.Test.create({
      testCol1: 'test1',
      testCol2: 'test2',
      testCol3: 'test3',
  });
  console.log(newData);

  const count = await db.TestHistory.count();
  console.log(count);
  
  return res.json(newData);
  } catch (e) {
    console.error(e);
    next(e);
  }
};