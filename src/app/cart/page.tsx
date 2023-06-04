import React from 'react'
import Wrapper from '../components/Wrapper'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'

const ShoppingCart = () => {
    return (
        <section>
            <Wrapper>
                <div className='p-12'>
                    <div className='text-2xl font-bold'>Shopping Cart</div>

                    <div className='flex gap-16  '>
                        {/* CARD LEFT SIDE */}
                        <div className='flex gap-8 mt-8  '>
                            {/* CARD IMAGE */}
                            <div>
                                <Image className='rounded-lg' src="/cart-1.png" alt="" width={154} height={190} />

                            </div>
                            {/* CARD DETAILS */}
                            <div className='flex flex-col justify-between '>
                                <div className='flex justify-between items-center '>
                                    <div className='font-light text-[1.3rem] leading-[25px] text-[#212121] pr-[150px]'>Brushed Raglan Sweatshirt</div>
                                    <div><RiDeleteBin6Line className='text-xl' /></div>
                                </div>
                                <div className='leading-16px text-[#666] font-semibold text-base'>Dress</div>
                                <div className='font-semibold text-base leading-[22px] text-[#212121]'>Delivery Estimation</div>
                                <div className='text-[#ffc700] font-semibold text-base leading-[22px]'>5 Working Days</div>
                                <div className='flex justify-between'>
                                    <div className='font-bold text-[1.1rem] leading-5 tracking-[.1em] text-[#212121]'>$195</div>
                                    <div className='flex'>
                                        <span className='bg-gray-200 flex w-9 h-9 rounded-full justify-center items-center text-lg font-bold gr-[10px] hover:cursor-pointer transition-transform  hover:scale-110 duration-200'>-</span>
                                        <span className=' flex w-9 h-9 rounded-full justify-center items-center text-lg  gr-[10px]'>1</span>
                                        <span className='bg-gray-200 flex w-9 h-9 rounded-full justify-center items-center text-lg font-bold gr-[10px]  hover:cursor-pointer transition-transform  hover:scale-110 duration-200'>+</span>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ORDER SUMMARY */}
                        <div className='flex flex-col gap-8 p-8 '>
                            <h3 className='text-[19px] font-bold'>Order Summary</h3>
                            <div className='flex justify-between'>
                                <div>Quantity</div>
                                <div>1 Product</div>
                            </div>
                            <div className='flex justify-between'>
                                <div>Sub Total</div>
                                <div>$225</div>
                            </div>
                            <button className=' flex justify-center items-center gap-2 text-[.875rem]  px-[10px] font-semibold leading-[18px]  border-2  border-black  bg-[#212121] text-white py-[10px]'>
                    Proceed to Checkout
                  </button>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default ShoppingCart