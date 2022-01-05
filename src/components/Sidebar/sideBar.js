import React from 'react'
import NavProp from '../Nav/Nav'

function SideBar () {
  return (
    <div className='mb-4'>
      <img src='https://res.cloudinary.com/dyfbbcvhc/image/upload/v1640447690/banner/main_tsh7e4.png' className='mx-auto d-block img-fluid' alt=""/>
        <h4 className="text-white text-center font-monospace">Main</h4>
            <div className='row gx-2'>
              <div className='col-6'>
                <NavProp nav={'home'}/>
              </div>
              <div className='col-6'>
                <NavProp nav={'characters'}/>
              </div>
            </div>
            <div className='row mt-2 gx-2'>
              <div className='col-6'>
                <NavProp nav={'weapons'}/>
              </div>
              <div className='col-6'>
                <NavProp nav={'sim'}/>
              </div>
            </div>
    </div>
  )
}

export default SideBar
