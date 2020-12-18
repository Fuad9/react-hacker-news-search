import React, { useState } from "react";
import NewsData from "../NewsData/NewsData";

import Loading from "../utilities/Loading";

const News = ({ news }) => {
   const [loading] = useState(false);

   return (
      <>
         {loading ? (
            <Loading />
         ) : (
            <div className="">
               {news.map((n) => (
                  <NewsData news={n} key={Math.random()} />
               ))}
            </div>
         )}
      </>
   );
};

export default News;
