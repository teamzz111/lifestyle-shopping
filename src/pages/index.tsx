import * as React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import SEO from 'src/components/organisms/SEO';
import { graphql } from 'gatsby';
import SideMenuLayout from 'src/components/molecules/sideMenu';
import NavBar from 'src/components/molecules/nav-bar';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

import 'antd/dist/antd.css';
import 'src/assets/styles/index.css';
import { requestProducts } from 'src/actions/redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/state';

const Home: React.FC<IHomeProps> = ({ data }) => {
  // site metadata coming from gatsby config
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  const state: IProduct[] = useSelector((state: RootState) => state.productsReducer);
  const dispatch = useDispatch();

  console.log(state);

  React.useEffect(() => {
    dispatch(requestProducts());
  }, []);

  return (
    <React.Fragment>
      <SEO title={siteTitle} description={siteDescription} />
      <NavBar />
      <Layout>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}>
              <SideMenuLayout />
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
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
