import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import HeroCard from './components/HeroCard';
//import Wrapper from '../components/Wrapper';
import heroes from "./heroes.json";
import './App.css';
import GameWon from "./components/gameWon"
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let randomHeroes = heroes;
let newHighScore;
let emptyArray = [];

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    randomHeroCards: randomHeroes,
    count: 0,
    clickedCards: [],
    highSCore: 0,
    currentCard: []
  }

  cardClicked = (id) => {
    let newClickedCards = this.state.clickedCards;
    var same = newClickedCards.includes(id);
    let currentCount = this.state.count
    let currentHighScore = this.state.highSCore;

    console.log("clicked cards ", newClickedCards)
    console.log("current count ", currentCount)
    console.log("current high score ", currentHighScore)

    if (same && currentCount > currentHighScore) {
      console.log("same and higher");
      this.setState({
        highSCore: currentCount,
        count: 0,
        clickedCards: []
      })
    }
    else if (same && currentCount < currentHighScore) {
      this.setState({
        count: 0,
        clickedCards: []
      })
    }

    else {
      currentCount += 1;
      newClickedCards.push(id)

      this.setState({
        clickedCards: newClickedCards,
        count: currentCount
      })
    }
    this.handleRandom()

  }

  startOver = () => {
    this.setState({
      count: 0,
      clickedCards: [],
      highSCore: 0,
      currentCard: []
    })
    this.handleRandom()
  }

  handleRandom = (id) => {
    const randomHeroes = heroes.slice(0)
    for (let i = 0; i < heroes.length; i++) {
      let randonNumber = Math.floor(Math.random() * (i + 1))
      let temp = randomHeroes[i]
      randomHeroes[i] = randomHeroes[randonNumber]
      randomHeroes[randonNumber] = temp
    }
    this.setState({
      randomHeroCards: randomHeroes,
    })
  }
  render() {
    if (this.state.count === 10) {
      return (
        <div class="winScreen">
          <h1 class="title">You Win!</h1>
          <button onClick={() => { this.startOver() }} type="button" class="btn btn-primary">
            Start Over
          </button>
        </div>
      )
    }
    else {
      return (
        <div>
          <div className='title'>


            <Row className="  headerStuff">
              <div>
                <h1>Heroes List</h1>
              </div>
            </Row>
            <Row>
              <div>
                <h1>Dont click the same Hero Twice</h1>
              </div>
            </Row>
            <Row>
              <div>
                <h1>Current Score {this.state.count} High Score {this.state.highSCore}</h1>
              </div>
            </Row>
          </div>

          <div className='theCards'>

            {this.state.randomHeroCards.map(hero => {
              return (<HeroCard
                key={hero.id}
                id={hero.id}
                name={hero.name}
                image={hero.image}
                occupation={hero.occupation}
                location={hero.location}
                handleClick={this.cardClicked}
              />
              )
            })}
          </div>






        </div>
      )
    }
  }




}


export default App;
