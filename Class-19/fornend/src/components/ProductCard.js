import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({product, handleShow, setSingleProduct, canEdit = false, updateProductState}) {
  const handleClick = () => {
    setSingleProduct(product)
    handleShow()
  }

  const deleteProduct = () => {
    axios.delete(`${process.env.REACT_APP_LOCAL_SERVER}/product/${product.id}`)
         .then(res => {
          console.log('deleted');
          updateProductState(product.id)
        })
         .catch(err => console.log(err))
  }

  return (
    <Card style={{ width: '18rem' }} key={product.id}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        {
          !canEdit &&
          <Button variant="primary" onClick={handleClick}>Details</Button>
        }
        {
          canEdit &&
          <>
            <Button variant="success" onClick={handleClick}>Update</Button>
            <Button variant="danger" onClick={deleteProduct}>Delete</Button>
          </>
        }
      </Card.Body>
    </Card>
  );
}

export default ProductCard;