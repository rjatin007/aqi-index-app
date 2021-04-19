const url = "ws://city-ws.herokuapp.com";

const getWebSocket = () => {
  return new WebSocket(url);
};

export default getWebSocket;
