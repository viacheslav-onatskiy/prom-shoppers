import { Button } from '@mui/material';
import styled from 'styled-components';

const ProductWrapper = styled.div``;

const ProductContainer = styled.div`
  display: flex;
  column-gap: 10px;
  max-width: 1460px;
  margin: 0 auto;
`;

const ProductColumn = styled.div`
  flex: 0 0 60%;

  &.column-2 {
    flex: 0 0 40%;
  }
`;

const ProductBlockWrapper = styled.div`
  margin-top: 10px;
`;

const ProductBlockContainer = styled.div`
  background-color: #ededed;
  border-radius: 8px;
  padding: 20px;
`;

const ProductHeading1 = styled.div`
  word-wrap: break-word;
  word-break: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
  font-weight: 700;
  font-size: 18px;
`;

const ProductHeading2 = styled(ProductHeading1)`
  font-weight: 700;
  font-size: 16px;
`;

const ProductPrice = styled.div`
  color: #de0404;
  font-size: 32px;
  font-weight: 700;
  margin: 6px 0;
`;

const ProductButton = styled(Button)`
  &.product-button {
    font-weight: 800;
    border-radius: 18px;
    margin-top: 15px;
    width: 100%;
  }
`;

const ProductCode = styled.div`
  color: #5b5b6c;
  margin-top: 8px;
`;

const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BlockName = styled.div``;

const BlockFavorite = styled.div`
  flex: 0 0 40px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
`;

const CharacteristicsList = styled.ul`
  padding: 0;
`;

const CharacteristicItem = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  min-width: 0;
  margin-top: 7px;

  .characteristic-name {
    flex: none;
    width: calc(3 / 8 * 100%);
    color: #5b5b6c;
  }

  .characteristic-description {
    flex: 1;
    width: auto;
  }
`;

export default {
  ProductWrapper,
  ProductContainer,
  ProductColumn,
  ProductBlockWrapper,
  ProductBlockContainer,
  BlockName,
  BlockFavorite,
  ProductHeading1,
  ProductHeading2,
  ProductPrice,
  ProductButton,
  ProductCode,
  ProductImage,
  BlockContainer,
  CharacteristicsList,
  CharacteristicItem,
};
