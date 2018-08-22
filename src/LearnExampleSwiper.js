import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

const tutorialSteps = [
  {
    label: "How to be happy :)",
    imgPath: "/static/images/steppers/1-happy.jpg"
  },
  {
    label: "1. Work with something that you like, like…",
    imgPath: "/static/images/steppers/2-work.jpg"
  },
  {
    label: "2. Keep your friends close to you and hangout with them",
    imgPath: "/static/images/steppers/3-friends.jpg"
  },
  {
    label: "3. Travel everytime that you have a chance",
    imgPath: "/static/images/steppers/4-travel.jpg"
  },
  {
    label: "4. And contribute to Material-UI :D",
    imgPath: "/static/images/steppers/5-mui.png"
  }
];

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    backgroundColor: "#000",
    marginBottom: 0,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,

    overflow: "hidden",
    width: "100%"
  }
});

class LearnExampleSwiper extends React.Component {
  state = {
    activeStep: 0,
    examples: [" ", " ", " "]
  };

  handleNext = () => {
    if (this.state.activeStep === 2) {
      this.setState(prevState => ({
        activeStep: 0
      }));
    } else {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1
      }));
    }
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = this.state.examples.length;
    let message = "";
    let numLeft = maxSteps - activeStep - 1;
    if (numLeft === 2) {
      message = "See two more examples";
    } else if (numLeft === 1) {
      message = "See another example";
    } else {
      message = "Back to the first one.";
    }

    return (
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {this.state.examples.map(step => (
            <Paper square elevation={0} className={classes.header}>
              <Typography>{step}</Typography>
            </Paper>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              title="you can also swipe to move on"
              onClick={this.handleNext}
            >
              {message}
            </Button>
          }
        />
      </div>
    );
  }
}

LearnExampleSwiper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LearnExampleSwiper);
