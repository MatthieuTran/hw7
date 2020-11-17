let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log("connecting...");
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = () => {
    console.log("open");
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = (e) => {
    let d = e.data || `{"message":"nothing"}`;
    let data = JSON.parse(d);
    handlerFunction(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  sendMessage,
  registerMessageHandler,
};
