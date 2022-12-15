import React from 'react';
import Category from './category/Category';
import Selection from './selection/Selection';
import Slider from './slide/Slider';


const Categories = () => {
    return (
       <div className='secondary-content'>
            <Slider/>
            <Category/>
            <Selection/>
       </div> 
    )
};

export default Categories;