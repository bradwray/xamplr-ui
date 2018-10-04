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

class ListToolsMakeEdit extends React.Component {
  state = {
    expanded: null,
    lists: [
      {
        name: "BioPsych",
        key: 1
      },
      {
        name: "Social Psych",
        key: 2
      },
      {
        name: "Behavior",
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
        {this.state.lists.map(list => {
          return (
            <ExpansionPanel
              expanded={expanded === list.key}
              onChange={this.handleChange(list.key)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{list.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Put the makeAList component with the chips in here.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

ListToolsMakeEdit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListToolsMakeEdit);
