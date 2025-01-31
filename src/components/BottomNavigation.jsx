import React from "react";
import { useNavigate } from "react-router-dom";
import homeIcon from "../assets/home.png";
import earnIcon from "../assets/earn.png";
import referralsIcon from "../assets/referrals.png";

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-gray-800 p-4 flex justify-around items-center">
      <div
        className="flex flex-col items-center w-[20%] md:w-6 text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={homeIcon} alt="Home" className="w-full" />
        <span className="text-xs md:text-sm">Home</span>
      </div>
      <div
        className="flex flex-col items-center w-[20%] md:w-6 text-white cursor-pointer"
        onClick={() => navigate("/earn")}
      >
        <img src={earnIcon} alt="Earn" className="w-full" />
        <span className="text-xs md:text-sm">Earn</span>
      </div>
      <div
        className="flex flex-col items-center w-[20%] md:w-6 text-white cursor-pointer"
        onClick={() => navigate("/referrals")}
      >
        <img src={referralsIcon} alt="Referrals" className="w-full" />
        <span className="text-xs md:text-sm">Referrals</span>
      </div>
    </div>
  );
};

export default BottomNavigation;