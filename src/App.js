import { useEffect, useState, useRef } from "react";
import getWebSocket from "./api";
import Cities from "./components/Cities";
import AppBar from "./components/AppBar";
import { dataFactory as aqiDataFactory } from "./utils/aqiMapper";
function App() {
  const [cityData, setCityData] = useState({});
  const socket = useRef(null);
  const dataFactory = useRef(null);

  useEffect(() => {
    socket.current = getWebSocket();

    socket.current.onopen = () => {
      console.log("connected");
    };

    socket.current.onclose = () => {
      console.log("closed");
    };
    return () => {
      socket.current.close();
    };
  }, []);
  useEffect(() => {
    dataFactory.current = aqiDataFactory();
    if (socket.current) {
      socket.current.onmessage = ({ data }) => {
        setCityData(dataFactory.current(JSON.parse(data)));
      };
    }
  }, []);
  return (
    <div className="App">
      <AppBar />
      <Cities cities={cityData} />
    </div>
  );
}

export default App;
