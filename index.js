const express = require('express');
const app = express();

const users = [{name: 'Pepe', id: 1}, {name: 'Juan', id: 2}];


app.get('/', (req, res) => {
	res.json(usuarios);
});

app.get('/users', (req, res) => {
	res.json(users);
});

app.get('/users/:id', (req, res) => {
	const userId = req.params.id;
	const user = users.find(user => user.id == userId);
	res.json(user);
});

app.listen(3000);
