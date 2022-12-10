import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        {" "}
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        {" "}
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ad
        excepturi earum voluptate quam dolorum atque explicabo! Quaerat vero
        alias libero, deleniti in tempora corrupti, voluptatem omnis aliquid
        aperiam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis, accusantium minus hic magnam incidunt illum mollitia commodi
        laboriosam non nam quidem, quo nihil doloremque vero beatae sed, iusto
        deleniti ratione. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis illo vitae quam ab consectetur provident saepe, hic in?
        Incidunt natus quis itaque veniam voluptates dignissimos, commodi
        nesciunt tempora dolor praesentium.Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Saepe ad excepturi earum voluptate quam
        dolorum atque explicabo! Quaerat vero alias libero, deleniti in tempora
        corrupti, voluptatem omnis aliquid aperiam ipsa. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Officiis, accusantium minus hic
        magnam incidunt illum mollitia commodi laboriosam non nam quidem, quo
        nihil doloremque vero beatae sed, iusto deleniti ratione. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quis illo vitae quam ab
        consectetur provident saepe, hic in? Incidunt natus quis itaque veniam
        voluptates dignissimos, commodi nesciunt tempora dolor praesentium.Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Saepe ad excepturi
        earum voluptate quam dolorum atque explicabo! Quaerat vero alias libero,
        deleniti in tempora corrupti, voluptatem omnis aliquid aperiam ipsa.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        accusantium minus hic magnam incidunt illum mollitia commodi laboriosam
        non nam quidem, quo nihil doloremque vero beatae sed, iusto deleniti
        ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        illo vitae quam ab consectetur provident saepe, hic in? Incidunt natus
        quis itaque veniam voluptates dignissimos, commodi nesciunt tempora
        dolor praesentium.Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Saepe ad excepturi earum voluptate quam dolorum atque explicabo!
        Quaerat vero alias libero, deleniti in tempora corrupti, voluptatem
        omnis aliquid aperiam ipsa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Officiis, accusantium minus hic magnam incidunt illum
        mollitia commodi laboriosam non nam quidem, quo nihil doloremque vero
        beatae sed, iusto deleniti ratione. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis illo vitae quam ab consectetur
        provident saepe, hic in? Incidunt natus quis itaque veniam voluptates
        dignissimos, commodi nesciunt tempora dolor praesentium.Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Saepe ad excepturi earum
        voluptate quam dolorum atque explicabo! Quaerat vero alias libero,
        deleniti in tempora corrupti, voluptatem omnis aliquid aperiam ipsa.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        accusantium minus hic magnam incidunt illum mollitia commodi laboriosam
        non nam quidem, quo nihil doloremque vero beatae sed, iusto deleniti
        ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        illo vitae quam ab consectetur provident saepe, hic in? Incidunt natus
        quis itaque veniam voluptates dignissimos, commodi nesciunt tempora
        dolor praesentium.Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Saepe ad excepturi earum voluptate quam dolorum atque explicabo!
        Quaerat vero alias libero, deleniti in tempora corrupti, voluptatem
        omnis aliquid aperiam ipsa. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Officiis, accusantium minus hic magnam incidunt illum
        mollitia commodi laboriosam non nam quidem, quo nihil doloremque vero
        beatae sed, iusto deleniti ratione. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis illo vitae quam ab consectetur
        provident saepe, hic in? Incidunt natus quis itaque veniam voluptates
        dignissimos, commodi nesciunt tempora dolor praesentium.
      </p> 
    </div>
  );
}

export default ModalPage;
