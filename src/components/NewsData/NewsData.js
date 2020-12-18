import React from "react";

const NewsData = (news) => {
   const { title, points, author, num_comments, created_at, url } = news.news;

   return (
      <>
         {title && (
            <div className="my-2">
               <div className="d-flex">
                  <h4 style={{ color: "orange" }}>{title}</h4>
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
