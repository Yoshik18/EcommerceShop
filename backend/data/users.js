const bcrypt = require('bcryptjs');

const users = [
	{
		name: 'Admin User',
		email: 'admin@admin.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},

	{
		name: 'John Doe',
		email: 'johndoe@test.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Jand Doe',
		email: 'janedoe@test.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

module.exports = users;
