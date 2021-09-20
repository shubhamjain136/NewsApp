import React, { useEffect, useState } from "react";
import NewsItemComponent from "./NewsItemComponent";
import { Container, Row, Col } from "react-bootstrap";
import LoadingBar from "react-top-loading-bar";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
function NewsComponent({ category, country, apiKey, pageSize }) {
  const [newsState, setNewsState] = useState([]);
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setProgress(50);
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&sortBy=popularity&apiKey=${apiKey}&pageSize=${pageSize}&country=${country}&page=${page}`
      );
      setProgress(70);
      const articles = await data.json();
      setNewsState((prevNews) => [...prevNews, ...articles.articles]);
      setTotalResults(articles.totalResults);
      setProgress(100);
    };

    fetchData();
  }, [apiKey, country, page, category, pageSize]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNewsState([]);
    setPage(1);
  }, [category]);

  const handlePrev = () => {
    setPage((page) => page - 1);
  };

  const handleNext = async () => {
    setPage((page) => page + 1);
  };
  const fetchMoreData = async () => {
    setPage((page) => page + 1);
  };
  let capitalizeCategory =
    category.slice(0, 1).toUpperCase() + category.slice(1);
  return (
    <>
      <LoadingBar
        color="#24877f"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        // className="ml-auto"
      />
      <Container style={{ overflow: "hidden" }}>
        <h2 className="text-light text-center mb-4">
          {capitalizeCategory} Headlines
        </h2>
        <InfiniteScroll
          dataLength={newsState.length}
          next={fetchMoreData}
          hasMore={newsState.length !== totalResults}
          loader={<Loader />}
          // loader={<h1 className="text-center border">Loading</h1>}
        >
          {/* <Container> */}
          <Container style={{ minHeight: "100vh" }}>
            <Row xs={1} sm={2} md={3} lg={4}>
              {newsState.map((item) => {
                return (
                  <Col key={item.url}>
                    <NewsItemComponent
                      url={item.url}
                      urlToImage={item.urlToImage}
                      description={item.description}
                      title={item.title}
                      content={item.content}
                      date={item.publishedAt}
                      author={item.author}
                      source={item.source.name}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
          {/* </Container> */}
        </InfiniteScroll>
        {/* <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "20px",
          }}
          className="container"
        >
          <button
            className="btn btn-dark"
            onClick={handlePrev}
            disabled={page <= 1}
          >
            &larr; Prev
          </button>
          <button
            className="btn btn-dark"
            onClick={handleNext}
            disabled={
              totalResults && page + 1 > Math.ceil(totalResults / pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </Container> */}
      </Container>
    </>
  );
}

export default NewsComponent;
