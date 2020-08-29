import * as React from 'react';
import { NavActions, NavActionCont, CustomHeaderResponsive } from './styles';
import Logo from 'src/components/atoms/logo';
import { Input, Drawer, Menu } from 'antd';
import CartButton from 'src/components/atoms/iconButtons/cartButton';
import ListButton from 'src/components/atoms/iconButtons/listButton';

const { Search } = Input;

interface ResponsiveNavBarProps {
  onSearch: (value: string) => void;
}

const ResponsiveNavBar: React.FC<ResponsiveNavBarProps> = ({ onSearch }) => {
  const [drawerVisible, setDrawerVisible] = React.useState<boolean>(false);

  const onToggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <CustomHeaderResponsive className="header">
      <Drawer placement="right" closable={false} onClose={onToggleDrawer} visible={drawerVisible}>
        <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">Accesorios para carros</Menu.Item>
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 1</Menu.Item>
          <Menu.Item key="4">Option 1</Menu.Item>
        </Menu>
      </Drawer>
      <NavActionCont>
        <ListButton onClick={onToggleDrawer} />
      </NavActionCont>
      <NavActions>
        <NavActionCont>
          <Search
            placeholder="Buscar..."
            onSearch={(value) => onSearch(value)}
            style={{ width: 200 }}
          />
        </NavActionCont>
        <NavActionCont>
          <CartButton />
        </NavActionCont>
        <NavActionCont>
          <Logo />
        </NavActionCont>
      </NavActions>
    </CustomHeaderResponsive>
  );
};

export default ResponsiveNavBar;
