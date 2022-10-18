import { styled, Box, Badge, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { cartCtx } from '../../../context/CartContext';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: -4,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
  },
}));

export default function CustomizedBadges() {
  const { getTotalItemInCart } = useContext(cartCtx)
  return (
    
    <Link to='/cart'>
      <Box sx={{ m: 2 }}> 
        <Tooltip title='Ver carrito'>
          <IconButton aria-label="cart" className='carrito'>
            <StyledBadge badgeContent={getTotalItemInCart()} color='secondary'>
                <ShoppingCartIcon className='carrito_icono'/>
            </StyledBadge>
          </IconButton>
        </Tooltip>
      </Box>
    </Link>
  );
}