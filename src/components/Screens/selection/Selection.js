import React from 'react';
const Selection = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 my-14 gap-20 mx-14'>
            <div className='flex gap-6'>
                <img className='w-20 h-20' src="https://stunhaul.com/wp-content/uploads/2022/02/footer-image-box-01.png" alt="" />
                <div>
                    <h1 className='text-2xl font-bold pb-4'>High Quality Selection</h1>
                    <p className='text-xl sm:hidden md:hidden lg:block'>Total Product Quality Control For Peace Of Mind</p>
                </div>
            </div>
            <div className='flex gap-6'>
                <img className='w-20 h-20' src="https://stunhaul.com/wp-content/uploads/2022/02/footer-image-box-02.png" alt="" />
                <div>
                    <h1 className='text-2xl font-bold pb-4'>Affordable Prices</h1>
                    <p className='text-xl sm:hidden md:hidden lg:block'>Factory Direct Prices For Maximum Savings</p>
                </div>
            </div>
            <div className='flex gap-6'>
                <img className='w-20 h-20' src="https://stunhaul.com/wp-content/uploads/2022/02/footer-image-box-03.png" alt="" />
                <div>
                    <h1 className='text-2xl font-bold pb-4'>Secure Payment</h1>
                    <p className='text-xl sm:hidden md:hidden lg:block'>Fast, Reliable Delivery From Global  Warehouses
                    </p>
                </div>
            </div>
            <div className='flex gap-6'>
                <img className='w-20 h-20' src="https://stunhaul.com/wp-content/uploads/2022/02/footer-image-box-04.png" alt="" />
                <div>
                    <h1 className='text-2xl font-bold pb-4'>
                        Worry Free</h1>
                    <p className='text-xl sm:hidden md:hidden lg:block'>Instant Access To 
                        Professional Support</p>
                </div>
            </div>
        </div>
    );
};

export default Selection;