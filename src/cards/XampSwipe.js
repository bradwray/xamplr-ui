import React from "react";
import Cards from "./Cards";
import Card from "./DraggableCard";
import "./swipeCard.css";
import Feedback from "./Feedback.js";

const CustomAlertLeft = () => <span>Non-Example</span>;
const CustomAlertRight = () => <span>Example</span>;
const CustomAlertTop = () => <span>Definition</span>;
const CustomAlertBottom = () => <span>Garbage!</span>;

class XampSwipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      showFeedback: false,
      correct: []
    };
  }
  swipeLeft = () => {
    var correct = this.state.correct;
    correct[this.state.currentCard] = this.checkIt(
      "nonexample",
      this.state.currentCard
    );
    this.setState(state => ({
      showFeedback: true,
      correct: correct,
      currentCard: state.currentCard + 1
    }));
  };
  swipeRight = () => {
    var correct = this.state.correct;
    correct[this.state.currentCard] = this.checkIt(
      "example",
      this.state.currentCard
    );
    this.setState(state => ({
      showFeedback: true,
      correct: correct,
      currentCard: state.currentCard + 1
    }));
  };

  swipeTop = () => {
    var correct = this.state.correct;
    correct[this.state.currentCard] = this.checkIt(
      "definition",
      this.state.currentCard
    );
    this.setState(state => ({
      showFeedback: true,
      correct: correct,
      currentCard: state.currentCard + 1
    }));
  };

  swipeBottom = () => {
    var correct = this.state.correct;
    correct[this.state.currentCard] = this.checkIt(
      "garbage",
      this.state.currentCard
    );
    this.setState(state => ({
      showFeedback: true,
      correct: correct,
      currentCard: state.currentCard + 1
    }));
  };

  checkIt = (answer, currentCard) => {
    return Math.random() > 0.5;
    //this is where the answer checking should go... mostly from the "done" method
  };

  render() {
    console.log(this.state);
    return (
      <div className="cardholder">
        <h3>Example=right, non-example=left, definition=up,garbage=down</h3>
        <Cards
          onEnd={this.done}
          className="master-root"
          alertLeft={<CustomAlertLeft />}
          alertRight={<CustomAlertRight />}
          alertTop={<CustomAlertTop />}
          alertBottom={<CustomAlertBottom />}
          arrowTop={this.swipeTop}
          arrowBottom={this.swipeBottom}
          arrowLeft={this.swipeLeft}
          arrowRight={this.swipeRight}
        >
          {this.props.data.map((item, key) => (
            <Card
              key={key}
              onSwipeTop={this.swipeTop}
              onSwipeBottom={this.swipeBottom}
              onSwipeLeft={this.swipeLeft}
              onSwipeRight={this.swipeRight}
            >
              <h2>{item}</h2>
            </Card>
          ))}
        </Cards>
        {/* put the props in message for whether it was right */}
        <Feedback
          correct={this.state.correct[this.state.currentCard - 1]}
          open={this.state.showFeedback}
          itemNum={this.state.currentCard}
          example={this.props.data[this.state.currentCard - 1]}
        />
      </div>
    );
  }
}
export default XampSwipe;
