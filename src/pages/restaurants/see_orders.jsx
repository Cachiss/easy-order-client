import {useState, useEffect} from 'react'
import { CircularProgress } from '@nextui-org/react';
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../../api/restaurant.api';
import useShopCar  from '../../hooks/useShopCar';
import { io } from 'socket.io-client';

const socket = io('ws://ec2-54-190-31-99.us-west-2.compute.amazonaws.com:3005');
const SeeOrders = () => {
    const {name} = useParams();
    console.log(name);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [orderChange, setOrderChange] = useState(false);
    useEffect(() => {
      socket.on('connect', () => {
        console.log('connected')
        })
        socket.on('restaurant', (data) => {
            console.log(data)
            setOrderChange(!orderChange)
        })
    
      return () => {
        socket.off('order')
      }
    }, [])
    
    useEffect(() => {
        getRestaurant(name)
        .then((response) => {
            console.log(response.data);
            setOrders(response.data.restaurant.orders)
        })
        .finally(() => setLoading(false))
    }, [orderChange]);
  return (
    <>
        {loading ? 
        <div className='h-screen flex justify-center items-center'>
            <CircularProgress color="warning" aria-label="Loading..."/>

        </div> :
         <div className='max-w-3xl md:w-screen md:max-w-none mx-auto h-screen'>
            <div className="flex flex-col justify-center items-center px-10 py-10 rounded">
                <h1 className="text-6xl font-bold ">{name}</h1>

                <div className='flex flex-wrap lg:mt-10'>

                    {orders.length >0  ? orders?.filter((order) => order).map((order) => {
                        return (
                            <Card className='py-2 mt-5 lg:mr-5 ' id='hero-sm'>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <div className='text-xl'>Pedido {Math.floor(Math.random() * (2981 - 1) + 1)}</div>
                    </CardHeader>
                    <CardBody className='flex justify-between' >
                    <ul className='flex flex-col'>
                        {order.dishes.map((product) => <li className='text-xl list-item'>{product}</li>)}
                    </ul>
                        <Button color='success' className='mt-5' >Entregada</Button>
                    </CardBody>
                </Card>
                        )
                    }) : 
                    <div className='flex justify-center '>
                        <p className='text-orange text-2xl'>Aún no hay pedidos</p>
                    </div> 
                    }
                </div>
            </div>
         </div>
        }
    </>
  )
}

export default SeeOrders