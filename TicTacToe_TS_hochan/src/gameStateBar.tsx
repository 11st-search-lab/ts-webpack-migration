import React from "react";

import { GameState } from "./constants";

interface GameStateBarState {
  gameState: GameState;
}

export class GameStateBar extends React.Component<{}, GameStateBarState> {
  constructor(props: {}) {
    super(props);
    this.state = { gameState: "" };
  }

  private handleGameStateChange(e: CustomEvent) {
    this.setState({ gameState: e.detail });
  }

  private handleRestart(e: Event) {
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
