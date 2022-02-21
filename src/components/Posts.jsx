import React, { useState, useEffect } from "react";
import Post from "./Post";
import ModalPostAdd from "./modalAdd";

async function getAllPosts() {
  const res = await fetch("https://yourtestapi.com/api/posts");
  const allPosts = await res.json();

  return allPosts;
}

const Posts = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, []);
  console.log(posts);

  const onDelete = async (id) => {
    await fetch(`https://yourtestapi.com/api/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPosts(posts.filter((post) => post.id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = async (editedPost, post) => {
    var today = toString(new Date());
    await fetch(`https://yourtestapi.com/api/posts/${editedPost.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: editedPost.id,
        active: editedPost.active,
        sort_order: editedPost.sort_order,
        text: editedPost.text,
        title: editedPost.title,
        image: editedPost.image,
        url: editedPost.url,
        created_at: post.created_at,
        updated_at: today,
        deleted_at: null,
      }),
      headers: {
        "Content-type": "aplications/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPosts(
            posts.map((post) => (post.id === editedPost.id ? editedPost : post))
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (text, title, image, url) => {
    await fetch("https://yourtestapi.com/api/posts", {
      method: "POST",
      body: JSON.stringify({
        active: 1,
        id: posts.length + 1,
        deleted_at: null,
        image: image,
        sort_order: posts.length + 1,
        text: text,
        title: title,
        url: url,
      }),
      headers: {
        "Content-type": "aplications/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPosts((posts) => [...posts, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postsTable = (
    <div className="table">
      <div className="d-flex justify-content-evenly">
        <div>
          <div className="fs-4 fw-bolder secondary">Публикации</div>
        </div>
        <ModalPostAdd onAdd={onAdd} />
      </div>
      {posts.length === 0 ? null : (
        <div className="d-flex flex-wrap align-self-center">
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );

  return postsTable;
};

export default Posts;
