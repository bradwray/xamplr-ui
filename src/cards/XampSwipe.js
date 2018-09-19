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
    this.setState({
      showFeedback: true,
      correct: correct,
      currentCard: this.state.currentCard + 1
    });
  };
  swipeRight = () => {
    var correct = this.state.correct;
    correct[this.state.currentCard] = this.checkIt(
      "example",
      this.state.currentCard
    );
    this.setState({
      showFeedback: true,
      correct: correct,
      currentCard: this.state.currentCard + 1
    });
  };

  swipeTop = () => {
    var correct = this.state.correct;
    correct[this.state.currentCard] = this.checkIt(
      "definition",
      this.state.currentCard
    );
    this.setState({
      showFeedback: true,
      correct: correct,
      currentCard: this.state.currentCard + 1
    });
  };

  swipeBottom = () => {
    var correct = this.state.correct;
    correct[this.state.currentCard] = this.checkIt(
      "garbage",
      this.state.currentCard
    );
    this.setState({
      showFeedback: true,
      correct: correct,
      currentCard: this.state.currentCard + 1
    });
  };

  checkIt = (answer, currentCard) => {
    let xamp = this.props.data[currentCard];

    if (xamp.hasConsensus) {
      if (
        !xamp.nonExample &&
        answer === "example" &&
        !xamp.definition &&
        !xamp.frowned
      ) {
        return true;
      } else if (
        xamp.nonExample &&
        answer === "nonexample" &&
        !xamp.definition &&
        !xamp.frowned
      ) {
        return true;
      } else if (xamp.definition && answer === "definition" && !xamp.frowned) {
        return true;
      } else if (xamp.frowned && answer === "garbage" && !xamp.definition) {
        return true;
      } else {
        return false;
      }
    }

    return Math.random() > 0.5;
  };

  render() {
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
              <h2>{item.example}</h2>
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
