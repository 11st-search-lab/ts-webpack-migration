import React from "react";

export class GameStateBar extends React.Component<{}, { gameState: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { gameState: "" };
  }

  handleGameStateChange(e: CustomEvent) {
    this.setState({ gameState: e.detail });
  }

  handleRestart(e: Event) {
    this.setState({ gameState: "" });
  }

  componentDidMount() {
    window.addEventListener("gameStateChange", (e) =>
      this.handleGameStateChange(e as CustomEvent)
    );
    window.addEventListener("restart", (e) => this.handleRestart(e));
  }

  componentWillUnmount() {
    window.removeEventListener("gameStateChange", (e) =>
      this.handleGameStateChange(e as CustomEvent)
    );
    window.removeEventListener("restart", (e) => this.handleRestart(e));
  }

  render() {
    return <div className="gameStateBar"> {this.state.gameState} </div>;
  }
}
