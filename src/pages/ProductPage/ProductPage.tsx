import { useParams } from 'react-router-dom';
import { Product } from '../../components';
import productsData from '../../components/ProductsList/productsData.json';

const ProductPage = () => {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Product product={product} />
    </>
  );
};

export default ProductPage;
