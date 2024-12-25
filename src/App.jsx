import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pass, setPassword] = useState();
  const [len, setLength] = useState(10);
  const [isNumber, setNumber] = useState(true);
  const [isSymbol, setSymbol] = useState(false);
  const [isText, setText] = useState(false);
  const [theme, setTheme] = useState("light");

  const Password = () => {
    const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%&*()?";
    let password = "";
    let textF = "";

    if (isNumber) {
      textF += number;
    }
    if (isSymbol) {
      textF += symbol;
    }
    if (isText) {
      textF += text;
    }

    for (let i = 0; i < len; i++) {
      const pas = Math.floor(Math.random() * textF.length);
      password = password + textF.charAt(pas);
    }
    setPassword(password);
  };
  const Copy = async () => {
    try {
      await navigator.clipboard.writeText(pass);
      alert("Copied");
    } catch (error) {
      alert("Error");
    }
  };

  useEffect(() => {
    Password();
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);



  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full h-screen flex flex-col items-center justify-center dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700 transition-all duration-300 p-2">
      <button
        className="absolute top-5 right-5 p-2 rounded-full bg-gray-200 border-gray-700 dark:border-gray-200 dark:text-white border-2 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-md"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <h1 className="text-5xl py-8 text-center text-white font-semibold dark:text-gray-100 transition-all duration-300">
        Password Generator
      </h1>

      <div className="bg-white dark:bg-gray-800 mx-4 text-center p-8 rounded-2xl shadow-2xl w-full max-w-lg transition-all duration-300">
        <input
          type="text"
          name="n"
          id="pass"
          value={pass}
          className="bg-green-100 dark:bg-gray-700 p-4 rounded-lg text-2xl text-center w-full border border-gray-300 dark:border-gray-600 dark:text-gray-100 focus:outline-none shadow-sm"
          disabled
        />

        <button
          className="bg-green-600 dark:bg-green-700 text-xl text-white py-3 px-5 rounded-lg w-full mt-4 shadow-lg hover:bg-green-500 dark:hover:bg-green-600 transition ease-in-out duration-300"
          onClick={() => Copy()}
        >
          Copy
        </button>

        <div className="mt-8">
          <label className="block text-gray-700 dark:text-gray-300 text-lg mb-2">
            Length : {len}
          </label>
          <input
            type="range"
            id="vol"
            name="vol"
            min="10"
            max="30"
            value={len}
            onChange={(e) => {
              Password();
              setLength(e.target.value);
            }}
            className="w-1/2 mt-2 accent-green-600 dark:accent-green-500"
          />
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex items-center">
            <label className="relative flex items-center cursor-pointer space-x-2 select-none">
              <input
                type="checkbox"
                onChange={(e) => { setNumber(e.target.checked) }}
                className="sr-only peer"
                checked={isNumber}
              />
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-green-500 transition-all duration-300 ease-in-out peer-checked:bg-green-500 peer-checked:ring-4 ring-green-300">
                <svg
                  className="hidden w-4 h-4 text-white peer-checked:block absolute inset-0 m-auto transition-opacity duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-lg font-medium transition-colors duration-300 ease-in-out peer-checked:text-green-500">
                Numbers
              </span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="relative flex items-center cursor-pointer space-x-2 select-none">
              <input
                type="checkbox"
                onChange={(e) => { setText(e.target.checked) }}
                className="sr-only peer"
              />
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-green-500 transition-all duration-300 ease-in-out peer-checked:bg-green-500 peer-checked:ring-4 ring-green-300">
                <svg
                  className="hidden w-4 h-4 text-white peer-checked:block absolute inset-0 m-auto transition-opacity duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-lg font-medium transition-colors duration-300 ease-in-out peer-checked:text-green-500">
                Text
              </span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="relative flex items-center cursor-pointer space-x-2 select-none">
              <input
                type="checkbox"
                onChange={(e) => { setSymbol(e.target.checked) }}
                className="sr-only peer"
              />
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-green-500 transition-all duration-300 ease-in-out peer-checked:bg-green-500 peer-checked:ring-4 ring-green-300">
                <svg
                  className="hidden w-4 h-4 text-white peer-checked:block absolute inset-0 m-auto transition-opacity duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-lg font-medium transition-colors duration-300 ease-in-out peer-checked:text-green-500">
                Symbols
              </span>
            </label>
          </div>
        </div>

        <button
          className="bg-yellow-600 dark:bg-yellow-700 text-xl text-white py-4 rounded-lg w-full mt-6 shadow-lg hover:bg-yellow-500 dark:hover:bg-yellow-600 transition ease-in-out duration-300"
          onClick={() => Password()}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
