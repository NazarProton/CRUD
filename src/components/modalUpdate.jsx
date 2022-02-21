import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalUpdate = ({ onEdit, post }) => {
  let [show, setShow] = useState(false);

  let [text, setText] = useState(post.text);
  let [title, setTitle] = useState(post.title);
  let [image, setImage] = useState(post.image);
  let [url, setUrl] = useState(post.url);

  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  let editedPost = {
    id: post.id,
    text: text,
    title: title,
    image: image,
    url: url,
    created_at: post.created_at,
    updated_at: post.updated_at,
    active: post.active,
    sort_order: post.sort_order,
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onEdit(editedPost, post);
  };

  return (
    <>
      <Button variant="warning mb-1" onClick={handleShow}>
        Изменить
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Редактирование поста</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Label>Имя Поста</Form.Label>
            <Form.Control
              type="text"
              className="mb-1"
              placeholder="Имя поста"
              value={text}
              aria-label="name"
              onChange={(e) => setText(e.target.value)}
            />
            <Form.Label>Описание</Form.Label>
            <Form.Control
              type="text"
              className="mb-1"
              placeholder="Описание"
              value={title}
              aria-label="name"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Label>Ссылка на изображение</Form.Label>
            <Form.Control
              type="URL"
              className="mb-1"
              placeholder="Ссылка на изображение"
              value={image}
              aria-label="name"
              onChange={(e) => setImage(e.target.value)}
            />
            <Form.Label>Ссылка на оригинал</Form.Label>
            <Form.Control
              type="URL"
              className="mb-1"
              placeholder="Ссылка на оригинал"
              value={url}
              aria-label="name"
              onChange={(e) => setUrl(e.target.value)}
            />
            <Modal.Footer className="p-0 border-0 mt-2 ">
              <Button variant="secondary" onClick={handleClose}>
                Закрить
              </Button>
              <Button
                variant="success"
                type="submit"
                onSubmit={handleOnSubmit}
                onClick={handleClose}
              >
                Изменить
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalUpdate;
