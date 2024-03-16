import React from "react";

function Sidebar() {
  const data = [
    {
      id: 1,
      icon: require("../Assets/Images/navig.png"),
    },
    {
      id: 2,
      icon: require("../Assets/Images/star.png"),
    },
    {
      id: 3,
      icon: require("../Assets/Images/messenger.png"),
    },
    {
      id: 4,
      icon: require("../Assets/Images/arrow.png"),
    },
    {
      id: 5,
      icon: require("../Assets/Images/earth.png"),
    },
  ];

  const users = [
    {
      id: 1,
      icon: require("../Assets/Images/Image.png"),
    },
    {
      id: 2,
      icon: require("../Assets/Images/Image1.png"),
    },
    {
      id: 3,
      icon: require("../Assets/Images/Image2.png"),
    },
    {
      id: 4,
      icon: require("../Assets/Images/Image3.png"),
    },
    {
      id: 5,
      icon: require("../Assets/Images/plus.png"),
    },
  ];

  return (
    <div className="w-24 bg-[#EDEFF2] flex flex-col items-center justify-between py-8 border-2 border-r-[#EDEFF2]">
      <div className="flex flex-col items-center justify-between gap-3">
        {data.map((item, index) => {
          return (
            <div className="bg-[#ffffff] w-12 h-12 rounded-full shadow-md flex items-center justify-center">
              <img src={item.icon} className="w-5 h-5" />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-between gap-3">
        {users.map((item, index) => {
          return (
            <div>
              <img src={item.icon} className="w-12 h-12" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
