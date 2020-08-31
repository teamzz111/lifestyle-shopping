import * as React from 'react';
import { Typography } from 'antd';
import { MobileContainer, ButtonStyled, LeftWrapper, RightWrapper } from './styles';

const { Title } = Typography;

const ResponsiveHead = () => {
  return (
    <MobileContainer>
      <LeftWrapper>
        <Title level={2} style={{ margin: 0 }}>
          Lifestyle
        </Title>
      </LeftWrapper>
      <RightWrapper>
        <ButtonStyled type="text">Ver filtros</ButtonStyled>
      </RightWrapper>
    </MobileContainer>
  );
};

export default ResponsiveHead;
