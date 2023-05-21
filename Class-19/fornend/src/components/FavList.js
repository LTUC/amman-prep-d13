import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import axios from 'axios';
import UpdateModal from './UpdateModal';

export default function FavList() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const [isUpdated, setIsUpdated] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('test')
    setShow(true);
  }

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_LOCAL_SERVER}/product`);
      console.log(res.data.products);
      setProducts(res.data.products)
    } catch(err) {
      console.log(err)
    }
  }

  const updateProductState = (id) => {
    console.log(id)
    setProducts(preValue => preValue.filter(item => item.id !== id))
  }

  useEffect(() => {
    fetchData();
  }, [isUpdated])

  return (
    <div>
      <Row> 
      {
          products.length && (
            products.map(item => 
              <ProductCard product={item} canEdit={true} handleShow={handleShow} setSingleProduct={setSingleProduct} updateProductState={updateProductState}/>
            )
          )
        }
      </Row>

      <UpdateModal show={show} handleClose={handleClose} singleProduct={singleProduct} setIsUpdated={setIsUpdated}/>

    </div>
  )
}
