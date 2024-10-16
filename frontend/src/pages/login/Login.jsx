import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }

  return <div className='fixed top-13 items-center justify-center min-w-96 mx-auto'>
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-bold text-center text-gray-300">
        Login <span className="text-blue-300"> ChatApp</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-white">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to={'/signup'} className="text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block">
          Don't have an account?
        </Link>

        <div>
          <button className="btn btn-block btn-sm mt-2 h-10 bg-gray-400 text-base text-black font-semibold"
            disabled={loading}  
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </div>
      </form>

    </div>
  </div>
};

export default Login;
