import React from "react";
import Cards from "./Cards";
import Card from "./DraggableCard";
import "./swipeCard.css";
import Feedback from "./Feedback.js";

const data = [
  "Functional fixedness is shown when you think a hammer can only be used on nails.",
  "You have functional fixedness so you refuse to watch any other tv show except Riverdale.",
  "This is an example of functional fixedness hahah",
  "Limiting a familiar object to its traditional function and being closed off to other, new functions.",
  "Lily displayed functional fixedness when she failed to realize that she could have used a stapler as a paperweight.",
  "Functional Fixedness helped Sophie realize that she didn't have to cuss the guy out, who just cut her off while driving to the store to get ice pops for yoga class."
];

const CustomAlertLeft = () => <span>Non-Example</span>;
const CustomAlertRight = () => <span>Example</span>;
const CustomAlertTop = () => <span>Definition</span>;
const CustomAlertBottom = () => <span>Garbage!</span>;

class XampSwipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      showFeedback: false
    };

    //these aren't working yet they'll need to be send into the
    document.onkeydown = e => {
      if (e.key === "ArrowLeft") {
        this.swipeLeft();
      }
      if (e.key === "ArrowRight") {
        this.swipeRight();
      }
      if (e.key === "ArrowUp") {
        this.swipeTop();
      }
      if (e.key === "ArrowDown") {
        this.swipeBottom();
      }
    };
  }

  swipeLeft = () => {
    this.setState(state => ({
      showFeedback: true,
      currentCard: state.currentCard + 1
    }));
  };
  swipeRight = () => {
    this.setState(state => ({
      showFeedback: true,
      currentCard: state.currentCard + 1
    }));
  };

  swipeTop = () => {
    this.setState(state => ({
      showFeedback: true,
      currentCard: state.currentCard + 1
    }));
  };

  swipeBottom = () => {
    this.setState(state => ({
      showFeedback: true,
      currentCard: state.currentCard + 1
    }));
  };
  done() {}

  feedback(obj) {
    var orig = obj.style.color;
    obj.style.color = "#f00";
    setTimeout(() => {
      obj.style.color = orig;
    }, 300);
  }

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
        >
          {data.map((item, key) => (
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
          message="correct"
          open={this.state.showFeedback}
          itemNum={this.state.currentCard}
          example={data[this.state.currentCard - 1]}
        />
      </div>
    );
  }
}
export default XampSwipe;
