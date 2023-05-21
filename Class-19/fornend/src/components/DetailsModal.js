import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DetailsModal({show, handleClose, singleProduct}) {
  const saveProduct = () => {
    axios.post(`${process.env.REACT_APP_LOCAL_SERVER}/product`, singleProduct)
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
  }

  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleProduct.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={singleProduct.thumbnail} alt="" />
          <p>{singleProduct.description}</p>
          <p>{singleProduct.rating}</p>
          <p>Stock: {singleProduct.stock} - Price: ${singleProduct.price}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={saveProduct}>Save changes</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default DetailsModal;