import React from 'react';
import './CityEmail.css';

let defaulttext = "Type your thoughts and we'll generate an email for you. Don't worry, it won't send until you're ready."

function sendMail(event) {

  event.preventDefault();

  let address = 'mailto:mayor.gallego@phoenix.gov?subject=Canali PHX&body=';

  let body = document.getElementById('CityForm').value

  let mail = address.concat(body);

  window.open(mail)
}

function CityEmail() {
    return (
    <div className='EmailText'>
        <p>Tell Mayor Gallego how you'd like to solve this problem.</p> 
        <form>
          <textarea className="CityForm" type="text" placeholder={defaulttext} id="CityForm"></textarea><br /><br />
          <button className='EmailButton' onClick={sendMail}>send</button>
        </form>
    </div>
    );
};

export default CityEmail