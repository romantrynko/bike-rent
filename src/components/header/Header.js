import React from 'react';
import { TITLE } from '../../constants';

import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <span className="title">{TITLE.toUpperCase()}</span>
    </div>
  )
};