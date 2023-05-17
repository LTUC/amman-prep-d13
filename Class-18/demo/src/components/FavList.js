import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import axios from 'axios';

export default function FavList() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_LOCAL_SERVER}/product`);
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
      <Row> 
      {
          products.length && (
            products.map(item => 
              <ProductCard product={item} />
            )
          )
        }
      </Row>
    </div>
  )
}
