import React from 'react';

import './Footer.css'

export default function Footer() {
  const devFirstName = 'Roman';
  const devLastName = 'Trynko';

  return (
    <div className="footer">
      <span className="text1">
        {"Developer: "}
        <span className="text2">
          {`${devFirstName} ${devLastName}`}
        </span>
      </span>

    </div>
  )
}
