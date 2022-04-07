import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(1);

  // fetch users
  async function fetchUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  }

  function renderUser() {
    return users.map((user, index) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>
          <Link to={`/${user.id}`}>{user.name}</Link>
        </td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.phone}</td>
      </tr>
    ));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <>
      <h3>Users</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>{renderUser()}</tbody>
      </Table>

      <Pagination
        activePage={activePage}
        itemsCountPerPage={20}
        totalItemsCount={100}
        pageRangeDisplayed={5}
        itemClass="page-item"
        linkClass="page-link"
        onChange={handlePageChange}
      />
    </>
  );
}
