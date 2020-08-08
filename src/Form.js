import React from 'react';
import './Form.css';
import api from './api/index';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {substance: ''}
  }

  handleChangeOpinion = async event => {
    const substance = event.target.value
    this.setState({ substance });
  }

  handleIncludeOpinion = async () => {
    const substance = this.state
    const payload = substance

    await api.insertOpinion(payload)
      .then(window.alert('Noted!')) 
      .catch(error => console.log(error)
    );
  }

  render() {
    return (
      <div className="FormText">
          <p>Tell us how you'd like to solve this problem.</p>
          <form>
            <textarea className="ImproveForm" type="text" placeholder="What did we miss?" value={this.state.substance} onChange={this.handleChangeOpinion} autoFocus></textarea><br /><br />
            <button className='FormButton' id='FormSubmit' onClick={this.handleIncludeOpinion}>Send</button>
          </form>
      </div>
    )
  };
}

export default Form;
