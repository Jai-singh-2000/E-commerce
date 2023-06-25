import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const drawerWidth = 240;
const navItems = ['Home', 'Shop','About', 'Contact',"Cart"];
const navPathObj={
  "Home":'/',
  "Shop":'/',
  "Contact":'/contact',
  "About":"/about",
  "Cart":'/cart',
}

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navigate=useNavigate();
  const isLogged=useSelector((state)=>state?.user?.isLogged);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Planet
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        bgcolor:"#3CB815",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'
            ,color:"white",
            textDecoration:'none'
          } }}
          component={Link} to={'/'}
          >
            Planet
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' },alignItems:'center'}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'white',textTransform:'capitalize' }} component={Link} to={navPathObj[item]}>
                {item}
              </Button>
            ))}
            
            {
              isLogged?<Box sx={{display:'flex',width:"3.5rem",justifyContent:'center'}}>         
              <AccountCircleRoundedIcon fontSize='large'/>
            </Box>:(
            <>
              <Button variant='contained' sx={{textTransform:'capitalize',bgcolor:'white',color:'#3CB815','&:hover': {background: "whitesmoke"}}} onClick={()=>navigate("/login")}>Login</Button>
              <Button variant='contained' sx={{textTransform:'capitalize',bgcolor:'white',ml:'1rem',color:'#3CB815','&:hover': {background: "whitesmoke"}}} onClick={()=>navigate("/signup")}>Sign up</Button>
            </>
            )
            
            }
            

            
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" >
        <Toolbar />
      </Box>
    </Box>
  );
}


export default Header;
