import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import XampSwipe from "./cards/XampSwipe";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit
  }
});

const examples = [
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

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
];

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

class AdminExampleApprover extends React.Component {
  state = {
    listName: "",
    chosen: "",
    suggestions: []
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  choseItem = (event, item) => {
    console.log(item.suggestionValue);
    this.setState({
      chosen: item.suggestionValue
    });
  };

  handleChange = () => (event, { newValue }) => {
    this.setState({
      listName: newValue
    });
  };

  importList = () => {
    console.log("import " + this.state.chosen);
    this.props.importAndSwitch(this.state.chosen);
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      onSuggestionSelected: this.choseItem,
      getSuggestionValue,
      renderSuggestion
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: "Enter a topic e.g. biopsychology",
            value: this.state.listName,
            onChange: this.handleChange()
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
        {this.state.chosen !== "" ? <XampSwipe data={examples} /> : <div />}
      </div>
    );
  }
}
AdminExampleApprover.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminExampleApprover);
