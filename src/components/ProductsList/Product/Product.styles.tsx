import { Button } from '@mui/material';
import styled from 'styled-components';

const ProductWrapper = styled.li`
  flex: none;
  width: calc(100% / 5);
  padding: 3px;
  box-sizing: border-box;
  list-style: none;
`;

const ProductContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  background-color: #ededed;
  border-radius: 10px;

  position: relative;

  &:hover {
    box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;

const ProductFavoriteButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
`;

const ProductImageContainer = styled.div``;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
`;

const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  max-height: 200px;
  display: block;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const ProductDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: calc(var(--line-height) * 2);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  flex-grow: 1;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
`;

const ProductButton = styled(Button)`
  &.product-button {
    font-weight: 700;
    border-radius: 18px;
    padding: 4px 12px;
    margin-top: 10px;
    align-self: flex-start;
    width: 100%;
  }
`;

export default {
  ProductWrapper,
  ProductContainer,
  ProductImageContainer,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ProductButton,
  ProductDetailsContainer,
  ProductFavoriteButton,
};
