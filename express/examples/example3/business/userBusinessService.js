var userModel = require('../model/userModel');

var getUserById = function (userId) {
	for(var i=0 ; i < userModel.users.length ; i++) {
		if(userModel.users[i].id == userId)
		{
			return userModel.users[i];	
		}
	}	
};

module.exports.findOne = getUserById;

module.exports.findAll = function () {
	return 	userModel.users;
};

module.exports.save = function (user) {
	userModel.users.push(user);
	return user;
};

module.exports.delete = function (userId) {
	var retrieveUser = getUserById(userId);
	
	//remove the specific user from the array
	userModel.users.pop(retrieveUser);
	return null;
};
