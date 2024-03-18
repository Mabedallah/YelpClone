import React from 'react'

const AddRestaurant = () => {
  return (
    <div className='mb-4'>
        <form action="">
            <div className="form-row">
                <div className="col">
                    <input type='text' className='form-control' placeholder='Restaurant Name'/>
                </div>
                <div className="col"> 
                    <input type='text' className='form-control' placeholder='Location'/>
                </div>
                <div className="col"> 
                    <input type='text' className='form-control' placeholder='Price Range'/>
                </div>
                <div className="col">
                    <button type='submit' className='btn btn-primary'>Add</button>
                </div>
                </div>
            </div>
        </form>
        </div>
  )
}

export default AddRestaurant