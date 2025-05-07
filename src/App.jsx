import "./App.css";
import Nav from "./Nav";
// import Home from "./Componets/Home";
import Sidebar from "./Componets/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { ContextProvider } from "./ContextProvider";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="div01">
      <ContextProvider>
        <Sidebar />
      </ContextProvider>
      </div>
     
      {/* Temp Mail
fefape7808@laymro.com */}
    </div>
  );
}

export default App;
