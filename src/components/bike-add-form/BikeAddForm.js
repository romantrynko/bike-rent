import React, { Component } from 'react';

import './BikeAddForm.css';

const initialState = {
  name: '',
  type: '',
  color: '',
  wheelSize: '',
  price: '',
  id: '',
  description: '',
};

export default class BikeAddForm extends Component {
  state = initialState;

  onNameChange = (event) => {
    const name = event.target.value;

    this.setState({ name })
  };

  onTypeChange = (event) => {
    const type = event.target.value;

    this.setState({ type })
  };

  onColorChange = (event) => {
    const color = event.target.value;

    this.setState({ color })
  };

  onWheelsizeChange = (event) => {
    const wheelSize = event.target.value;

    this.setState({ wheelSize })
  };

  onPriceChange = (event) => {
    const price = event.target.value;

    this.setState({ price })
  };

  onDescriptionChange = (event) => {
    const description = event.target.value;

    this.setState({ description })
  };

  onIdChange = (event) => {
    const id = event.target.value;

    this.setState({ id })
  };

  clearForm = () => {
    this.setState(initialState);
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {
      onAddBike
    } = this.props;

    const {
      name,
      type,
      color,
      wheelSize,
      price,
      id,
      description
    } = this.state;

    const newBike = {
      name,
      type,
      color,
      wheelSize,
      price,
      id,
      description
    };

    onAddBike && onAddBike(newBike);
  };

  render() {
    const {
      name,
      type,
      color,
      wheelSize,
      price,
      id,
      description
    } = this.state;

    return (
      <form className="bike-add-form" onSubmit={this.onSubmit}>
        <div className="row name-type-row">
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Name"
            required
            minLength={5}
            value={name}
            onChange={this.onNameChange}
          />
          <input
            type="text"
            className="input"
            id="type"
            placeholder="Type"
            required
            minLength={5}
            value={type}
            onChange={this.onTypeChange}
          />
        </div>

        <div className="row color-wheelsize-row">
          <input
            type="text"
            className="input"
            id="color"
            placeholder="Color"
            required
            minLength={5}
            value={color}
            onChange={this.onColorChange}
          />
          <input
            type="number"
            className="input"
            id="wheelsize"
            placeholder="Wheel size"
            required
            value={wheelSize}
            onChange={this.onWheelsizeChange}
          />
        </div>

        <div className="row price-id-row">
          <input
            type="number"
            className="input"
            id="price"
            placeholder="Price"
            required
            minLength={5}
            value={price}
            onChange={this.onPriceChange}
          />
          <input
            type="text"
            className="input"
            id="id"
            placeholder="ID (slug): XXXXXXXXXXXX"
            value={id}
            onChange={this.onIdChange}
          />
        </div>

        <textarea
          className="description"
          id="description"
          placeholder="Description"
          required
          minLength={5}
          value={description}
          onChange={this.onDescriptionChange}
        />

        <div className="button-row">
          <button
            className="btn btn-1"
            type="submit"
            onSubmit={this.onSubmit}
          >
            SAVE
          </button>
          <button
            className="btn btn-2"
            type="button"
            onClick={this.clearForm}
          >
            CLEAR
          </button>
        </div>
      </form>
    )
  }
};