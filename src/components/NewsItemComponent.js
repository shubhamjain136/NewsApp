import React from "react";
import { Card, Button } from "react-bootstrap";
function NewsItemComponent({
  url,
  urlToImage,
  description,
  title,
  content,
  author,
  date,
  source,
}) {
  return (
    // <div>
    <Card
      style={{
        width: "15.5rem",
        // margin: "40px 40px",
        margin: "auto",
        marginBottom: "50px",
        height: "550px",
        background: "#ced6d4",
      }}
    >
      <Card.Img
        variant="top"
        style={{ maxHeight: "160px" }}
        src={
          urlToImage
            ? urlToImage
            : `https://source.unsplash.com/1600x900/?child,children`
        }
      />
      <Card.Body>
        <Card.Title>
          {title.slice(0, 75) + (title.length > 75 ? "..." : "")}
        </Card.Title>
        <Card.Text>
          {description
            ? description.slice(0, 200) +
              (description.length > 200 ? "..." : "")
            : content
            ? content.slice(0, 200) + (content.length > 200 ? "..." : "")
            : ""}
        </Card.Text>
        <p
          className="text-muted "
          style={{
            paddingTop: "20px",
            fontSize: "0.8rem",
            position: "absolute",
            bottom: "20px",
            left: "6px",
          }}
        >
          By {author ? author : "Unknown"} published at{" "}
          {new Date(date).toLocaleString()}
        </p>
        <span
          className="badge badge-pill badge-danger"
          style={{
            position: "absolute",
            right: "0px",
            top: "0px",
            background: "#dc3545",
          }}
        >
          {source}
        </span>
        <Button
          variant="dark"
          size="sm"
          href={url}
          target="_blank"
          style={{
            position: "absolute",
            display: "inline",
            right: "10px",
            bottom: "10px",
          }}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItemComponent;
