import React from 'react';
import NavProp from '../Nav/Nav';

function SideBar() {
    return (
        <div className='mb-4'>
            <img src="https://res.cloudinary.com/dyfbbcvhc/image/upload/v1640447690/banner/main_tsh7e4.png" className="mx-auto d-block img-fluid" alt=""/>
                <h4 className="text-white text-center font-monosh4ace">Main</h4>
                        <div className='row'>
                            <div className=' col-6'>
                                <NavProp nav={"home"}/>
                            </div>
                            <div className='col-6'>
                                <NavProp nav={"characters"}/>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-6'>
                                <NavProp nav={"weapons"}/>        
                            </div>                   
                        </div>
                    
      </div>
    );
}

export default SideBar;