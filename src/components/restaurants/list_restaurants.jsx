import { useState, useEffect } from "react"
import RestaurantCard from "./card_restaurant";
import { getRestaurants } from "../../api/restaurant.api";

const ListRestaurant = () => {  
	const [restaurants, setRestaurants] = useState([]);
	
	useEffect(() => {
		getRestaurants()
		.then((response) => {
		  setRestaurants(response.data.restaurants)
		})
	  }, [])
	return (
  <div className="flex flex-col">
		{restaurants ?
			restaurants.map((data, index)=>{
				return(
					<div className="mb-3">
						<RestaurantCard data={data} key={index} />
					</div>
				);
			})
		:
		<div className="flex flex-col items-center">
			<p className="text-2xl text-center">No hay restaurantes disponibles :(</p>
		</div>}
  </div>
)}

export default ListRestaurant