import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";

const SignUp = () => {
  // checkbox state
  const [check, setCheck] = useState(false);

  // google sign in
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  // create user with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

  // update name
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // use token form navite user
  const [token] = useToken(guser || user);
  // navigate
  const navigate = useNavigate();
  // location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [navigate, token, from]);

  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // sing in with email and password
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success("Your account has been created");
  };

  if (gloading || loading || updating) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      <div className="card md:w-96 glass">
        <div className="card-body">
          <div className="mb-4">
            <h3 className="card-title">Sign Up </h3>

            <p className="text-white">Please provide all info.</p>
          </div>

          {/* error message */}
          {(gerror || error || updateError) && (
            <Error>
              {error?.message} {gerror?.message} {updateError?.message}
            </Error>
          )}

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white tracking-wide">
                Name
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="Your Name"
                {...register("name", {
                  required: true,
                  pattern: {
                    message: "Provide your name",
                  },
                })}
              />
              {errors.name?.type === "required" && (
                <p className="text-error">Name is required</p>
              )}
            </div>

            {/* email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white tracking-wide">
                Email
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Provide a valid email",
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-error">Email is required</p>
              )}
            </div>

            {/* passowrd */}
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-white tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="password"
                placeholder="Your Password"
                {...register("password", { required: true, min: 6 })}
              />
              {errors.password && (
                <p className="text-error">Password is required</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              {/* chechbox */}
              <div
                className="flex items-center"
                onClick={() => setCheck(!check)}
              >
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
                  Agree terms and conditions
                </label>
              </div>

              {/* reset password link */}
              <div className="text-sm">
                <Link
                  to="/resetpwd"
                  className="text-green-400 hover:text-green-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            {/* submit button */}
            <div>
              <button
                type="submit"
                className=" btn btn-primary w-full flex justify-center  hover:bg-primary-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                disabled={check ? false : true}
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* social sing in */}
          <div className="divider">OR</div>
          <div>
            <p className="text-center my-2">Sign In with social</p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-secondary w-full flex justify-center  hover:bg-secondary-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                onClick={() => signInWithGoogle()}
              >
                Sign In with Google
              </button>
            </div>
          </div>

          {/* sign up*/}
          <div>
            <p className="text-center my-2">Not Have Any account?</p>
            <div className="card-actions justify-center">
              <Link
                to="/signin"
                className="btn btn-outline btn-info w-full flex justify-center  hover:bg-secondary-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
