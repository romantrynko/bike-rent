import React from 'react';
import { STATUSES } from '../../constants';

import './StatusDropdown.css';

export default function StatusDropdown({ id, status, changeStatus }) {
  return (
    <select className='select' value={status} onChange={event => {
      changeStatus(id, event.target.value)
    }}>
      {Object.values(STATUSES).map(statusOption => {
        return <option className="option" key={statusOption} value={statusOption}>{statusOption}</option>
      })}
    </select>
  )
};