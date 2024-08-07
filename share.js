const connections = [];

onconnect = (event)=>{
    const port = event.ports[0];
    connections.push(port);
    
    port.onmessage = (e)=> {
        connections.forEach(conn =>{
            if(conn !==port){
                conn.postMessage(e.data);
            }
        });
    };
};