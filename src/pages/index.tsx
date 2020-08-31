import * as React from 'react';
import SEO from 'src/components/organisms/SEO';
import { graphql } from 'gatsby';
import NavBar from 'src/components/molecules/nav-bar';
import 'antd/dist/antd.css';
import 'src/assets/styles/index.css';
import MainPage from 'src/components/organisms/main';
import { useSelector, useDispatch } from 'react-redux';
import {
  requestCarProducts,
  requestLifestyleProducts,
  requestOffersProducts,
  requestNewProducts,
} from 'src/actions/redux';
import { RootState } from 'src/state';

const Home: React.FC<IHomeProps> = ({ data }) => {
  // site metadata coming from gatsby config
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  const products: IProduct[] = useSelector((state: RootState) => state.productsReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestCarProducts());
  }, []);

  const onSearchCategory = (id: string) => {
    switch (id) {
      case '1':
        dispatch(requestCarProducts());
        break;
      case '2':
        console.log('dos');
        dispatch(requestLifestyleProducts());
        break;
      case '3':
        dispatch(requestOffersProducts());
        break;
      case '4':
        dispatch(requestNewProducts());
        break;
      default:
        dispatch(requestCarProducts());
    }
  };
  console.log(products);
  return (
    <React.Fragment>
      <SEO title={siteTitle} description={siteDescription} />
      <NavBar onSearchCategory={onSearchCategory} />
      <MainPage data = {products} />
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
