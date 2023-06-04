import React, { FunctionComponent } from "react";
import ProductCard from "../components/ProductCard";
import Wrapper from "../components/Wrapper";
import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import { client } from "../../../sanity/lib/sanityClients";

export const getProductData = async () => {
  console.log("GET");
  const res = client.fetch(`*[_type=="product"]{
  title,_id
}`);
  return res;
};

interface IProd{
  title:string;
  _id:string;
}

export default async function AllProducts() {
//console.log("recipes")
const data:IProd[] = await getProductData();
console.log(data)
 
  return (
    <section>
      <Wrapper>
        {/* ALL PRODUCTS CONTAINER - START */}
        <div className="grid grid-cols-4 gap-y-16">
        {
          data.map((item) =>(
            <ProductCard title={item.title} id={item._id}/>
          ))
        }           
        </div>
        {/* ALL PRODUCTS CONTAINER - END */}
      </Wrapper>
    </section>
  );
}
