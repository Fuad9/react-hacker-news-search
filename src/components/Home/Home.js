import React, { useEffect, useState } from "react";
import Axios from "axios";

import Pagination from "../Pagination/Pagination";
import News from "../News/News";
import Loading from "../utilities/Loading";

function Home() {
   const [loading, setLoading] = useState(false);
   const [news, setNews] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [newsPerPage] = useState(30);

   const [search, setSearch] = useState("");

   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await Axios.get(
               "https://hn.algolia.com/api/v1/search?hitsPerPage=1500&query=" + search
            );
            setNews(response.data.hits);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, [search]);

   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await Axios.get(
               "https://hn.algolia.com/api/v1/search?hitsPerPage=1500&query=..."
            );
            setNews(response.data.hits);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, []);

   //get current news
   const indexOfLastNews = currentPage * newsPerPage;
   const indexOfFirstNews = indexOfLastNews - newsPerPage;
   const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

   //Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <>
         <div className="d-flex justify-content-center my-3">
            <input
               className="form-control w-50"
               type="text"
               onBlur={(e) => setSearch(e.target.value)}
               placeholder="search products"
            />
            <button className="btn btn-success">Search</button>
         </div>

         {loading ? <Loading /> : <News news={currentNews} />}

         <div className="d-flex justify-content-center">
            <Pagination newsPerPage={newsPerPage} totalnews={news.length} paginate={paginate} />
         </div>
      </>
   );
}

export default Home;
