import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateModal({ show, handleClose, singleProduct, setIsUpdated }) {
  const updateProduct = (e) => {
    e.preventDefault();
    setIsUpdated(false);
    // console.log(e)
    const obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      brand: e.target.brand.value
    }

    console.log(obj)
    axios.put(`${process.env.REACT_APP_LOCAL_SERVER}/product/${singleProduct.id}`, obj)
      .then(res => {
        setIsUpdated(true);
        handleClose();
      })
      .catch(err => console.log(err))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={updateProduct}>
        <Modal.Header closeButton>
          <Modal.Title>Update product: {singleProduct.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input id='title' type="text" defaultValue={singleProduct.title} />
          <input id='description' type="text" defaultValue={singleProduct.description} />
          <input id='brand' type="text" defaultValue={singleProduct.brand} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" type='submit'>Save changes</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default UpdateModal;