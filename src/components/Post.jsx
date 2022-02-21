import React from "react";
import ModalUpdate from "./modalUpdate";

const Post = ({ post, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(post.id);
  };

  const postUpdatedTime = new Date(post.updated_at)
    .toLocaleString()
    .slice(0, 17);
  const postCreatedTime = new Date(post.created_at)
    .toLocaleString()
    .slice(0, 17);
  return (
    <div key={post.id} className="d-flex flex-row border-bottom">
      <img
        src={post.image}
        className="d-block"
        alt="post"
        width="350pc"
        height="220pc"
      />
      <div className="d-flex flex-column flex-fill align-self-center">
        <div className="border-bottom font-monospace">Имя:"{post.text}"</div>
        <div className="border-bottom font-monospace">
          Описание :"{post.title}"
        </div>
        <div className="border-bottom font-monospace">
          Было создано: {postCreatedTime}
        </div>
        <div className="border-bottom font-monospace">
          Было оновлено: {postUpdatedTime}
        </div>
        <div>
          <a href={post.url} className="btn mt-1 btn-primary link">
            Ссилка
          </a>
        </div>
      </div>

      <div className="d-flex flex-column align-self-center ">
        <ModalUpdate onEdit={onEdit} post={post} />
        <button onClick={handleDelete} className="btn  btn-danger">
          Удалить
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Post;
