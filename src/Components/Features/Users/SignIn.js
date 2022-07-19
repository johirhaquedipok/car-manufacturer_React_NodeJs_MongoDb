import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div>
      <p className="text-4xl text-center">Sign In</p>
      <button className="btn btn-accent" onClick={() => signInWithGoogle()}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
