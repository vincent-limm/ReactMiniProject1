import React from 'react';

import { BiHome } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import avatar from './avatar.jpg';
import logo from './logo.webp';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <BiHome />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
];
