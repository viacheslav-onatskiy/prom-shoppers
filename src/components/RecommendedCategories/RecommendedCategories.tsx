import s from './RecommendedCategories.styles';
import categories from './categoriesData.json';

const {
  CategoriesContainer,
  CategoriesList,
  CategoriesWrapper,
  CategoryItem,
  CategoryImage,
  CategoryHeading,
  CategoryImageWrapper,
  CategoryLink,
} = s;

const RecommendedCategories = () => {
  return (
    <CategoriesWrapper>
      <CategoriesContainer className="container">
        <h2>Тебя заинтересует</h2>

        <CategoriesList>
          {categories.map((category) => (
            <CategoryItem key={category.id}>
              <CategoryLink to={category.url}>
                <CategoryImageWrapper>
                  <CategoryImage
                    src={`${category.image}?w=161&fit=crop&auto=format`}
                    alt={category.categoryName}
                  />
                </CategoryImageWrapper>
                <CategoryHeading className="category-heading">
                  {category.categoryName}
                </CategoryHeading>
              </CategoryLink>
            </CategoryItem>
          ))}
        </CategoriesList>
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};

export default RecommendedCategories;
