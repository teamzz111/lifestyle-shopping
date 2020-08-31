import styled from 'styled-components';
import { Layout } from 'antd';
import { device } from 'src/utils/responsiveTemplate';

const { Sider } = Layout;

export const SliderMainContainer = styled(Sider)`
  @media ${device.mobile} {
    display: none;
  }
`;
