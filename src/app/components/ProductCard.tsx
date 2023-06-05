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
  return (
    // CARD START
    <Link href={`/productdetail/${id}`}>
    <div>
      
        {/* <Image src="/products/flex-push-button-bomber.png" width={250} height={266} alt='Products' /> */}
        <Image src={urlForImage(image).url()} width={250} height={266} alt='Products' />
        <p className='text-base mt-2 font-semibold leading-6 tracking-[.03em] text-[#212121]'>{title}</p>
        {/* <p className='text-base mt-2 font-semibold leading-6 tracking-[.03em] text-[#212121]'>{id}</p> */}
        <p className='text-[15px] mt-2 font-semibold leading-[15px] text-[#888]'>Jackets</p>
        <p className='text-xl mt-4 font-semibold leading-6 tracking-[.03em] text-[#212121]'>{price}</p>
        <button className='border bg-blue-900 text-white px-3 py-2'>Add to Cart</button>
    </div>
    </Link>
    // CARD END
  )
}

export default ProductCard