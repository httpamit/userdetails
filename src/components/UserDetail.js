import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
const iconPath = process.env.PUBLIC_URL + "/assets/dummyimage.jpg/";

export default function UserDetail(props) {
  const userId = props.match.params.userId;
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUser();
  }, [userId]);

  return (
    <>
      <h3>User detail</h3>
      {user && (
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Text>Name: {user.name}</Card.Text>
            <Card.Text>Username: {user.username}</Card.Text>
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>Phone: {user.phone}</Card.Text>
            <Card.Text>Website: {user.website}</Card.Text>
            <Card.Text>
              Address: {user.address.city}, {user.address.street}{" "}
              {user.address.suite}
              {user.address.zipcode}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
