import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="memeGen">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab"></link>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
