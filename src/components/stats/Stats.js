import React, { Component } from 'react';
import { STATUSES } from '../../constants';

import './Stats.css';

export default class Stats extends Component {
  get getAverage() {
    const {bikes}= this.props;

    if (!this.totalBikes) return 0;

    const bikesTotalCost = bikes.reduce((prev, curr) => prev + Number(curr.price), 0);
  
    return bikesTotalCost / this.totalBikes;
  }

  get availableBikes() {
    return this.props.bikes.filter(bike => bike.status === STATUSES.AVAILABLE).length;
  }

  get busyBikes() {
    return this.props.bikes.filter(bike => bike.status === STATUSES.BUSY).length;
  }

  get totalBikes() {
    return this.props.bikes.length;
  }

  render() {
    return (
      <div>
        <div className="statistics">STATISTICS</div>
        <div className="total">Total Bikes: {this.totalBikes}</div>
        <div className="available">Available bikes: {this.availableBikes}</div>
        <div className="booked">Booked bikes: {this.busyBikes}</div>
        <div className="av-cost">Average bike cost: {this.getAverage}</div>
      </div>
    )
  }
}
