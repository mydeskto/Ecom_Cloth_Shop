// import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductHdr from '../components/ProductHdr'
// import react from 'react'
// import { useContext } from 'react'
// import { TbArrowRight } from "react-icons/tb";
import {useState , useEffect} from 'react'
import axios from 'axios'

const Product = () => {
 
  const [all_product, setAllProdutc] = useState([]);

  async function  fetchdata(){

    const respnse = await axios.post('http://localhost:1300/api/allproducts')
    setAllProdutc(respnse.data)
    console.log(respnse.data)
  }

  useEffect(()=>{
    fetchdata()
  },[])
  // const {all_products} = useContext(ShopContext);
  const {productId} =useParams();
  const product = all_product.find((e)=> e.id === Number(productId))

  if(!product){
    return <div> Product not found!</div>
  }
  return (
    <section>
      <div>
        <ProductHdr product={product}/>
      </div>
      
    </section>
  )
}

export default Product

