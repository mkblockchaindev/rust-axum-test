socket = new WebSocket('ws://localhost:3000/ws');
socket.addEventListener('message', function (event) {
  console.log('Message from server', event.data);
});
socket.send('hi');
socket.send('123');
