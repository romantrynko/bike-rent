import React, { Component } from 'react';
import Header from '../header/Header';
import './App.css';
import Footer from '../footer/Footer';
import uniqueId from 'uniqid';
import localforage from 'localforage';
import { bikesList, BIKES_KEY, STATUSES } from '../../constants';
import BikeAddForm from '../bike-add-form/BikeAddForm';
import BikeCard from '../bike-card/BikeCard';
import Stats from '../stats/Stats';

class App extends Component {

  state = {
    bikes: []
  }

  async componentDidMount() {
    const bikes = await localforage.getItem(BIKES_KEY);

    if (!bikes) return;

    this.setState({ bikes });
  }

  addBike = async (newBike) => {
    const bikes = await localforage.getItem(BIKES_KEY) || [];
    const bikesWithNewBike = [
      ...bikes, { ...newBike, status: STATUSES.AVAILABLE, id: `${newBike.id}-${uniqueId()}` }
    ];

    await localforage.setItem(BIKES_KEY, bikesWithNewBike);
    this.setState({ bikes: bikesWithNewBike });
  }

  removeBike = async (id) => {
    const bikes = await localforage.getItem(BIKES_KEY) || [];
    const filteredBikes = bikes.filter(bike => bike.id !== id);

    await localforage.setItem(BIKES_KEY, filteredBikes);
    this.setState({ bikes: filteredBikes });
  }

  changeStatus = async (id, status) => {
    const bikes = await localforage.getItem(BIKES_KEY) || [];
    const filteredBikes = bikes.find(bike => bike.id === id);

    filteredBikes.status = status;

    await localforage.setItem(BIKES_KEY, bikes);
    this.setState({ bikes });
  }

  render() {
    const { bikes } = this.state;

    return (
      <div className="App">
        <Header />

        <div className="bikeList">
          {bikes.length ?
            bikes.map(bike => {
              return (
                <BikeCard changeStatus={this.changeStatus} removeBike={this.removeBike} bike={bike} />
              )
            }) : <div className="no-data">
              <span className="no-data-text">No bikes yet available</span>
            </div>
          }
        </div>

        <BikeAddForm bikes={bikes} onAddBike={this.addBike} />

        <div className="stats">
          <Stats bikes={bikes} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
