import React from 'react';

import './Header.css'

export default function Header() {
  const title = 'admin.bike-booking.com'

  return (
    <div className="header">
      <span className="title">{title.toUpperCase()}</span>
    </div>
  )
}

