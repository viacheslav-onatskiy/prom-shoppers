import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoriesWrapper = styled.div``;

const CategoriesContainer = styled.div``;

const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  /* overflow-x: auto;
  overflow-y: hidden; */
  -webkit-overflow-scrolling: touch;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  & > :nth-child(n + 2) {
    margin-left: 20px;
  }
`;

const CategoryItem = styled.li`
  flex: 0 0 auto;
  box-sizing: border-box;
  padding: 5px;

  &:hover {
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 4px 3px 9px 0px rgba(0, 0, 0, 0.25);

    .category-heading {
      text-decoration: underline;
    }
  }

  &:active {
    cursor: pointer;
    box-shadow: 6px 3px 9px 0px rgba(0, 0, 0, 0.35);

    .category-heading {
      text-decoration: underline;
    }
  }

  @media (min-width: 960px) {
    width: 120px;
  }
`;

const CategoryImageWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  display: block;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const CategoryImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const CategoryHeading = styled.div`
  margin-top: 12px;
  margin-bottom: 5px;
  color: black;
  display: block;
  overflow: hidden;
  max-height: 42px;
  word-wrap: break-word;
  text-align: center;

  &.jwtUM::after {
    content: '';
    position: absolute;
    background-color: pink;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;

const CategoryLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover {
    .category-heading {
      text-decoration: underline;
    }
  }
`;

export default {
  CategoriesContainer,
  CategoriesList,
  CategoriesWrapper,
  CategoryItem,
  CategoryImageWrapper,
  CategoryImage,
  CategoryHeading,
  CategoryLink,
};
