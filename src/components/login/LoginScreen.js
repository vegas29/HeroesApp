import { useNavigate } from "react-router-dom"

export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () =>{
    navigate('/', {
      replace: true
    });
  }
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto">

          <div className="text-center">
            <i className="fa-solid fa-right-to-bracket text-5xl mt-10 mb-5 text-blue-700"></i>
            <p className="font-bold text-3xl">Sign in to your account</p>
          </div>

          <div className="mt-10 pb-5 mx-4 shadow-xl md:max-w-xl md:mx-auto bg-white rounded-xl">
            <div className="pt-10 px-7 md:px-20">
              <label 
                htmlFor="user"
                className="block mb-1"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-5 bg-gray-100 rounded-md h-10"
              />
            </div>

            <div className="pt-3 px-7 md:px-20">
              <label 
                htmlFor="user"
                className="block mb-1"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-5 bg-gray-100 rounded-md h-10"
              />
            </div>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl rounded-md my-10 py-2 mx-auto flex justify-center w-10/12 md:w-9/12"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
      </div>
    </div>
  )
}
