import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandinPage from './Components/Pages/LandinPage/LandinPage';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandinPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
