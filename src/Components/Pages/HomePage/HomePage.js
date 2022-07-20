import axios from "axios";
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useQuery } from "react-query";
const HomePage = () => {
  async function fetchPosts() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  }
  const { isLoading, data } = useQuery("users", fetchPosts);

  console.log(data);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <div>
      <p className="text-center text-4xl">HomePage</p>

      {/* example */}

      <div
        className="bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)",
        }}
      >
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          {/* <div className=" bg-gradient-to-b from-green-500 to-green-400 opacity-75 "></div> */}
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl ">
            <div className="self-start hidden lg:flex flex-col  text-white">
              {/* <img src="" class="mb-3"/> */}
              <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back Jo</h1>
              <p className="pr-3">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
