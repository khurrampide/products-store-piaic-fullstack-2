import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Promotions from './components/Promotions'
import { createClient } from 'contentful'
import ProductsHome from './components/ProductsHome'
import HomeSeeAllProducts from './components/HomeSeeAllProducts'
import HomeSubscribe from './components/HomeSubscribe'
import HomeFooterMenus from './components/HomeFooterMenus'
import {client} from '../../sanity/lib/sanityClients'

export const getProductData = async () =>{
  console.log("GET")
const res = client.fetch(`*[_type=="product"]{
  title,description
}`);
return res;
}

export default async function Home() {

  const data = await getProductData();
  console.log(data);
  console.log("Home")
  return (
    <>
    
      <Hero/>
      <Promotions/>
      <ProductsHome/>
      <HomeSeeAllProducts/>
      <HomeSubscribe/>
      <HomeFooterMenus/>

    </>
  )
}
