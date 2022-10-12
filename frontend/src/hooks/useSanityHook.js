import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";

export const useSanityHook = () => {
  const [allSanityProductsData, setSanityProductData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        //this means if the type of the sanity schema name is post
        `*[_type == "product"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            description,
            categories,
            price,
            product_count,

        }`
      )
      .then((data) => {
        setSanityProductData(data);
      });
  }, [allSanityProductsData]);
  return { allSanityProductsData };
};
