import classes from "./news.module.css";
import { Button } from "@mui/material";
import icon from "../../images/icon.jpeg";

function News({ article }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className={classes.blogContainer}>
        <div className={classes.blogHeader}>
          <img
            className={classes.blogCover}
            src={
              article.urlToImage
                ? article.urlToImage
                : "https://i.pinimg.com/564x/4b/98/3f/4b983f8f55f40897f3a4520cfdae8c3a.jpg"
            }
          />
        </div>

        <div className={classes.blogBody}>
          <div className={classes.blogTitle}>
            <h1>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h1>
          </div>
          <div className={classes.blogSummary}>
            <p>{article.description}</p>
          </div>
        </div>

        <div className={classes.blogFooter}>
          <p>
            <span className={classes.author}>Author</span>:{" "}
            {article.author ? article.author : "No author"}
          </p>
          <ul>
            <li className={classes.publishedDate}>
              {formatDate(article.publishedAt)}
            </li>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <Button variant="contained">Read more</Button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default News;
