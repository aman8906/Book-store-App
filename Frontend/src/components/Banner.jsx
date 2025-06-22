import React, { useState } from "react";
import axios from "axios";

function Banner() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) return setMessage("Please enter an email");

    try {
      const res = await axios.post("http://localhost:5000/api/subscribe", { email });
      if (res.status === 201) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // clear input
      }
    } catch (error) {
      setMessage("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, welcome to <span className="text-pink-500">SkillCart!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Upgrade your knowledge. Subscribe now and get updates!
          </p>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="grow"
              placeholder="Enter your email"
            />
          </label>

          <button onClick={handleSubmit} className="btn mt-4 btn-secondary">
            Subscribe
          </button>
          <p className="text-green-500 mt-2">{message}</p>
        </div>
      </div>

      <div className="order-1 w-full mt-20 md:w-1/2">
        <img src="/Banner.png" alt="Banner" className="md:w-[550px] md:h-[460px] md:ml-12" />
      </div>
    </div>
  );
}

export default Banner;
