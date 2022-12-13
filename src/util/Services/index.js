import { FaHouseUser, FaWarehouse, FaTruck, FaTruckMoving, FaBox } from 'react-icons/fa';

export const ourServicesList = [
    {
        id: 'Vehicle Transportation',
        url: <FaTruck color='black' fontSize={'30px'} />,
        title: 'Vehicle Transportation',
        content: 'Vehicles, boats or motorcycles can feel like extended family members, especially whe they have sentimental value. We4U Logistics provides affordable transportation services.'
      },
    {
      id: 'Home & Office Removals',
      url: <FaHouseUser color='black' fontSize={'30px'} />,
      title: 'Home & Office Removals',
      content: 'Whether its just work or your entire life being uprooted from one place to another, we got you covered. Give us a call today!'
    },
    {
      id: 'Storage',
      url: <FaWarehouse color='black' fontSize={'30px'} />,
      title: 'Storage',
      content: 'We provide all roud peace of mind in the space of moving. When your goods have to move but dont have anywhere to be kept, dont worry, we have storage facilities for you!'
    },
    {
      id: 'Local Removals',
      url: <FaTruck color='black' fontSize={'30px'} />,
      title: 'Local Removals',
      content: 'Some moves are just around the corner, but still quite a job, to us local removals are just as important as any other.'
    },
    {
      id: 'National Removals',
      url: <FaTruckMoving color='black' fontSize={'30px'} />,
      title: 'National Removals',
      content: 'Provincial and National moves have never been simpler. We4U Logistics will take care of you.'
    },
    {
      id: 'Packaging and Wrapping',
      url: <FaBox color='black' fontSize={'30px'} />,
      title: 'Packaging and Wrapping',
      content: 'We provide both the service of wrapping and packaging, together with the materials for such need. Our competitive prices make it possible for all your needs to be taken care of without a sweat.'
    },
];