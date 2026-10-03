const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'api', 'data', 'blogs.json');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    // Intercept the API call that normally goes to PHP
    if (req.url.includes('/api/blogs.php')) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');

        if (req.method === 'GET') {
            fs.readFile(DATA_FILE, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(200);
                    res.end(JSON.stringify([]));
                    return;
                }
                res.writeHead(200);
                res.end(data);
            });
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => {
                try {
                    const parsed = JSON.parse(body);
                    fs.writeFile(DATA_FILE, JSON.stringify(parsed, null, 4), err => {
                        if (err) {
                            res.writeHead(500);
                            res.end(JSON.stringify({ success: false, message: 'Failed to write' }));
                            return;
                        }
                        res.writeHead(200);
                        res.end(JSON.stringify({ success: true, message: 'Saved successfully' }));
                    });
                } catch (e) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ success: false, message: 'Invalid JSON' }));
                }
            });
        }
        return;
    }

    // Serve Static Files
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
    const ext = path.extname(filePath).toLowerCase();

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
            return;
        }
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Test Server running at http://localhost:${PORT}/`);
    console.log('You can now test the Blogs Admin save functionality locally!');
});
