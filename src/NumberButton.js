import React from 'react';


class NumberButton extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.onClick()}> {this.props.value} </button>
        );

    }


}

export default NumberButton;
