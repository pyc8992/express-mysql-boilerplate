const db = require('../models');

exports.getHello = async (req, res, next) => {
  try {
    // console.log(req.headers);

    const newData = await db.Test.create({
      testCol1: 'test1',
      testCol2: 'test2',
      testCol3: 'test3',
    });
    // const updateData = await db.Test.update({testCol1:'test_update2'}, {where: {id: 1}});
    // const deleteData = await db.Test.destory({where: {id: 1}});
    
    return res.json(newData);
  } catch (e) {
    console.error(e);
    next(e);
  }
};