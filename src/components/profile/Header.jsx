import React from "react";

function Header() {
  return (
    <div className="flex justify-between justify-items-center my-4">
      <div className="w-1/3 text-center">
        <div className="avatar ">
          <div className="w-36 rounded-full">
            <img
              src="https://api.lorem.space/image/face?hash=92310"
              alt="avatar"
            />
          </div>
        </div>
      </div>
      <div className="w-2/3">
        <div className="grid grid-cols-3">
          <h1 className="text-2xl">Agung</h1>
          <div>
            <button className="btn btn-outline">Edit Profile</button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-6 ">
          <div className="text-lg font-light text-gray-400">
            <span className="font-bold mr-2 text-white">1</span>
            post
          </div>
          <div className="text-lg font-light text-gray-400">
            <span className="font-bold mr-2 text-white">1</span>
            followers
          </div>
          <div className="text-lg font-light text-gray-400">
            <span className="font-bold mr-2 text-white">1</span>
            following
          </div>
        </div>
        <div className="w-full mt-6">
          <h3 className="text-lg font-bold">Agung prasetio</h3>
          <p className="font-normal text-md mt-2">ini bio gan</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
