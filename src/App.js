import "./App.css";
import Jugadores from "./components/jugadores/Jugadores";
import Convocados from "./components/convocados/Convocados";
function App() {
  return (
    <div className="App">
      {/* jugadores */}
      <Jugadores />
      {/* convocados */}
      <Convocados />
    </div>
  );
}

export default App;
