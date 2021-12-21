import React from 'react';
import NavProp from '../Nav/Nav';

function SideBar(props) {
    return (
        <div>
            <img src="https://gdurl.com/HL5O" class="mx-auto d-block img-fluid" alt=""/>
                <p className="text-white text-center">Main</p>
                        <div className='row'>
                            <div className='col-6'>
                                <NavProp nav={"home"}/>
                            </div>
                            <div className='col-6'>
                                <NavProp nav={"detail"}/>
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