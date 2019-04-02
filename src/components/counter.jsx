import React, { Component } from "react";

class Counter extends Component {
  styles = {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps = ", prevProps);
    console.log("prevState = ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // for example ajax call to get new data from server
    }
  }

  componentWillUnmount() {
    console.log("counter.unmount()");
  }
  render() {
    console.log("Counter.render()");
    console.log("props", this.props);

    let classes =
      "badge m-2 " +
      (this.props.counter.value === 0 ? "badge-warning" : "badge-primary");

    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 16 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
