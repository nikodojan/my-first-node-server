function configureModels(sequelize) {
	const { User, Post } = sequelize.models;

	User.hasMany(Post);
	Post.belongsTo(User);
}

module.exports = { configureModels };