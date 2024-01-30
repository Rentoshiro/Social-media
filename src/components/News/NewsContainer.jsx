import News from "./News";
import React, { useEffect } from "react";
import { useState } from "react";

function NewsContainer() {
  const [newsData, setNewsData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=e129a749e2534e4087102cd179e9e9f4"
        );
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {newsData &&
        newsData.articles.map((article, index) => (
          <div key={index}>
            <News article={article} index={index} />
          </div>
        ))}
    </>
  );
}

export default NewsContainer;
