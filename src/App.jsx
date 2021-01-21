import Header from './components/header';
import Pizzas from './components/content/pizzas';
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
        <Header />
        <Pizzas />
    </div>
  );
}

export default App;
