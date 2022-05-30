import React, { Component } from "react";
import { allPerformances } from '../data/Performances';

class Performances extends Component {
  transformPerformance(performance) {
    return (
      <div key={performance.name}>
        <h3>{performance.name}</h3>
        <p className="info">
          {performance.location} <span>&bull;</span>
          <em className="date">{performance.date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</em>
        </p>
        <p>{performance.description}</p>
      </div>
    );
  }

  render() {
    const currentDate = new Date();

    const upcomingEvents = allPerformances.filter(performance => {
      return performance.date >= currentDate;
    }).map(performance => this.transformPerformance(performance));

    const pastEvents = allPerformances.filter(performance => {
      return performance.date < currentDate;
    }).map(performance => this.transformPerformance(performance));

    return (
      <section id="performances">
        <div className="row bottom-border">
          <div className="three columns header-col">
            <h1>
              <span>Upcoming</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{upcomingEvents}</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>Past</span>
            </h1>
          </div>

          <div className="nine columns main-col">{pastEvents}</div>
        </div>
      </section>
    );
  }
}

export default Performances;
