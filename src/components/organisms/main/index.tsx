import * as React from 'react';
import { Layout, Menu } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';
import SideMenuLayout from 'src/components/molecules/sideMenu';
import { categoryOptions } from 'src/pages/resources';
import ColorPalette from 'src/components/molecules/colorPalette';
import SliderMolecule from 'src/components/molecules/sliderPrice';
import { SliderMainContainer } from './styles';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

import 'antd/dist/antd.css';
import 'src/assets/styles/index.css';

interface IMainPageProps {
  onChangePrice: (e: any) => void;
  priceValues: number[];
}

const MainPage: React.FC<IMainPageProps> = ({ onChangePrice, priceValues }) => {
  return (
    <React.Fragment>
      <Layout>
        <Layout>
          <SliderMainContainer width={262} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}>
              <SideMenuLayout title="Lifestyle" />
              <SubMenu key="sub1" title="Categorías">
                {categoryOptions.map((value: IOption) => (
                  <Menu.Item key={value.id}>{value.value}</Menu.Item>
                ))}
              </SubMenu>
              <SubMenu key="sub2" title="Colores">
                <ColorPalette />
              </SubMenu>
              <SubMenu key="sub3" title="Precio">
                <SliderMolecule onChangePrice={onChangePrice} priceValues={priceValues} />
              </SubMenu>
            </Menu>
          </SliderMainContainer>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
              }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default MainPage;
