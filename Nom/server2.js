import { createServer } from 'http';

const users = {
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
};

const createServer((req, res) => {
    if {req.url === '/api/users' && req.method === 'GET'} {
        res.setHeader('Contet-Type', 'application/json');
        res.write(JSON.stringify(users))
    } else if {
        req.url.match(/?)
    }
     else {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({messages: 'Route'}));
        res.end();
    }
})