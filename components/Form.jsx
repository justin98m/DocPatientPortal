import React, { Component } from "react";
import { dateConversion } from "../src/lib/dateConversion";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      medname: "",
      dosage: "",
      measurement: "",
      frequency: "",
      intake: "",
      time: "",
      date: "",
    };
  }

  getFormData() {
    return {
      medname: this.state.medname,
      dosage: this.state.dosage,
      measurement: this.state.measurement,
      frequency: this.state.frequency,
      intake: this.state.intake,
      time: this.state.time,
      date: this.state.date,
    };
  }

  handleMednameChange = (event) => {
    this.setState({ medname: event.target.value });
  };
  handleDosageChange = (event) => {
    this.setState({ dosage: event.target.value });
  };
  handleMeasurementChange = (event) => {
    this.setState({ measurement: event.target.value });
  };
  handleFrequencyChange = (event) => {
    this.setState({ frequency: event.target.value });
  };
  handleIntakeChange = (event) => {
    this.setState({ intake: event.target.value });
  };
  handleTimeChange = (event) => {
    this.setState({ time: event.target.value });
  };
  handleDateChange = (event) => {
    this.setState({ date: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    dateConversion(this.state.date, this.state.time);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="flex flex-col p-5">
        <div className="pb-6 flex flex-col">
          <label>Medication Name</label>
          <input
            type="text"
            value={this.state.medname}
            onChange={this.handleMednameChange}
            className="border-b-2"
          />
        </div>
        <div className="pb-6 flex flex-col">
          <label>Dosage</label>
          <input
            type="number"
            value={this.state.dosage}
            onChange={this.handleDosageChange}
            className="border-b-2"
          ></input>
          <select
            value={this.state.measurement}
            onChange={this.handleMeasurementChange}
          >
            <option value="microgram">Microgram</option>
            <option value="milligram">Milligram</option>
            <option value="gram">Gram</option>
            <option value="kilogram">Kilogram</option>
            <option value="c3">Cubic centimeter</option>
            <option value="millitre">Millitre</option>
            <option value="litre">Litre</option>
          </select>
        </div>
        <div className="pb-6 flex flex-col">
          <label>Frequency (every x days)</label>

          <input
            type="number"
            value={this.state.frequency}
            min="1"
            max="31"
            onChange={this.handleFrequencyChange}
          />
        </div>
        <div className="pb-6 flex flex-col">
          <label>Intake Type</label>
          <select value={this.state.intake} onChange={this.handleIntakeChange}>
            <option value="tablet">Tablet</option>
            <option value="syrup">Syrup</option>
            <option value="spray">Spray</option>
            <option value="solution">Solution</option>
            <option value="soap">Soap/Shampoo</option>
            <option value="pill">Pill</option>
            <option value="aerosol">Aerosol</option>
            <option value="cream">Cream</option>
            <option value="enema">Enema</option>
            <option value="injection">Injection</option>
            <option value="liquid">Liquid</option>
            <option value="lotion">Lotion</option>
          </select>
        </div>
        <div className="pb-6 flex flex-col">
          <label>Time</label>
          <input
            type="time"
            value={this.state.time}
            onChange={this.handleTimeChange}
          />
        </div>
        <div className="pb-6 flex flex-col">
          <label>Start Date</label>
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </div>
        <div className="flex items-center justify-end pt-6 border-t border-solid border-slate-200 rounded-b">
          <button
            className="bg-boablue text-white hover:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
