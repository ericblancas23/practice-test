import React, {Component} from 'react';
import '../component.css';


export default class LandingPage extends Component {
render() {
  return (
    <div>
     <section>
        <img className="bottom" src={require('../assets/Katsu-Curry.jpg')} alt="katsu"
            style={{ height: 500}}
        />
        <img className="top" src={require('../assets/Japan-Express_Tonkatsu.jpg')} alt="katsu" 
            style={{ height: 500}}
        />
     </section>
    </div>
        )
    }
}


