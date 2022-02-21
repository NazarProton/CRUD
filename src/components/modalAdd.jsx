import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import AddPosts from './addPosts';

const ModalPostAdd = ({ onAdd }) => {
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(
      e.target.text.value,
      e.target.title.value,
      e.target.image.value,
      e.target.url.value
    );
    e.target.text.value = "";
    e.target.title.value = "";
    e.target.image.value = "";
    e.target.url.value = "";
  };

  return (
    <>
      <Button variant="success align-self-center" onClick={handleShow}>
        Создать Пост
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Создать Пост</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Control
              type="text"
              className="m-1"
              placeholder="Имя поста"
              aria-label="name"
              name="text"
            />
            <Form.Control
              type="text"
              className="m-1"
              placeholder="Описание"
              aria-label="name"
              name="title"
            />
            <Form.Control
              type="URL"
              className="m-1"
              placeholder="Ссылка на изображение"
              aria-label="name"
              name="image"
            />
            <Form.Control
              type="URL"
              className="m-1"
              placeholder="Ссылка на оригинал"
              aria-label="name"
              name="url"
            />
            <Modal.Footer className="p-0 border-0 mt-2 ">
              <Button
                variant="secondary"
                className="mt-1 m-1"
                onClick={handleClose}
              >
                Закрить
              </Button>
              <Button
                variant="success"
                type="submit"
                onSubmit={handleOnSubmit}
                onClick={handleClose}
              >
                Создать
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPostAdd;
