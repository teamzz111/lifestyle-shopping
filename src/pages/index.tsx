import * as React from 'react';
import SEO from 'src/components/organisms/SEO';
import { graphql } from 'gatsby';
import NavBar from 'src/components/molecules/nav-bar';

import 'antd/dist/antd.css';
import 'src/assets/styles/index.css';
import MainPage from 'src/components/organisms/main';

const Home: React.FC<IHomeProps> = ({ data }) => {
  // site metadata coming from gatsby config
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  return (
    <React.Fragment>
      <SEO title={siteTitle} description={siteDescription} />
      <NavBar />
      <MainPage />
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
