import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../../types';
import styles from './ProductItem.styles';

const {
  ProductItemWrapper,
  ProductItemContainer,
  ProductItemImageContainer,
  ProductItemImage,
  ProductItemDescription,
  ProductItemPrice,
  ProductItemButton,
  ProductItemDetailsContainer,
  ProductItemFavoriteButton,
} = styles;

const ProductItem = ({ product }: { product: IProduct }) => {
  const { id, category, imageUrl, name, price, description } = product;

  const navigate = useNavigate();

  return (
    <ProductItemWrapper onClick={() => navigate(`/product/${id}`)}>
      <ProductItemContainer>
        <ProductItemFavoriteButton>
          <IconButton aria-label="favorite">
            <FavoriteBorderIcon />
          </IconButton>
        </ProductItemFavoriteButton>

        <ProductItemImageContainer>
          <ProductItemImage src={imageUrl} alt={name} height={'200px'} />
        </ProductItemImageContainer>

        <ProductItemDetailsContainer>
          <ProductItemDescription>{name}</ProductItemDescription>
          <ProductItemPrice>{price}</ProductItemPrice>

          <ProductItemButton variant="contained" className="product-button">
            Buy
          </ProductItemButton>
        </ProductItemDetailsContainer>
      </ProductItemContainer>
    </ProductItemWrapper>
  );
};

export default ProductItem;
