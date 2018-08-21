import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Learn from "./Learn.js";
import Evaluate from "./Evaluate.js";
import Create from "./Create";
import { withTheme } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import AppNav from "./AppNav.js";

const styles = theme => ({
  root: {
    width: "100%"
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  },
  color: {
    main: theme.primary
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#05386b",
      color: "#5cdb95"
    }
  }
});

function getSteps() {
  return ["Learn", "Create", "Evaluate"];
}

function getStepContent(step, open) {
  switch (step) {
    case 0:
      return <Learn />;
    case 1:
      return <Create />;
    case 2:
      return <Evaluate open={open} />;
    default:
      return "Unknown step";
  }
}

class App extends React.Component {
  state = {
    activeStep: 0,
    open: false
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
      open: false
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleBegin = () => {
    //make a conditional that checks to see whether the examples have been seen already and run makequiz again if they have
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <AppNav />
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>
                  <Typography variant="headline">{label}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body2">
                    {getStepContent(index, this.state.open)}
                  </Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      {activeStep !== steps.length - 1 ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          Next
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleBegin}
                          className={classes.button}
                        >
                          Begin!
                        </Button>
                      )}
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
