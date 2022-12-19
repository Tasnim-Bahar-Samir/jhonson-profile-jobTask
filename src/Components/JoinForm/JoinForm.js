import React, { useState } from "react";

const JoinForm = () => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  if(submit) {
    return <div className="my-5">
      <h4 className="text-xl">You are now in the mix! 🥳</h4>
    </div>;
  }
  return (
    <div className="p-5 border-2 rounded-xl mt-5">
      <h3 className="text-xl">Join the squad</h3>
      <p className="text-sm">Know when I drop merch & speed vlogs</p>

      <form onSubmit={handleSubmit}>
        <input
          className="border-2 w-full bg-transparent rounded-xl p-2 mt-2"
          placeholder="Email"
          type="email"
          required
        />
        <input
          className="border-2 w-full mt-2 bg-transparent rounded-xl p-2"
          placeholder="Phone#"
          type="number"
          required
        />
        <div className="mt-4">
          <input
            defaultChecked
            className="ml-3"
            type="radio"
            name="join-mode"
            id="fan"
          />
          <label className="ml-2" htmlFor="fan">
            I'm a fan
          </label>
          <input
            className="ml-3  checked:border-5"
            type="radio"
            name="join-mode"
            id="brand"
          />
          <label className="ml-2" htmlFor="brand">
            I'm a brand
          </label>
          <input className="ml-3" type="radio" name="join-mode" id="creator" />
          <label className="ml-2" htmlFor="creator">
            I'm a creator
          </label>
        </div>
        <button className="px-5 py-2 mt-3 bg-white rounded-lg text-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
