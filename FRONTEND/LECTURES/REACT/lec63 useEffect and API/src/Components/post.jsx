import React, { useEffect, useState } from "react";

export const Post = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
      })
      .catch((error) => console.log(error))
  }, [id]);
  return (
    <div>
      <form action="">
        <input
          type="number"
          name=""
          id=""
          onInput={(e) => {
            setId(e.currentTarget.value);
          }}
        />
      </form>
      <p>Title: {title ? title : "Loading...."}</p>
      <p>Body: {body ? body : "Loading...."}</p>
    </div>
  );
};
