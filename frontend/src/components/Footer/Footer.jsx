import React from 'react';
import Box from "@mui/material/Box";
import { IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate=useNavigate()

  const aboutNavigate=()=>{
    navigate("/about")
  }

  const contactNavigate=()=>{
    navigate("/about")
  }

  const footerText={
    lineHeight:'2rem',
    fontSize:{xs:'.8rem',sm:'1rem'}
  }

  return (
    <Box bgcolor={'#25303F'} position={'relative'} sx={{cursor:"pointer"}}>
      <Box display={'flex'} boxSizing={'border-box'} py='3rem' px='1rem' justifyContent={'space-evenly'} flexDirection={{xs:'column',sm:'row'}}>

      <Box flex='0.25' color='#7D8EA7' display={'flex'} alignItems={'center'} flexDirection={'column'} textAlign={{xs:'center',sm:'left'}}>
        <Box>
        <Typography sx={{fontWeight:600,my:'1rem',color:'white',fontSize:{xs:'2rem',sm:'1.5rem'}}}>About</Typography>
        <Typography sx={footerText} onClick={aboutNavigate}>About us</Typography>
        <Typography  sx={footerText} onClick={aboutNavigate}>Delivery Information</Typography>
        <Typography  sx={footerText} onClick={aboutNavigate}>Privacy Policy</Typography>
        <Typography  sx={footerText} onClick={aboutNavigate}>Terms & Conditions</Typography>
        <Typography  sx={footerText} onClick={aboutNavigate}>Contact Us</Typography>
        </Box>
      </Box>

      <Box flex='0.25' color='#7D8EA7' display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign={{xs:'center',sm:'left'}}>
        <Box>
        <Typography variant='h5' sx={{fontWeight:600,my:'1rem',color:'white',fontSize:{xs:'1.6rem',sm:'1.5rem'}}}>My Account</Typography>
        <Typography sx={footerText} onClick={contactNavigate}>Contact</Typography>
        <Typography  sx={footerText} onClick={()=>navigate("/cart")}>View Cart</Typography>
        <Typography  sx={footerText} onClick={()=>navigate("/shop")}>Categories</Typography>
        <Typography  sx={footerText} onClick={contactNavigate}>Orders</Typography>
        <Typography  sx={footerText} onClick={aboutNavigate}>Help</Typography>
        </Box>
      </Box>
      

      <Box flex='0.4' color='#7D8EA7' display={'flex'} flexDirection={'column'} alignItems={'center'}  textAlign={{xs:'center',sm:'left'}}>
        <Box>
        <Typography textAlign={{xs:'center',sm:'left'}} variant='h5' sx={{fontWeight:600,my:'1rem',color:'white',fontSize:{xs:'1.6rem',sm:'1.5rem'}}}>Shop</Typography>
        <Box>
          <Typography sx={footerText}><Typography component={'span'} fontWeight={600}>Address : </Typography>5143 Delhi Tilak Market 110042</Typography>
        </Box>
        <Box>
          <Typography sx={footerText}><Typography component={'span'} fontWeight={600}>Phone : </Typography>(+91) 1454548, (+91) 154545865</Typography>
        </Box>
        <Box>
          <Typography sx={footerText}><Typography component={'span'} fontWeight={600}>Hours : </Typography>10:00 - 15:00 Mon - Sat</Typography>
        </Box>
        
        <Box mt='2rem'  textAlign={{xs:'center',sm:'left'}}>
          <IconButton sx={{color:'white'}} onClick={()=>navigate("https://www.facebook.com/")}>
            <FacebookIcon/>
          </IconButton>
          <IconButton  sx={{color:'white'}} onClick={()=>navigate("https://twitter.com/home")}>
            <TwitterIcon/>
          </IconButton>
          <IconButton  sx={{color:'white'}} onClick={()=>navigate("https://www.instagram.com/")}>
            <InstagramIcon/>
          </IconButton>
          <IconButton  sx={{color:'white'}} onClick={()=>navigate("https://www.youtube.com/")}>
            <YouTubeIcon/>
          </IconButton>
          <IconButton  sx={{color:'white'}} onClick={()=>navigate("https://web.whatsapp.com/")}>
            <WhatsAppIcon/>
          </IconButton>
        </Box>

        </Box>

      </Box>


      </Box>
    </Box>
  )
}

export default Footer