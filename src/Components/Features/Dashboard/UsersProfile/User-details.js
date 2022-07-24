import React from "react";

const UserDetaisl = ({ userProfile }) => {
  return (
    <div className="card bg-base-300 rounded-box mx-2 grid flex-shrink-0 gap-4 p-4 py-8 shadow-xl xl:mx-0 w-full ">
      <div className="card-body">
        <div className="flex flex-col lg:flex-row">
          {/* name image and email */}
          <div className="grid flex-grow  space-x-2">
            <div className="flex items-center">
              <div className="avatar pr-1">
                <div className="mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px">
                  <img
                    src={userProfile?.userPhoto}
                    alt={userProfile?.userName}
                    className="mask mask-hexagon"
                  />
                </div>
              </div>
              <div>
                <div className="text-lg font-extrabold">
                  {userProfile?.userName ? userProfile.userName : "User Name"}
                </div>
                <div className="text-base-content/70 text-sm">
                  {userProfile?.userEmail
                    ? userProfile?.userEmail
                    : "Users Email"}
                </div>
              </div>
            </div>
          </div>
          {/* other details */}
          <div className="grid flex-grow flex items-center space-x-2">
            <div>
              <div className="text-md font-bold">Other Details</div>
              <div className="text-base-content/70 ">
                {userProfile?.userAddress
                  ? userProfile?.userAddress
                  : "Users Address"}
              </div>
              <div className="text-base-content/70 ">
                {userProfile?.userPhone
                  ? userProfile.userPhone
                  : "Users Phone No"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetaisl;
