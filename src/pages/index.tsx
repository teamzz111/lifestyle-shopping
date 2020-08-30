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

  // states
  const [priceValues, setPriceValues] = React.useState<number[]>([20, 50]);
  const onChangePrice = (value: number[]) => setPriceValues(value);

  return (
    <React.Fragment>
      <SEO title={siteTitle} description={siteDescription} />
      <NavBar />
      <MainPage onChangePrice={onChangePrice} priceValues={priceValues} />
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
