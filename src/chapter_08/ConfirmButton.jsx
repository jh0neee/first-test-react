import React from "react";

// class

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false, // 확인여부
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() { // EventHandler
        this.setState(prevState => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return(
            <button onClick={this.handleConfirm}
                    disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? "확인완료" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;