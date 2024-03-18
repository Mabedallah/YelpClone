import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddRestaurant = () => {
  return (
    <div className='mb-4 container'>
        <form action="">
            <div className= 'row justify-content-end'>
                <div className='col'>
                    <input type='text' className='form-control' placeholder='Restaurant Name'/>
                </div>
                <div className='col'> 
                    <input type='text' className='form-control' placeholder='Location'/>
                </div>
                <div className='col'> 
                    <select type='text' className='form-control custom-select my-1 mr-sm-2'>
                        <option disabled>Price Range</option>
                        <option value='1'>$</option>
                        <option value='2'>$$</option>
                        <option value='3'>$$$</option>
                        <option value='4'>$$$$</option>
                        <option value='5'>$$$$$</option>
                    </select>
                    
                </div>
                <div className='col'>
                <button className='btn btn-primary'>Add</button>
                </div>
                </div>
        </form>
    </div>
  )
}

export default AddRestaurant