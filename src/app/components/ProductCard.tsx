'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Image as IImage} from "sanity";
import { urlForImage } from '../../../sanity/lib/image';

interface IProd{
  title:string;
  id:string;
  price:number;
  image:IImage;
}

const ProductCard = ({ title, id, price, image }: IProd) => {

  const handleAddToCart = async ()=>{
    console.log("ONCLICK")
    try{
      const res = await fetch("/api/cart",{
        method: "POST",
        body: JSON.stringify({
          product_id: id,

        })
      })

      if (!res.ok) {
        throw new Error("Failed to add to cart");
      }

      const result = await res.json();
      console.log(result);
    }catch (error) {
      console.error("Error:", error);
    }

  }

  return (
    // CARD START
    <>
    <div className='flex flex-col hover:scale-110 transition-transform duration-700'>
    <Link href={`/products/${id}`}>
    <div className='' >
      
        {/* <Image src="/products/flex-push-button-bomber.png" width={250} height={266} alt='Products' /> */}
        <Image src={urlForImage(image).url()} width={250} height={266} alt='Products' />
        <p className='text-base mt-2 font-semibold leading-6 tracking-[.03em] text-[#212121]'>{title}</p>
        {/* <p className='text-base mt-2 font-semibold leading-6 tracking-[.03em] text-[#212121]'>{id}</p> */}
        <p className='text-[15px] mt-2 font-semibold leading-[15px] text-[#888]'>Jackets</p>
        <p className='text-xl mt-4 font-semibold leading-6 tracking-[.03em] text-[#212121]'>{price}</p>
    </div>
    </Link>
        <button onClick={()=>handleAddToCart()} className='border mr-32 hover:scale-90  transition-transform rounded-md mt-4 bg-blue-900 text-white px-3 py-2'>Add to Cart</button>
        </div>
    </>
    // CARD END
  )
}

export default ProductCard