import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { IconButton } from '@mui/material';
import { IProduct } from '../../types';
import styles from './Product.styles';

const {
  ProductWrapper,
  ProductContainer,
  ProductColumn,
  ProductBlockWrapper,
  ProductBlockContainer,
  ProductHeading1,
  ProductHeading2,
  ProductPrice,
  ProductButton,
  ProductCode,
  BlockName,
  BlockFavorite,
  BlockContainer,
  ProductImage,
  CharacteristicsList,
  CharacteristicItem,
} = styles;

const characteristics = {
  list: [
    { name: 'Состояние', description: 'Новый' },
    { name: 'Страна производитель', description: 'Китай' },
    { name: 'Производитель', description: 'ACS' },
  ],
  characteristicName: 'Электронные кухонные весы ELECTRONIC Kitchen Scale',
  description:
    'Ультратонкие, стильные, современные кухонные часы с возможностью определения веса до 5 кг. Универсальные весы легко брать с собой в дорогу, на пикник, ведь он не займут много места. Особенно полезное стройство для тех, кто следит за собственным весом и порционно питается, для молодых мамочек при определении порции для малыша, для домохозяек. Наличие нескольких систем измерения позволит более комфортно определять вес согласно разных рецептов и прочих рекомендаций. Питание ― батарейка CR2032.',
};

const Product = ({ product }: { product: IProduct }) => {
  const { id, category, imageUrl, name, price, description } = product;

  return (
    <ProductWrapper>
      <ProductContainer>
        <ProductColumn className="column-1">
          <ProductBlockWrapper>
            <ProductBlockContainer>
              <ProductImage src={imageUrl} alt={name} />
            </ProductBlockContainer>
          </ProductBlockWrapper>

          <ProductBlockWrapper>
            <ProductBlockContainer>
              <ProductHeading1>Характеристики и описание</ProductHeading1>
              <ProductHeading2>Основные</ProductHeading2>

              <CharacteristicsList>
                {characteristics.list.map((characteristic) => (
                  <CharacteristicItem key={characteristic.name}>
                    <div className="characteristic-name">
                      {characteristic.name}
                    </div>
                    <div className="characteristic-description">
                      {characteristic.description}
                    </div>
                  </CharacteristicItem>
                ))}
              </CharacteristicsList>

              <ProductHeading2>
                {characteristics.characteristicName}
              </ProductHeading2>
              <div>{characteristics.description}</div>
            </ProductBlockContainer>
          </ProductBlockWrapper>
        </ProductColumn>

        <ProductColumn className="column-2">
          <ProductBlockWrapper>
            <ProductBlockContainer>
              <BlockContainer>
                <BlockName>
                  <ProductHeading1>{name}</ProductHeading1>
                  <ProductCode>Код товара: {id}</ProductCode>
                </BlockName>
                <BlockFavorite>
                  <IconButton aria-label="favorite">
                    <FavoriteBorderIcon />
                  </IconButton>
                </BlockFavorite>
              </BlockContainer>

              <ProductPrice>{price} грн</ProductPrice>

              <ProductButton
                startIcon={<ShoppingCartCheckoutIcon />}
                variant="contained"
                className="product-button"
              >
                Buy
              </ProductButton>
            </ProductBlockContainer>
          </ProductBlockWrapper>

          <ProductBlockWrapper>
            <ProductBlockContainer>
              <ProductHeading1>Доставка</ProductHeading1>

              <ProductButton
                startIcon={<LocalShippingIcon />}
                variant="outlined"
                fullWidth
              >
                Смотреть все
              </ProductButton>
            </ProductBlockContainer>
          </ProductBlockWrapper>

          <ProductBlockWrapper>
            <ProductBlockContainer>
              <ProductHeading1>Оплата и гарантии</ProductHeading1>

              <ProductButton
                startIcon={<LocalShippingIcon />}
                variant="outlined"
                fullWidth
              >
                Смотреть все
              </ProductButton>
            </ProductBlockContainer>
          </ProductBlockWrapper>
        </ProductColumn>
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
