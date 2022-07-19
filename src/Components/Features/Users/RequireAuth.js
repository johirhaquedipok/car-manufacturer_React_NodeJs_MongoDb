import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Utilities/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  // email verification
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);

  // veify email fn
  const verifyEmail = async () => {
    await sendEmailVerification();
    toast.success("Sent email");
  };

  const location = useLocation();

  if (loading || sending) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // if email is not verified
  /* email verificaton works properly but disables for instructors order */

  /*   if (
    user?.providerData[0]?.providerId === "password" &&
    !user?.emailVerified
  ) {
    return (
      <div className="flex justify-center items-center">
        <div className="card items-center justify-center w-96 glass bg-error hover:bg-error self-center">
          {verifyError && <Error>{verifyError?.message}</Error>}
          <div className="card-body text-neutral text-center">
            <h2 className="card-title justify-center ">
              Please Verify Your Email
            </h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-center text-neutral">
              <button className="btn btn-accent" onClick={verifyEmail}>
                Send Verification Email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } */

  return children;
};

export default RequireAuth;
