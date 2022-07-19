import React from "react";

const AvatarCard = ({ user, signout }) => {
  const { photoURL, email, displayName } = user;
  return (
    <div className="card bg-base-100 rounded-box   mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full glass">
      <div className=" avatar">
        <div className="w-24 mask mask-squircle bg-base-contetnmask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px">
          <img src={photoURL} alt="profile" />
        </div>
      </div>
      <div className="card-body">
        <div className="w-full text-center">
          <div className="text-lg font-extrabold">{displayName}</div>
          <div className="text-base-content/70 my-3 text-sm">{email}</div>
        </div>

        <div className="card-actions justify-center">
          <button
            className="btn btn-secondary btn-block space-x-2"
            onClick={signout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
