import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    <Error>{error.message}</Error>;
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      <div className="card w-96 glass">
        <div className="card-body">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl">Sign In </h3>
            <h2 className="card-title">Life hack</h2>
            <p className="text-white">Please sign in to your account.</p>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white tracking-wide">
                Email
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-white tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-white"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-green-400 hover:text-green-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className=" btn btn-primary w-full flex justify-center  hover:bg-primary-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="divider">OR</div>
          <p>Sign In with social</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-secondary w-full flex justify-center  hover:bg-secondary-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              onClick={() => signInWithGoogle()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
