import "./assets/App.css"
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Jobs from './components/Jobs.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Jobs/>
      <Footer/>
    </div>
  );
}

export default App;
