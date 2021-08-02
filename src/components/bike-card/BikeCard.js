import React from 'react';
import cn from 'classnames';
import StatusDropdown from '../status-dropdown/StatusDropdown';
import cross from '../../assets/cross.png';

import './BikeCard.css';
import { STATUSES } from '../../constants';


export default function BikeCard({ bike, del, removeBike, changeStatus }) {
  if (!bike) return null;

  const {
    id,
    name,
    type,
    color,
    price,
    status,
  } = bike;

  const isUnavailable = status === STATUSES.UNAVAILABLE;

  return (
    <div id="main" className={cn("bike-card", { busy: status === STATUSES.BUSY, unavailable: isUnavailable })}>
      <div className="bike-info">
        <div className="data-id">
          <div className="name-type-color">
            <b className={cn({ "unavailable-text": isUnavailable})}>{name.toUpperCase()} - </b>
            <span className={cn({ "unavailable-text": isUnavailable })}> {type.toUpperCase()} </span>
            <span className={cn({ "unavailable-text": isUnavailable })}>({color.toUpperCase()})</span>
            <div className={cn("id", { "unavailable-text": isUnavailable })}>ID: {id}</div>
          </div>
          <div className="status" >
            <div >
              STATUS:
            </div>
            <StatusDropdown id={id} changeStatus={changeStatus} status={status} />
          </div>
        </div>

      </div>

      <img src={cross} className="cross" alt="cross" onClick={() => removeBike(id)} />
      <div className={cn("price", { "unavailable-text": isUnavailable })}>{price} UAH/hr.</div>
    </div>

  )
}
