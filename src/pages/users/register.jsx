import {useState, useEffect, useRef} from 'react'
import useAuth from '../../hooks/useAuth'
import { loginRestaurant, getRestaurants } from '../../api/restaurant.api'
import axios from 'axios'
import {Input} from "@nextui-org/react";
import EasyOrderIcon from '../../assets/icons/easy.png'
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
const server_url = import.meta.env.VITE_API_URL;

const RegisterUser = () => {
  const navigate = useNavigate();
  const {token, setToken} = useAuth();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  const [registered, setRegistered] = useState(false)
  const refImage = useRef();
  useEffect(() => {
    if(error){
      setTimeout(() => {
        setError(null)
      }, 3000);
    }
  }, [error]);


  const handleSubmit = async (e) => {
/*    e.preventDefault();
    try {
      const response = await axios.post(`${server_url}/restaurants`, { email, password, image });
      console.log(response)
      setToken(response.data.token)
  } catch (error) {
      console.log("error :(", error)
      setError(error.response.data.message)
  }*/
  e.preventDefault()
  axios.post(`${server_url}/users`, {name, email, password})
  .then((response) => {
    setRegistered(false)
    setTimeout(() => {
      setRegistered(false)
    }, 3000);
  })
  .then(() => {
    navigate('/user/login')
  })
  .catch((error) => {
    console.log(error)
  })
  console.log(refImage.current.value)
    
  }

  return (
  <div className='max-w-3xl md:w-screen md:max-w-none mx-auto'>
      <div className="flex flex-col justify-center items-center py-10 rounded">
        <img src={EasyOrderIcon} alt={'Easy Order Icon'} className='w-2/3 lg:w-1/4'/>

        <h1 className="text-4xl font-bold ">Regístrate</h1>
        <form className="justify-center items-center mt-10 grid gap-6" onSubmit={handleSubmit}>
          <Input type="text" label="Nombre" onChange={(e) => setName(e.target.value)} className='text-xl' />
          <Input type="email" label="Email" onChange={(e) => setEmail(e.target.value)} className='text-xl' />
          <Input type="password" label="Contraseña" onChange={(e) => setPassword(e.target.value)} className='text-xl' />
          {error && <p className='text-red-500 mt-5'>{error}</p>}
          <button className="bg-orange text-white rounded-md w-80 h-10 mt-5 text-xl">Registrar</button>
        </form>
        {registered && <Alert severity="success">Usuario registrado</Alert>}
      </div>
  </div>
  )
}

export default RegisterUser