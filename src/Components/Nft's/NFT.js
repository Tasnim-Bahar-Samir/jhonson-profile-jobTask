import React from 'react'
import { GoLinkExternal } from 'react-icons/go'
import img1 from '../../assets/NFT-imges/img1.png'
import img2 from '../../assets/NFT-imges/img2.png'
import img3 from '../../assets/NFT-imges/img3.jpeg'

const nfts = [
  {
    _id: 1,
    img: img1,
    name: 'J Johnson Jr on the moon',
    desc: 'Buy a collectible 1 of 1 NFT designed by me!',
    price: 777,
    link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/13639732610398022500787212775132617559971364072763760603590368014897216749569'
  },
  {
    _id: 2,
    img: img2,
    name: "J Johnson Jr's Dream",
    desc: 'Buy a collectible 1 of 1 NFT designed by me!',
    price: 777,
    link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/13639732610398022500787212775132617559971364072763760603590368015996728377345'
  },
  {
    _id: 3,
    img: img3,
    name: 'Nike ZoomX Invincible Run Flyknit',
    desc: 'New Nike running Shoes 💨',
    price: 180,
    link: 'https://www.nike.com/w?cid=4942550&cp=usns_aff_nike_content_PID_100579607_J+Johnson+Jr+LLC&cjevent=e06bdc297fa411ed83a901180a180510'
  },
]
const NFT = () => {
  return (
    <div>
      {
        nfts.map(nft => {
          return<a href={nft?.link} target ='_blank' key={nft._id} className="card h-[171px] mt-5 card-side border-2 shadow-xl">
          <figure className="max-w-[212px]">
            <img className=" w-full h-full" src={nft.img} alt="Movie" />
          </figure>
          <div className="text-left ml-6 flex flex-col justify-center">
            <h2 className="card-title">{nft.name}</h2>
            <p className="text-sm">{nft.desc}</p>
            <div className="card-actions mt-6">
              <button className= "action-btn bg-white px-5 py-2 text-gray-700 gap-3 shadow-white hover:shadow-2xl rounded-lg flex items-center">Buy for ${nft.price}<GoLinkExternal/></button>
            </div>
          </div>
        </a>;
        })
      }
    </div>
  )
}

export default NFT