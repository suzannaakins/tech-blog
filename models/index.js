//this file collects and exports the data from the different models

const User = require('./User');
const Post = require('./Post');

//create ONE TO MANY relationship between user and posts :
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };