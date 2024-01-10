// components
import Header from './Components/Header';

// global / default scss page
import './default.scss';

// pages
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
