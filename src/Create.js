import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import YourExamples from "./YourExamples.js";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  },
  input: {
    color: "#444"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#05386b",
      color: "#5cdb95"
    }
  }
});

class Create extends React.Component {
  state = {
    name: "",
    hasWrittenExamples: true
  };

  handleChangeEx = event => {
    this.setState({ example: event.target.value });
  };
  handleChangeNon = event => {
    this.setState({ nonexample: event.target.value });
  };

  handleBack = () => {
    this.props.back();
  };

  handleSubmit = () => {
    this.props.submit();
  };

  handleYourExamples = () => {
    console.log("yup");
  };

  render() {
    const { classes } = this.props;
    const { hasWrittenExamples, example, nonexample } = this.state;

    return (
      <div className={classes.container}>
        Based on what you learned about this term, make an original example and
        non-example.
        {hasWrittenExamples ? (
          <YourExamples termName={this.props.term.name} />
        ) : (
          <div />
        )}
        <FormControl
          className={classes.formControl}
          fullWidth={true}
          required={true}
        >
          <InputLabel htmlFor="name-simple">Real Example</InputLabel>
          <Input
            className={classes.input}
            id="name-simple"
            variant=""
            multiline={true}
            value={example}
            onChange={this.handleChangeEx}
          />
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby="name-helper-text"
          fullWidth={true}
          required={true}
        >
          <InputLabel htmlFor="name-helper">Non-Example</InputLabel>
          <Input
            id="name-helper"
            multiline={true}
            value={nonexample}
            onChange={this.handleChangeNon}
          />
          <FormHelperText id="name-helper-text">
            A clearly incorrect (but not absurdly incorrect) usage of the term
          </FormHelperText>
          <div>
            <Button onClick={this.handleBack} className={classes.button}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        </FormControl>
      </div>
    );
  }
}

Create.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Create);
