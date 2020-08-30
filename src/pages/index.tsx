import * as React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import SEO from 'src/components/organisms/SEO';
import { graphql } from 'gatsby';
import SideMenuLayout from 'src/components/molecules/sideMenu';
import NavBar from 'src/components/molecules/nav-bar';
import { categoryOptions } from './resources';
import ColorPalette from 'src/components/molecules/colorPalette';
import Slider from 'src/components/atoms/slider';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

import 'antd/dist/antd.css';
import 'src/assets/styles/index.css';

const Home: React.FC<IHomeProps> = ({ data }) => {
  // site metadata coming from gatsby config
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  return (
    <React.Fragment>
      <SEO title={siteTitle} description={siteDescription} />
      <NavBar />
      <Layout>
        <Layout>
          <Sider width={262} className="site-layout-background">
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
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Slider />
              </SubMenu>
            </Menu>
          </Sider>
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

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
