import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
    <div className="App">
      <MainHeader />
      <Header />
      <Content />
      <Footer />
    </div>
    </Switch>
    </Router>
  );
}

export default App;
