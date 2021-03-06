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
import AppNav from "./AppNav.js";

const newData = [
  {
    example:
      "Functional fixedness is shown when you think a hammer can only be used on nails.",
    fromTerm: "66",
    hasConsensus: true,
    key: "-ki0t",
    yesVotes: ["qwe", "sddg", "adda", "sdvg"],
    noVotes: ["qwdwwe", "fqesddg", "wdadda", "rfbwb"],
    defVotes: [],
    frownVotes: [],
    nonExample: false,
    AddedUserId: "sfvfad"
  },
  {
    example:
      "You have functional fixedness so you refuse to watch any other tv show except Riverdale.",
    fromTerm: "66",
    hasConsensus: true,
    key: "-ki0t",
    yesVotes: ["qwe", "sddg", "adda", "sdvg"],
    noVotes: ["qwdwwe", "fqesddg", "wdadda", "rfbwb"],
    defVotes: [],
    frownVotes: [],
    nonExample: true,
    definition: false,
    AddedUserId: "sfvfad"
  },
  {
    example: "This is an example of functional fixedness hahah",
    fromTerm: "66",
    hasConsensus: true,
    key: "-ki0t",
    yesVotes: ["qwe", "sddg", "adda", "sdvg"],
    noVotes: ["qwdwwe", "fqesddg", "wdadda", "rfbwb"],
    defVotes: [],
    frownVotes: [],
    flagged: [],
    frowned: true,
    definition: false,
    nonExample: false,
    AddedUserId: "sfvfad"
  },
  {
    example:
      "Limiting a familiar object to its traditional function and being closed off to other, new functions.",
    fromTerm: "66",
    hasConsensus: true,
    key: "-ki0t",
    yesVotes: ["qwe", "sddg", "adda", "sdvg"],
    noVotes: ["qwdwwe", "fqesddg", "wdadda", "rfbwb"],
    defVotes: [],
    frownVotes: [],
    definition: true,
    nonExample: false,
    AddedUserId: "sfvfad"
  },
  {
    example:
      "Lily displayed functional fixedness when she failed to realize that she could have used a stapler as a paperweight.",
    fromTerm: "66",
    hasConsensus: true,
    key: "-ki0t",
    yesVotes: ["qwe", "sddg", "adda", "sdvg"],
    noVotes: ["qwdwwe", "fqesddg", "wdadda", "rfbwb"],
    nonExample: false,
    AddedUserId: "sfvfad"
  },
  {
    example:
      "Functional Fixedness helps Sophie realize that she didn't have to cuss the guy out, who just cut her off while driving to the store to get ice pops for yoga class.",
    fromTerm: "66",
    hasConsensus: true,
    key: "-ki0t",
    yesVotes: ["qwe", "sddg", "adda", "sdvg"],
    noVotes: ["qwdwwe", "fqesddg", "wdadda", "rfbwb"],
    nonExample: false,
    AddedUserId: "sfvfad"
  }
];

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
  content: {
    width: "100%",
    maxWidth: "1000px",
    marginLeft: "auto",
    marginRight: "auto"
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
  },
  stepContainer: {
    backgroundColor: "#fff",
    maxHeight: "100%",
    marginBottom: "0px"
  }
});

const yourExamples = [
  {
    xamp:
      "yadda yadda yadda yadda humm dadada asdvk djhvsd kvsvad jvalb dsv jalsvdv",
    non: false,
    exVotes: 0,
    nonVotes: 0,
    garbageVotes: 0,
    defVotes: 0
  },
  {
    xamp: "yadda yoooo bo bo bo hangdang ba dang a lang a fang wang chang yang",
    non: true,
    exVotes: 0,
    nonVotes: 0,
    garbageVotes: 0,
    defVotes: 0
  }
];

function getSteps() {
  return ["Learn", "Create", "Evaluate"];
}

let transitioning = false;

class App extends React.Component {
  state = {
    activeStep: 0,
    open: false,
    validExamples: false,
    term: {
      name: "functional fixedness",
      pos: "noun",
      stockDefinitions: ["def1", "def2", "def3"],
      stockExamples: [
        "Here is an example of this term... yadda yadda.",
        "extwo",
        "exthree"
      ],
      forms: [
        { form: "form1", pos: "noun" },
        { form: "form2", pos: "verb past tense" }
      ]
    }
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return <Learn term={this.state.term} />;
      case 1:
        return (
          <Create
            term={this.state.term}
            back={this.handleBack}
            submit={this.handleNext}
            yourExamples={this.state.yourExamples}
          />
        );
      case 2:
        return (
          <Evaluate
            term={this.state.term}
            open={this.state.open}
            examples={this.state.examples}
          />
        );
      default:
        return "Unknown step";
    }
  };
  getUserExamples = (ex, non) => {
    this.setState({
      example: ex,
      nonexample: non
    });
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
      transitioning: true,
      yourExamples: this.state.activeStep === 0 ? yourExamples : [],
      examples: this.state.activeStep === 1 ? newData : [] //replace newData with methods function getEvaluateData(forterm)
    }));

    setTimeout(() => {
      this.setState(state => ({
        transitioning: false
      }));
    }, 150);
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
      open: false,
      transitioning: true
    }));

    setTimeout(() => {
      this.setState(state => ({
        transitioning: false
      }));
    }, 150);
  };

  handleSubmitExamples = () => {
    this.setState({ check: true });
  };
  examplesCheckOut = () => {
    console.log("they check out");
    this.handleNext();
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

  whichButtons = () => {
    let buttons;
    if (!this.state.transitioning && this.state.activeStep === 0) {
      buttons = (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleNext}
            className={this.props.classes.button}
          >
            Got it
          </Button>
        </div>
      );
    }

    if (!this.state.transitioning && this.state.activeStep === 2) {
      buttons = (
        <div>
          <Button
            onClick={this.handleBack}
            className={this.props.classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleBegin}
            className={this.props.classes.button}
          >
            Start
          </Button>
        </div>
      );
    }
    return buttons;
  };

  render() {
    //console.log(this.state);
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className={classes.root}>
        <AppNav />
        <div className={classes.content}>
          <Stepper
            className={classes.stepContainer}
            activeStep={activeStep}
            orientation="vertical"
          >
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>
                    <Typography variant="headline">{label}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography className={classes.content} variant="body2">
                      {this.getStepContent(
                        index,
                        this.state.open,
                        this.state.term
                      )}
                    </Typography>
                    <div className={classes.actionsContainer}>
                      {this.whichButtons()}
                    </div>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </div>
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
