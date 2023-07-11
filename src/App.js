import './App.css'
import NavBar from './components/NavBar';
import Intro from './components/intro/intro';

import Services from './components/Services/Services';
function App() {
  return (
    <div className="App">
   <NavBar/>
   <Intro/>
   <Services/>
    </div>
  );
}

export default App;
