import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
function App() {
  return (
    <div className="App">
      <MainHeader />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
