import React from 'react';
import { DEV_NAME } from '../../constants';

import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <span className="text1">
        {"Developer: "}
        <span className="text2">
          {`${DEV_NAME.DEV_FIRST_NAME} ${DEV_NAME.DEV_LAST_NAME}`}
        </span>
      </span>
    </div>
  )
};