import React, { useState } from "react";
import trainningImg from "../../assets/content-images/trainning-img.png";
import mealImg from "../../assets/content-images/meal-img.png";
import quateImg from "../../assets/content-images/quate-img.png";
import workOutImg from "../../assets/content-images/workout.png";
import { AiFillHeart, AiFillYoutube } from "react-icons/ai";
import JoinForm from "../JoinForm/JoinForm";
import Accordian from "../Accordian/Accordian";
const premiumContents = [
  {
    _id: 1,
    img: trainningImg,
    name: "Weekly Training",
    desc: "Get the inside view of what I did for training every week! FULL BREAKDOWN",
  },
  {
    _id: 2,
    img: mealImg,
    name: "Weekly Meals",
    desc: "Each week I will document what I eat in an organised fashion",
  },
  {
    _id: 3,
    img: quateImg,
    name: "Daily Quote!",
    desc: "A quote that will empower you to achieve your dreams!",
  },
];

const Contents = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Exclusive Contents</h2>
      <h4 className="text-lg font-bold mt-5">
        Get access to all the following content⬇️
      </h4>
      {premiumContents.map((content) => {
        return (
          <div key={content._id} className="card h-[171px] mt-5 card-side border-2 shadow-xl">
            <figure className="max-w-[212px]">
              <img className=" w-full h-full" src={content.img} alt="Movie" />
            </figure>
            <div className="text-left ml-6 flex flex-col justify-center">
              <h2 className="card-title">{content.name}</h2>
              <p className="text-sm">{content.desc}</p>
              <div className="card-actions mt-6">
                <button className="action-btn bg-white px-5 py-2 text-gray-700 gap-3 shadow-white hover:shadow-2xl rounded-lg flex items-center">
                  <AiFillHeart />
                  Subscribe to Unlock
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="card h-[171px] mt-16 card-side border-2 shadow-xl">
        <figure className="w-1/2">
          <img className=" w-full h-full" src={workOutImg} alt="Movie" />
        </figure>
        <div className="text-left w-1/2 flex flex-col items-center justify-center">
          <div className="card-actions mt-6">
            <button className="action-btn bg-white px-5 py-2 text-gray-700 gap-3 shadow-white hover:shadow-2xl rounded-lg flex items-center">
              <AiFillHeart />
              Buy for $4.99
            </button>
          </div>
        </div>
      </div>

      <a
        href="https://www.youtube.com/playlist?list=PLM2ccN457sxRuVSqTHINmtkkwiJq1txwW"
        target="_blank"
        className="py-3 rounded-xl border-2 mt-5 relative block"
      >
        <AiFillYoutube className="absolute -translate-y-1/2 text-xl top-1/2 left-5" />
        <h4 className="text-xl">Speed Training Playlist </h4>
        <p className="text-sm">
          Get faster for any sport with these speed tips
        </p>
      </a>

      

      <Accordian/>
      
      <JoinForm />
    </div>
  );
};

export default Contents;
