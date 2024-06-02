import styled from 'styled-components';

const ProductsWrapper = styled.div`
  margin: 20px 0;
`;

const Container = styled.div`
  max-width: 1460px;
  margin: 0 auto;
`;

const ProductsHeading = styled.h2``;

const ProductsListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 0;
  min-width: 0;
  row-gap: 6px;
`;

export default {
  ProductsWrapper,
  Container,
  ProductsHeading,
  ProductsListItems,
};
