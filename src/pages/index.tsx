import * as React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <div>Hello world!</div>
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </React.Fragment>
  );
};

export default Home;
