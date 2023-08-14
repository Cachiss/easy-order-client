import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import useShopCar from '../hooks/useShopCar';
export default function ShopCarComponent() {
  const {addProduct, shopCar} = useShopCar();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div>
      <IconButton  onClick={handleClick}>
        <ShoppingCart color='warning' />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='bg-slate[700]'>
          {shopCar.length > 0 ? shopCar.map((product) => {
            return (
              <Typography sx={{ p: 2 }} key={product.id}>
                {product.name}
              </Typography>
            )
            }) : <Typography sx={{ p: 2 }} >
                No hay productos en el carrito
              </Typography>
          }
          <Button className='bg-orange text-white rounded-md w-80 h-10 mt-5 text-xl'>Realizar pedido</Button>
        </div>
      </Popover>
    </div>
  );
}