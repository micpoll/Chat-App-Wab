import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className="w-full p-6 rounded-lg shadow-md bg-opacity-300 border border-black">
				<h1 className='text-3xl font-semibold text-center text-black'>
					Login
					<span className='text-black-500'></span>
				</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-black'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className="w-full input input-bordered h-10 border-gray-300 focus:border-blue-500 focus:outline-none"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>

					</div>
					<div>
						<label className='label'>
							<span className='text-base label-text text-black'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter password'
							className="w-full input input-bordered h-10 border-gray-300 focus:border-blue-500 focus:outline-none"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm  text-blue-400 hover:underline hover:text-black mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>{loading ?
							<span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
};

export default Login;
