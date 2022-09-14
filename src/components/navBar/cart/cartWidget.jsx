import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: -4,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
  },
}));

export default function CustomizedBadges() {
  return (
    <Box sx={{ m: 2 }}> 
      <IconButton aria-label="cart" className='carrito'>
        <StyledBadge badgeContent={0} color='secondary'>
          <ShoppingCartIcon className='carrito_icono'/>
        </StyledBadge>
      </IconButton>
    </Box>
  );
}