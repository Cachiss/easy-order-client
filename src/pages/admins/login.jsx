import {useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth'
import { loginRestaurant, getRestaurants } from '../../api/restaurant.api'
import axios from 'axios'
import {Input} from "@nextui-org/react";
import EasyOrderIcon from '../../assets/icons/easy.png'

const server_url = import.meta.env.VITE_API_URL;

const LoginAdmin = () => {
  const {token, setToken} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  useEffect(() => {
    if(error){
      setTimeout(() => {
        setError(null)
      }, 3000);
    }
  }, [error]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${server_url}/restaurants/login`, { email, password });
      console.log(response)
      setToken(response.data.token)
  } catch (error) {
      console.log("error :(", error)
      setError(error.response.data.message)
  }

    
  }

  return (
  <div className='max-w-3xl md:w-screen md:max-w-none mx-auto'>
      <div className="flex flex-col justify-center items-center py-10 rounded">
        <img src={EasyOrderIcon} alt={'Easy Order Icon'} className='w-2/3 lg:w-1/4'/>

        <h1 className="text-4xl font-bold ">Panel de administración</h1>
        <form className="flex flex-col justify-center items-center mt-10 " onSubmit={handleLogin}>
          <Input type="email" label="Email" onChange={(e) => setEmail(e.target.value)} className='text-xl' />
          <Input type="password" label="Contraseña" onChange={(e) => setPassword(e.target.value)} className='mt-6 text-xl' />
          {error && <p className='text-red-500 mt-5'>{error}</p>}
          <button className="bg-orange text-white rounded-md w-80 h-10 mt-5 text-xl">Iniciar sesión</button>
        </form>
      </div>
  </div>
  )
}

export default LoginAdmin