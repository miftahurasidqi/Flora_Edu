function Login({ param, id }) {
  return (
    <main id={id} className="flex h-screen justify-center items-center p-3">
      <form action="">
        <div className="bg-gray-100 w-80 p-7 shadow-md shadow-gray-300 rounded-md">
          <h2 className="text-gray-800 text-2xl text-center mb-8 font-semibold">Login {param}</h2>

          <label className="text-gray-800" for="email">
            Email
          </label>
          <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-gray-700 mb-4" type="text" placeholder="Masukan Email" id="email" />

          <label className="text-gray-800" for="Password">
            Password
          </label>
          <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-gray-700 mb-5" type="text" placeholder="Masukan Password" id="Password" />

          <div className="flex justify-center bg-sky-400 hover:bg-sky-500 text-gray-700 rounded-md">
            <button className="flex gap-1 py-3">
              <span>Login</span>
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Login;
