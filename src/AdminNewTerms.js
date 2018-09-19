import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  }
});

class AdminNewTerms extends React.Component {
  state = {
    expanded: null,
    newTermsToCheck: [
      {
        label: "hey",
        key: 1
      },
      {
        label: "umm",
        key: 2
      },
      {
        label: "yeah",
        key: 3
      }
    ]
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        {this.state.newTermsToCheck.map(newTerm => {
          return (
            <ExpansionPanel
              expanded={expanded === newTerm.key}
              onChange={this.handleChange(newTerm.key)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  {newTerm.label}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  {newTerm.key}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Put EditTerm here and make it pull only data after expanded
                  === it's key.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

AdminNewTerms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminNewTerms);
