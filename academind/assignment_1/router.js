
const router = (req,res) => {
    const route = req.url;
    const method = req.method;
    res.write('<html>');
    if(route === '/' && method === 'GET'){
        
        res.write('<h1>Welcome</h1>');
        res.write('<form method="POST" action="create-user"><input type="text" name="username" /> <button type="submit">Submit</button></form>');
        res.write('Route:'+route);
        
    }
    else if(route === '/users' && method === 'GET'){
        res.write('<html>');
        res.write('<h1>Users</h1>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>')
        res.write('Route:'+route);
    }
    else if(route=== '/create-user' && method=== 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
    }
    
    res.write('</html>');
    res.end();
}

module.exports = router;