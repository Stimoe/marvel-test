import React from "react";
import ReactDOM from 'react-dom';
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroCard(props) {

    return (
        <div className="containers">

  <div className="card-image">
                <img onClick={()=>{props.handleClick(props.id)}} alt={props.name} src={props.image}/>
            </div>


  <div className="card-title">
                <ul>
                    <li>
                        <strong> {props.name} </strong> 
                    </li>
                </ul>
            </div>







        </div>
    );
}

export default HeroCard;