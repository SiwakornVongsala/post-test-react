import { react, useEffect, useState } from "react";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData(params) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const listData = await response.json();
      console.log("listdata", listData);
      setUsers([...listData]);
    }
    fetchData();
  }, []);

  function handleViewMore(id) {
    alert(JSON.stringify(users.find((x) => x.id === id)));
  }

  return (
    <>
      <p>User Lists </p>
      {users.map((element) => (
        <div
          key={element.id}
          style={{
            display: "flex",
            flexDirection: "column",
            //  backgroundColor:'red',
            marginBottom: 20,
            border: "1px solid",
            alignItems: "start",
            justifyContent: "center",
            paddingLeft: 20,
            maxWidth: 500
          }}
        >
          <p>ID: {element.id}</p>
          <p>Name: {element.name}</p>
          <p>Email: {element.email}</p>
          <p>
            Address: {element.address.street} {element.address.suite}{" "}
            {element.address.city}
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "end"
            }}
          >
            <button
              onClick={(e) => {
                handleViewMore(element.id);
              }}
            >
              View More
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
