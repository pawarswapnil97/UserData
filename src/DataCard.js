import React from "react";
import { Card } from "react-bootstrap";

const DataCard = ({ post }) => {
  return (
    <>
  
    <Card style={{ width: "18rem" }}className="mx-auto">
      <Card.Img variant="top" src={post.avatar} />
      <Card.Body>
        <Card.Title>{post.first_name} {post.last_name}</Card.Title>
        <Card.Text>ID: {post.id}</Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};

export default DataCard;