import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const socialsList = [
    {
        id: 'social-instagram',
        name: 'instagram',
        url: '/',
        icon: <FaInstagram  color='white' fontSize={'20px'}  />
        
    },
    {
        id: 'social-facebook',
        name: 'facebook',
        url: '/',
        icon: <FaFacebook  color='white' fontSize={'20px'}  />
    },
    {
        id: 'social-linkedin',
        name: 'linkedin',
        icon: <FaLinkedin  color='white' fontSize={'20px'}  />,
        url: '/',
    },
    {
        id: 'social-twitter',
        name: 'twitter',
        icon: <FaTwitter  color='white' fontSize={'20px'}  />,
        url: '/',
    },
  ];