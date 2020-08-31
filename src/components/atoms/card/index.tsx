import * as React from 'react';
import Image from 'src/assets/images/80142445969_01.png';
import {
  ImageLogo,
  Text,
  LeftContainer,
  RightContainer,
  Container,
  TitleCard,
  ButtonCart,
  MainWrapper,
  UnderText,
  IconPlus,
  IconCart
} from './styles';

const Card: React.FC = () => {
  return (
    <MainWrapper>
      <ImageLogo src={Image} />
      <TitleCard level={5}>Nombre del producto</TitleCard>
      <Container>
        <LeftContainer>
          <Text>Sub-categoría</Text>
          <UnderText>$213123</UnderText>
          <TitleCard level={5}>$1993000</TitleCard>
        </LeftContainer>
        <RightContainer>
          <ButtonCart
            type="primary"
            icon={
              <React.Fragment>
                <IconCart/>
                <IconPlus/>
              </React.Fragment>
            }
          />
        </RightContainer>
      </Container>
    </MainWrapper>
  );
}

export default Card;