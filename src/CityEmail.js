import React from 'react';
import './CityEmail.css';

let defaulttext = "Let Phoenix City Council know what you think."

function sendMail(event) {

  event.preventDefault();

  let address = 'mailto:me@example.com?subject=Canali PHX&body=';

  let body = document.getElementById('CityForm').value

  let mail = address.concat(body);

  window.open(mail)
}

function CityEmail() {
    return (
    <div className='EmailText'>
        <p>Tell the City how you'd like to solve this problem.</p> 
        <form>
          <textarea className="CityForm" type="text" placeholder={defaulttext} id="CityForm"></textarea><br /><br />
          <button className='EmailButton' onClick={sendMail}>send</button>
        </form>
    </div>
    );
};

export default CityEmail