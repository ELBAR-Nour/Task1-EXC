import { useParams } from 'react-router';

const ProductDetails = () => {
  const { idProd } = useParams(); 



  return (
    <div style={{ color: 'black', fontSize: '20px', padding: '20px' }}>

      <div>Product: <span style={{ color: 'blue' }}>{idProd}</span></div>

     {/* <h2>{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>*/}
    </div>
  );
}

export default ProductDetails;
