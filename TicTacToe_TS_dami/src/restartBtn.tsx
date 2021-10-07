import * as React from "react";

export class RestartBtn extends React.Component<{}, {}> {

    // Fire a global event notifying restart of game
    private handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        var event = document.createEvent("Event");
        event.initEvent("restart", false, true); 
        window.dispatchEvent(event);
    }

    render() {
        return <a href="#" className="restartBtn" onClick={e => this.handleClick(e)}>
            Restart 
        </a>;
    }
} 