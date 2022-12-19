import React from 'react'
import profileImg from '../../assets/jhonson.jpeg'
import {GoLocation} from 'react-icons/go'
import {MdEmail, MdVerified} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {ImTwitch} from 'react-icons/im'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsSpotify} from 'react-icons/bs'
import { FaAppStoreIos } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <img className='w-[98px] rounded-full mx-auto' src={profileImg} alt="" />
        <div>
            <h2 className='text-2xl font-bold flex justify-center items-center gap-x-1'>J Johnson Jr <MdVerified className='text-blue-600'/></h2>
            <p>Created by different elements ⚛️ Athlete & CEO</p>
            <p className='flex items-center justify-center'><GoLocation className='text-white'/>Raleigh, NC</p>
        </div>
        <div className='icons flex items-center justify-center my-5 gap-4 '>
            <a className='p-2 border-2 rounded-full'  href="mailto:a@gmail.com" target='_blank'><MdEmail className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://www.instagram.com/jstayclutch/" target='_blank'><AiOutlineInstagram className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://www.twitch.tv/jstayclutch" target='_blank'><ImTwitch className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://twitter.com/jstayclutch" target='_blank'><AiOutlineTwitter className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://www.youtube.com/channel/UC1AaIjDyA6OQfD_FhDyMjVg" target='_blank'><AiFillYoutube className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://discord.com/invite/uFzKpPBhqV" target='_blank'><AiFillGithub className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://www.tiktok.com/@jjohnsonjr" target='_blank'><FaTiktok className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://www.linkedin.com/in/jjohnson-jr/" target='_blank'><AiFillLinkedin className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://open.spotify.com/artist/73vgx1Oe4LXUj0pMDbfmCF" target='_blank'><BsSpotify className=' text-xl'/></a>
            <a className='p-2 border-2 rounded-full' href="https://apps.apple.com/us/app/bepositive-relax-meditate/id1616225876?uo=2" target='_blank'><FaAppStoreIos className=' text-xl'/></a>
        </div>
    </div>
  )
}

export default Header