import * as React from 'react';
import { CustomHeader, CustomMenu, NavActions, NavActionCont } from './styles';
import Logo from 'src/components/atoms/logo';
import { Input } from 'antd';
import UserButton from 'src/components/atoms/iconButtons/userButton';
import CartButton from 'src/components/atoms/iconButtons/cartButton';

const { Search } = Input;

interface DesktopNavBarProps {
  onSearch: (value: string) => void;
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({ onSearch }) => {
  return (
    <CustomHeader className="header">
      <CustomMenu mode="horizontal" defaultSelectedKeys={['1']}>
        <CustomMenu.Item key="1">Accesorios para carros</CustomMenu.Item>
        <CustomMenu.Item key="2">Lifestyle</CustomMenu.Item>
        <CustomMenu.Item key="3">Ofertas</CustomMenu.Item>
        <CustomMenu.Item key="4">Novedades</CustomMenu.Item>
      </CustomMenu>
      <NavActions>
        <NavActionCont>
          <Search
            placeholder="Buscar..."
            onSearch={(value) => onSearch(value)}
            style={{ width: 200 }}
          />
        </NavActionCont>
        <NavActionCont>
          <UserButton />
        </NavActionCont>
        <NavActionCont>
          <CartButton />
        </NavActionCont>
        <NavActionCont>
          <Logo />
        </NavActionCont>
      </NavActions>
    </CustomHeader>
  );
};

export default DesktopNavBar;
