import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onSubstitution, onDelete } = this.props;
    return (
      <div className="container">
        <div className="row my-3">
          <div className="col-1 mx-2">
            <span className={this.getBadgeClass()}>
              {this.formatCount(counter.value)}
            </span>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary mx-1"
              onClick={() => onIncrement(counter)}
            >
              +
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => onSubstitution(counter)}
              disabled={counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  getBadgeClass() {
    let badgeClass = "badge bg-";
    badgeClass +=
      this.props.counter.value === 0 ? "warning fs-6" : "primary fs-5";
    return badgeClass;
  }
}

export default Counter;
