import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginBottom: 0,
    textAlign: "left",
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,

    overflow: "hidden",
    width: "100%"
  },
  exampleSwipeContainer: {
    height: "20vh"
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
          {this.props.exes.map(step => (
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
