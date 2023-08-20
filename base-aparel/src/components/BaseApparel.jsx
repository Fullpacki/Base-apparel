import Logo from "../images/logo.svg";
import ImgHeader from "../images/hero-mobile.jpg";
import ImgHeaderDesktop from "../images/hero-desktop.jpg";
import InputArrow from "../images/icon-arrow.svg";
import { useState, useEffect } from "react";

function BaseApparel() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubcribe = () => {
    if (validateEmail(email)) {
      setErrorMessage("");
      setSuccessMessage("Thanks for subscribing! <3");
    } else {
      setErrorMessage("Please provide us a good mail address :)");
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Le message disparaîtra après 3 secondes (3000 ms)

      return () => clearTimeout(timeoutId); // Nettoyage du timeout en cas de démontage du composant
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      const errorTimeoutId = setTimeout(() => {
        setErrorMessage("");
      }, 5000); // Le message d'erreur disparaîtra après 5 secondes (5000 ms)

      return () => clearTimeout(errorTimeoutId); // Nettoyage du timeout en cas de démontage du composant
    }

    if (successMessage) {
      const successTimeoutId = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      return () => clearTimeout(successTimeoutId);
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="flex flex-col xl:flex-row">
      {/* Text container*/}
      <div className="flex flex-col xl:py-20 xl:px-40 xl:bg-hero-pattern xl:bg-cover xl:bg-[#FFF9F9]">
        <div className="w-full p-8 xl:p-0">
          <img className="w-28 xl:w-36" src={Logo} alt="" />
        </div>
        <img className="xl:hidden" src={ImgHeader} alt="" />
        <div className="flex flex-col w-full text-center xl:text-start gap-8">
          {/* Main section */}
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl xl:text-7xl tracking-[0.2em] font-semibold mt-16 xl:mt-36 text-[#463D3E]">
              <span className="text-[#C29C9D] font-thin">WE'RE</span> <br />
              COMING <br />
              SOON
            </h1>
            <p className="text-center px-8 text-sm text-[#C29C9D] xl:text-start xl:p-1 xl:w-3/4 xl:text-base ">
              Hello fellow shoppers! We're currently building our new sashion
              store. Add your email below to stay up-to-date with annoucements
              and our launch deals.
            </p>
          </div>
          {/* Main section */}
          {/* Input section */}
          <div className="w-full flex flex-row items-center justify-center border-[#C29C9D] xl:justify-start xl:mt-4">
            <input
              className="w-4/5 xl:w-3/4 px-6 py-2 rounded-full border border-[#E9DBDC] xl:bg-transparent focus:border-[#E06F6C] outline-none placeholder-[#E9D6D6]"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button
              onClick={handleSubcribe}
              className="bg-gradient-to-r from-[#F8B2B2] to-[#F19598] px-7 py-[0.7em] rounded-full -ml-[3.7em] shadow-xl"
            >
              <img src={InputArrow} alt="" />
            </button>
          </div>
          {/* Input section */}
          {/* Messages After subscribing */}
          <div className="-mt-6 animate-pulse">
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}
          </div>
          {/* Messages After subscribing */}
        </div>
      </div>
      {/* Text container*/}
      <img className="w-1/2 hidden xl:flex" src={ImgHeaderDesktop} alt="" />
    </div>
  );
}

export default BaseApparel;
