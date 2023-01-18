import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer/indes';
import Form from './components/Form';

function App() {
  return (
    <div className="invitation">
      <div className='card'>
        <Header />
        <Body />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
