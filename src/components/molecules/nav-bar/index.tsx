import * as React from 'react';
import DesktopNavBar from './desktopNavBar';
import ResponsiveNavBar from './responsiveNavBar';

const NavBar: React.FC = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <React.Fragment>
      <DesktopNavBar onSearch={onSearch} />
      <ResponsiveNavBar onSearch={onSearch} />
    </React.Fragment>
  );
};

export default NavBar;
