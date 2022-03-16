const express = require('express');

const app = express();

app.use(express.json());


let menuItems = [{
  id: 0,
	name: 'Dashboard',
  logoName: 'home-alt'
}, {
	id: 1,
	name: 'Notifications',
  logoName: 'home-alt'
}, {
	id: 2,
	name: 'Analytics',
  logoName: 'home-alt'
}, {
	id: 3,
	name: 'Revenue',
  logoName: 'home-alt'
}, {
	id: 4,
	name: 'Likes',
  logoName: 'home-alt'
}, {
	id: 5,
	name: 'Wallet',
  logoName: 'home-alt'
}];

// app.post('/users/:id', (req, res) => {
// 	const { id } = req.params;
// 	const { user: updatedUser } = req.body;

// 	users = users.map(user => user.id === id ? updatedUser : user);

// 	res.json(users.find(user => user.id === id));
// });

app.get('/menu-items', (req, res) => {
	res.json(menuItems);
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});