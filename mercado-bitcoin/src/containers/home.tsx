import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3000/registration').then((data) => {
      console.log('get', data.data);
    }).catch((error) => {
      alert(`${error.response.data.error}`);
    });
  }, [])

  const registerNewUser = () => {
    navigate("/registration");
  }


  return (
    <div className="min-h-screen min-w-full bg-gray-100  max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Home</h2>
      <button
        type="button"
        onClick={registerNewUser}
        className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg `}
      >
        Registrar novo
      </button>
    </div>
  )
}

export default Home