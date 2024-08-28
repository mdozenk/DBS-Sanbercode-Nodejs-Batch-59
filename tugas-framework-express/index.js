const express = require('express');
const app = express();
const port = 3000; 
const path = require('path');
const users = require('./data/user.json');



app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
  });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
    res.json({
        message: "Success fetch message",
        data: "Hello World!"
    });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId); 

    if (user) {
        res.json({
            message: "Success fetch user",
            data: user
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});

app.get('/user', (req, res) => {
    res.json({
        message: "Success fetch user",
        data: {
            id: 1,
            name: "Budi",
            username: "budidu",
            email: "budidu@mail.com"
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});