
import './App.css';
import Business from './Components/Business/Business';
import Header from './Components/Header/Header';
import NFT from './Components/Nft\'s/NFT';
import Contents from './Components/Weekly-Contents/Contents';

function App() {
  return (
    <div className="App ">
      <div className=' max-w-2xl mx-auto'>
      <Header/>
      <Contents/>
      <Business/>
      <NFT/>
      </div>
    </div>
  );
}

export default App;
