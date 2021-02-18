import logo from './logo.svg';
import './App.css';
import ParentComponent from "./components/parentComponent";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about";
import AddMovie from "./components/addMovie";
import MenuComponent from './components/menuComponent';
import Login from './components/Login';
import MovieDetail from './components/movieDetail';
function App() {
  return (
    <div className="App">
       <Router>
        <MenuComponent/>
      <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/addmovie" exact component={AddMovie} />
          <Route path="/login" exact component={Login} />
          <Route path="/detail/:id" exact component={MovieDetail}/>
          <Route path="/" exact component={ParentComponent}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
