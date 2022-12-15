import React from 'react';
import img from '../../../images/ss.jpg'
const Slider = () => {
    return (
        <div className='mb-10'>
            <div className='my-12 mx-10 '>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img} alt='' className="w-full" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Slider;