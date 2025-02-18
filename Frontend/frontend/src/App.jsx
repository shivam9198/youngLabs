import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "./utils/baseUrl";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name) {
      setMessage("Error: Name is required.");
      return;
    }
    try {
      const response = await axios.get(
        baseUrl + `/api/greet?name=${name}`,{withCredentials:true}
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error fetching data.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Younglabs Greeting App</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
            Enter your name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={getGreeting}
        >
          Get Greeting
        </button>

        {message && (
          <h2 className="text-center mt-4 text-lg font-semibold text-gray-800">
            {message}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
