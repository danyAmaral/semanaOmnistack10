import socketio from 'socket.io-client';

const socket = socketio('http://192.168.28.106:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction){
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }
    socket.connect();
    console.log(latitude, longitude, techs)
}

function disconnect(){
    if(socket.connect){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
};