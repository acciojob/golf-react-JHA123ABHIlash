import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px" }
        };

        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    // Start button click
    buttonClickHandler() {

        this.setState({
            renderBall: true
        });

    }

    renderBallOrButton() {

        if (this.state.renderBall) {

            return (
                <div
                    className="ball"
                    style={{
                        position: "relative",
                        left: this.state.ballPosition.left
                    }}
                ></div>
            );

        } else {

            return (
                <button
                    className="start"
                    onClick={this.buttonClickHandler}
                >
                    Start
                </button>
            );

        }
    }

    // Arrow key movement
    componentDidMount() {

        document.addEventListener("keydown", (event) => {

            if (event.keyCode === 39) {

                let newPos = this.state.posi + 5;

                this.setState({
                    posi: newPos,
                    ballPosition: {
                        left: newPos + "px"
                    }
                });

            }

        });

    }

    render() {

        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );

    }

}

export default App;