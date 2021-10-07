import * as React from "react"

interface GameStateBarState {
    gameState: "" | "X Wins!" | "O Wins!" | "Draw";
}

export class GameStateBar extends React.Component<{}, GameStateBarState> {
    
    constructor(props) {
        super(props);
        this.state = {gameState: ""};
    }
    
    private handleGameStateChange(e: CustomEvent) {
        this.setState({gameState: e.detail});
    }
  
    private handleRestart(e: Event) {
        this.setState({gameState: ""});
    }

    componentDidMount() {
        window.addEventListener("gameStateChange", (e: CustomEvent) => this.handleGameStateChange(e));
        window.addEventListener("restart", (e: CustomEvent) => this.handleRestart(e));
    }

    componentWillUnmount() {
        window.removeEventListener("gameStateChange", (e: CustomEvent) => this.handleGameStateChange(e));
        window.removeEventListener("restart", (e: CustomEvent) => this.handleRestart(e));    
    }
    
    render() {
        return (
            <div className="gameStateBar"> {this.state.gameState} </div> 
        )
    }
}   
