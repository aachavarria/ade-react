import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.persona)" because we set state to null by default
 * */

class PersonaDetail extends Component {
    render() {
        if (!this.props.persona) {
            return (<div>Select a persona...</div>);
        }
        return (
            <div>
                <img src={this.props.persona.thumbnail} />
                <h2>{this.props.persona.name} {this.props.persona.last}</h2>
                <h3>Age: {this.props.persona.age}</h3>
                <h3>Description: {this.props.persona.description}</h3>
            </div>
        );
    }
}

// "state.activepersona" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        persona: state.activePersona
    };
}

export default connect(mapStateToProps)(PersonaDetail);
