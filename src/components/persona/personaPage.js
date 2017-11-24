import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PersonaDetail from '../PersonaDetail/PersonaDetail';
import { Link } from 'react-router-dom';
import * as personaActions from '../../actions/personaActions';

class Personas extends React.Component {
  componentWillMount(){
      console.log(this.props);
  }
  renderList() {
      return this.props.personas.map((persona, i) => {
          return (
              <tr key={i}>
                  <td>{i}</td>
                  <td>{persona.name}</td>
                  <td>{persona.email}</td>
                  <td><Link to="/editPersona"  onClick={() => this.props.selectPersona(persona)}>Edit</Link></td>
              </tr>

          );
      });
  }

  render() {
    let nameInput;
    return(
      <div className="row">
        <Link to="/addPersona">New User</Link>
        <div className="col-md-6">
          <h3>Personas</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            {this.renderList()}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Persona</h3>
        </div>
      </div>
    )
  }
}

// Get apps state and pass it as props to Personas
//      > whenever state changes, the Personas will automatically re-render
function mapStateToProps(state) {
  return {
      personas: state.personas,
  };
}

// Get actions and pass them as props to to Personas
//      > now Personas has this.props.selectUser
function matchDispatchToProps(dispatch, ownProps){
  return {
    selectPersona: (persona) =>  { dispatch(personaActions.selectPersona(persona)) },
    fetchPersonas: () => {dispatch(personaActions.fetchPersonas())}
      // addUser: (user) =>  { dispatch(actions.addUser(user)) },
      //bindActionCreators: bindActionCreators({selectUser: selectUser}, dispatch)
  };
}

// We don't want to return the plain Personas (component) anymore, we want to return the smart Container
//      > Personas is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Personas);