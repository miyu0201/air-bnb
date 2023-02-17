
import data from './data'
import Header from './components/Header'
import Footer from './components/Footer'
import Hotel from './components/Hotel'
import './App.css';

function App() {
  return (
 
    <div className="container">
    <div className="header"> <Header/></div>
    <div className="content"><Hotel/></div>
    <div className="footer"><Footer/></div>
</div>
  );
}

export default App;
