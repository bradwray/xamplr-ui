import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VocabList from "./VocabList.js";

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

class ClassroomLists extends React.Component {
  state = {
    expanded: null
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
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>AP Lit</Typography>
            <Typography className={classes.secondaryHeading}>
              Mrs. Yuscavage
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul>
              <li>
                <VocabList />
              </li>
              <li>
                <VocabList />
              </li>
              <li>
                <VocabList />
              </li>
              <li>
                <VocabList />
              </li>
              <li>
                <VocabList />
              </li>
              <li>
                <VocabList />
              </li>
              <li>
                <VocabList />
              </li>
              <li>
                <VocabList />
              </li>
              <li>
                <VocabList />
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Psych Class</Typography>
            <Typography className={classes.secondaryHeading}>
              Mr. Wray
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <VocabList />
            <VocabList />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ClassroomLists.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClassroomLists);
