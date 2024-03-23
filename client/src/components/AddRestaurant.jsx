import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantFinder from '../apis/RestauranFinder' // importing restaurantfinder
import { RestaurantContext } from '../context/RestaurantContext';

const AddRestaurant = () => {
    const {addRestaurant} = useContext(RestaurantContext);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] =  useState("Price Range")
    
    // handle submit function
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post("/",{
                name,
                location,
                price_range:priceRange
            });
            addRestaurant(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            
        }
    }
  return (
    <div className='mb-4 container'>
        <form action="">
            <div className= 'row justify-content-end'>
                <div className='col'>
                    <input type='text' className='form-control' placeholder='Restaurant Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='col'> 
                    <input type='text' className='form-control' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className='col'> 
                    <select type='text' className='form-control custom-select my-1 mr-sm-2' value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                        <option disabled>Price Range</option>
                        <option value='1'>$</option>
                        <option value='2'>$$</option>
                        <option value='3'>$$$</option>
                        <option value='4'>$$$$</option>
                        <option value='5'>$$$$$</option>
                    </select>
                    
                </div>
                <div className='col'>
                <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Add</button>
                </div>
                </div>
        </form>
    </div>
  )
}

export default AddRestaurant