import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu,  } from '@mui/material';
import { Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link }  from 'react-router-dom'

import Logo from './logo.png';
import './navBar.scss';
import Carrito from './cartIcon/cartWidget.jsx';

const pages = [ {name: 'Remera', to: '/category/remera'},
                {name: 'Buzos y Camperas', to: '/category/campera-buzo'},
                {name: 'Gorras', to: '/category/gorra'}];
const settings = ['Perfil', 'Cuenta', 'Configuración', 'Cerrar sesión'];
const user = [{userName: 'Remy Sharp', avatarImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}]

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: '#DC6363' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/' className='text-link'>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt="Logo-Shop" className='logoImg' />
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.to} className='text-link'>
                  <Typography textAlign="center" align="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none', },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt="Logo-Shop" className='logoImg' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link key={page.name} to={page.to} className='text-link'>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',textDecoration: 'none'}}
              >
                {page.name}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} className='carritoAvatar'>
            <Carrito/>
            <Tooltip title="Más opciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                {user.map((user)=>
                  <Avatar key={user.userName} alt={user.userName} src={user.avatarImage} />
                )} 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem disabled key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

