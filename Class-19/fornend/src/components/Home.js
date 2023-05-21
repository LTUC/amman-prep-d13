import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import DetailsModal from './DetailsModal';

export default function Home() {

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('test')
    setShow(true);
  }



  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PRODUCT_API}?limit=10`);
      console.log(res.data.products);
      setProducts(res.data.products)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {/* <button onClick={fetchData}>Get Data</button> */}
      {/* Rows have a display flex css */}
      <Row>
        {
          products.length && (
            products.map(item => 
              <ProductCard product={item} handleShow={handleShow} setSingleProduct={setSingleProduct}/>
            )
          )
        }
      </Row>
      <DetailsModal show={show} handleClose={handleClose} singleProduct={singleProduct}/>
    </div>
  )
}
