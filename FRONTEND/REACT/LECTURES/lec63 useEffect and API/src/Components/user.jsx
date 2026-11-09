import React, { useEffect, useState } from "react";

export const User = () => {
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.username);
      });
  }, [userId]);

  return (
    <div>
      <p>{username ? username : "Not Found"}</p>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          onInput={(e) => {
            setUserId(Number(e.currentTarget.value));
          }}
        />
      </form>
    </div>
  );
};
