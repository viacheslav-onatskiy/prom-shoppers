import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { IProduct } from '../../../types';
import styles from './Product.styles';

const {
  ProductWrapper,
  ProductContainer,
  ProductImageContainer,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ProductButton,
  ProductDetailsContainer,
  ProductFavoriteButton,
} = styles;

const Product = ({ product }: { product: IProduct }) => {
  const { id, category, imageUrl, name, price, description } = product;

  return (
    <ProductWrapper>
      <ProductContainer>
        <ProductFavoriteButton>
          <IconButton aria-label="favorite">
            <FavoriteBorderIcon />
          </IconButton>
        </ProductFavoriteButton>

        <ProductImageContainer>
          <ProductImage src={imageUrl} alt={name} height={'200px'} />
        </ProductImageContainer>

        <ProductDetailsContainer>
          <ProductDescription>{name}</ProductDescription>
          <ProductPrice>{price}</ProductPrice>

          <ProductButton variant="contained" className="product-button">
            Buy
          </ProductButton>
        </ProductDetailsContainer>
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
