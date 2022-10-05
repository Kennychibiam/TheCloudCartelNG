import React, { useEffect, useState } from "react";

export const sanityHook = () => {
  const [allSanityProductsData, setSanityProductData] = useState(null);
  useEffect(() => {}, []);
  return <div>sanityHook</div>;
};
