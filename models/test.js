const Temporal = require('sequelize-temporal');

module.exports = (sequelize, DataTypes) => {
  const Test = Temporal(sequelize.define('test', {
    testCol1: {
      type: DataTypes.STRING(20), // 20글자 이하
      allowNull: false, // 필수, null 불가
    },
    testCol2: {
      type: DataTypes.STRING(20),
      allowNull: false,
      // unique: true, // 고유한 값
    },
    testCol3: {
      type: DataTypes.STRING(100), // 100글자 이하
      allowNull: false,
    },
  }, {
    table_name: 'test',
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  }), sequelize, {blocking: true, full: true});

  // Test.associate = (db) => {
  //   db.Test.hasMany(db.Post, { as: 'posts' });
  //   db.Test.hasMany(db.Comment);
  //   db.Test.belongsToMany(db.Comment, { through: 'commentLike', as: 'commentLiked' });
  //   db.Test.belongsToMany(db.Post, { through: 'like', as: 'liked' });
  //   db.Test.belongsToMany(db.User, { through: 'follow', as: 'followers', foreignKey: 'followingId' });
  //   db.Test.belongsToMany(db.User, { through: 'follow', as: 'followings', foreignKey: 'followerId' });
  // };

  return Test;
};
