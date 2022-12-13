import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const socialsList = [
    {
        id: 'social-instagram',
        name: 'instagram',
        url: 'https://www.instagram.com/we4ulogisitics/',
        icon: <FaInstagram  color='white' fontSize={'20px'}  />
        
    },
    {
        id: 'social-facebook',
        name: 'facebook',
        url: 'https://www.facebook.com/profile.php?id=100087358669498',
        icon: <FaFacebook  color='white' fontSize={'20px'}  />
    },
    {
        id: 'social-linkedin',
        name: 'linkedin',
        icon: <FaLinkedin  color='white' fontSize={'20px'}  />,
        url: 'https://www.linkedin.com/company/we4u-logistics/',
    },
    {
        id: 'social-twitter',
        name: 'twitter',
        icon: <FaTwitter  color='white' fontSize={'20px'}  />,
        url: 'https://twitter.com/we4ulogistics',
    },
  ];