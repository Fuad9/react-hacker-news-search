import React from "react";

const NewsData = (news) => {
   const { title, points, author, num_comments, created_at, url } = news.news;

   //    const newsDate = created_at.toLocaleString();
   //    console.log(new Date(created_at).get);
   //    console.log(created_at.toLocaleString());
   //    console.log(new Date().toLocaleDateString());
   return (
      <>
         {title && (
            <div className="my-2">
               <div className="d-flex">
                  <h4>{title}</h4>
                  {url && <a href={url}>({url})</a>}
               </div>
               <div className="d-flex">
                  <p>{points} points</p>
                  <p>|{author}</p>
                  <p>|{new Date().getFullYear() - new Date(created_at).getFullYear()} years ago</p>
                  <p>|{num_comments} comments</p>
               </div>
            </div>
         )}
      </>
   );
};

export default NewsData;
