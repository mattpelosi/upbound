import React from "react";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      loading: false
    };

    this.startProgressFill = this.startProgressFill.bind(this);
    this.stopProgressFill = this.stopProgressFill.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentWorkflow } = this.props;
    const { loading } = this.state;

    if (currentWorkflow === "pending") {
      if (!loading) {
        this.setState({ loading: true }, this.startProgressFill);
      }
    } else {
      this.stopProgressFill();
      if (loading) {
        this.setState({ loading: false });
      }
    }
  }

  startProgressFill() {
    let count = 0;
    this.interval = setInterval(() => {
      this.setState({ progress: count });
      count = count + 10;
    }, 100);
  }

  stopProgressFill() {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { progress, loading } = this.state;
    return (
      <div className="progress" style={progressStyle}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: `${progress}%`,
            background: `${loading ? "blue" : "green"}`
          }}
        />
      </div>
    );
  }
}

export default ProgressBar;

const progressStyle = {
  position: "relative",
  top: "30%",
  height: "10px",
  background: "#DEDFE5"
};
