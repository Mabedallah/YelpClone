import React, { useContext, useEffect } from 'react'
import RestauranFinder from '../apis/RestauranFinder';
import {RestaurantContext} from '../context/RestaurantContext';

const RestaurantsList=(props)=> {
    const {restaurants,setRestaurants} = useContext(RestaurantContext);
    useEffect(()=>{
        const fetchData=async()=>{
            try {
            const response = await RestauranFinder.get("/");
            setRestaurants(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            
        }
        };
        fetchData();
        
    },[]);
  return (
    <div className='list-group'>
        <table className="table table-hover table-dark">
            <thead>
                <tr className='bg-primary' key={0}>
                <th scope='col'>Restaurant</th>
                <th scope='col'>Location</th>
                <th scope='col'>Price Range</th>
                <th scope='col'>Ratings</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map((restaurant)=>{
                    return (
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>reviews</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    );
                        
                })}
                {/* <tr>
                    <td>The Grill House</td>
                    <td>123 Main Street</td>
                    <td>$$$$$</td>
                    <td>4 out of 5</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>The Grill House</td>
                    <td>123 Main Street</td>
                    <td>$$$$$</td>
                    <td>4 out of 5</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantsList