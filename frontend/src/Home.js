import React from "react";
import { useSanityHook } from "./hooks/useSanityHook";
import sanityClient from "./sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const Home = () => {
  const { allSanityProductsData } = useSanityHook();

  return (
    <div className="home-div">
      {allSanityProductsData &&
        allSanityProductsData.map((sanityProduct, index) => (
          <div className={"product-div"} key={index}>
            <div>
              <img
                //urlFor(sanityProduct.authorImage).url()
                src={sanityProduct.mainImage.asset.url}
                className={"productImageList"}
              />
            </div>
            <div>
              <h4>{sanityProduct.title}</h4>
            </div>
            <div>
              <h4>{sanityProduct.price}</h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
