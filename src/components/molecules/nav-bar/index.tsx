import * as React from 'react';
import DesktopNavBar from './desktopNavBar';
import ResponsiveNavBar from './responsiveNavBar';

interface NavBarProps {
  onSearchCategory: (id: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearchCategory }) => {
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <React.Fragment>
      <DesktopNavBar onSearch={onSearch} onChangeCategory={onSearchCategory} />
      <ResponsiveNavBar onSearch={onSearch} onChangeCategory={onSearchCategory} />
    </React.Fragment>
  );
};

export default NavBar;
