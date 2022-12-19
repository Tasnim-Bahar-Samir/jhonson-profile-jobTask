
import './App.css';
import Business from './Components/Business/Business';
import Header from './Components/Header/Header';
import NFT from './Components/Nft\'s/NFT';
import TopHeader from './Components/TopHeader/TopHeader';
import Contents from './Components/Weekly-Contents/Contents';
import {AiFillHeart} from 'react-icons/ai'
import {RxShare2} from 'react-icons/rx'

function App() {
  return (
    <div className="App ">
      <div className=' max-w-2xl mx-auto relative'>
      <div className='flex justify-between pt-5 sticky top-0 z-20'>
        <a className='p-3 rounded-full bg-white' href=""><RxShare2 className='text-black text-xl'/></a>
        <button className='p-3 bg-white text-blue-600 flex items-center rounded-lg'><AiFillHeart/>Subscribe</button>
      </div>
      <TopHeader/>
      <Header/>
      <Contents/>
      <Business/>
      <NFT/>
      </div>
    </div>
  );
}

export default App;
