import React from 'react';
import { connect } from 'react-redux';
import * as personaActions from '../../actions/personaActions';

class Persona extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let nameInput;
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Personas</h3>
          <table className="table">
            <thead>
              <th>
                <td>Name</td>
                <td>Email</td>
              </th>
            </thead>
            <tbody>
            {this.props.personas.map((b, i) => <tr key={i}>
              <td>{b.name}</td>
              <td>{b.email}</td>
            </tr> )}
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

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    personas: state.personas
  }
};

// Maps actions to props
// const mapDispatchToProps = (dispatch) => {
//   return {
//   // You can now say this.props.createBook
//     createPersona: persona => dispatch(personaActions.createPersona(persona))
//   }
// };

// Use connect to put them together
export default connect(mapStateToProps)(Persona);
