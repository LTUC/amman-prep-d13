import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({product, handleShow, setSingleProduct}) {
  const handleClick = () => {
    setSingleProduct(product)
    handleShow()
  }
  return (
    <Card style={{ width: '18rem' }} key={product.id}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;