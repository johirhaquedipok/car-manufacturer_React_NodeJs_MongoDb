import React from "react";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";

const ResetPassword = () => {
  const [user] = useAuthState(auth);
  const [updatePassword, updating, error] = useUpdatePassword(auth);
  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // reset password
  const resetPassword = async (data) => {
    await updatePassword(data.password);
    toast.success("Updated password. Sign in to see your account");
  };

  if (updating) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      <div className="card md:w-96 glass">
        <div className="card-body">
          <div className="mb-4">
            <h3 className="card-title">Reset Password </h3>

            <p className="text-white">Please enter your new password.</p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit(resetPassword)}>
            {/* error message */}
            {error && <Error>{error?.message}</Error>}

            {user && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white tracking-wide">
                  Email
                </label>
                <input
                  className="ghost w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="email"
                  placeholder="Your Email"
                  value={user?.email}
                  disabled
                />
              </div>
            )}

            {/* password field */}
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
            <button
              type="submit"
              className="btn btn-outline btn-secondary w-full flex justify-center  hover:bg-secondary-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
            >
              Reset Your Password
            </button>
          </form>
          {/* social sing in */}
          {!user && (
            <div>
              <div className="divider">OR</div>
              <div>
                <p className="text-center mb-2">Go to sign in page</p>
                <div className="card-actions justify-center">
                  <Link
                    to="/signin"
                    className=" btn btn-primary w-full flex justify-center  hover:bg-primary-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Go to sing in page
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
