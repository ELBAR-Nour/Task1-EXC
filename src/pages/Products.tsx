import { ProdExport } from "./ProdExport.ts";

const Products = () => {
  return (
    <div style={{ color: 'red', fontSize: '20px', padding: '20px' }}>
      <div>Hello, these are our Products, if you want something.</div>

      {ProdExport.map((product, index) => (
        <div key={index} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <h3>{product.name}</h3>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
