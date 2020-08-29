import * as React from 'react';
import BreadCrumb from 'src/components/atoms/breadCrumb';
import Title from 'src/components/atoms/title';

const SideMenu: React.FC = () => {
  return (
    <React.Fragment>
      <BreadCrumb />
      <Title title="Lifestyle" />
    </React.Fragment>
  );
};

export default SideMenu;
