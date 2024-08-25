import { createServer } from 'http';

// Membuat server HTTP
const server = createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

// Server berjalan pada port 3000
server.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000/');
});
