import { useEffect, useState } from 'react';
import { IProduct } from '../../types';
import Product from './Product/Product';
import styles from './ProductsList.styles';
import productsData from './productsData.json';

const { ProductsWrapper, Container, ProductsHeading, ProductsListItems } =
  styles;

const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <ProductsWrapper className="products-list">
      <Container>
        <ProductsHeading>ProductsList</ProductsHeading>

        <ProductsListItems>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ProductsListItems>
      </Container>
    </ProductsWrapper>
  );
};

export default ProductsList;
