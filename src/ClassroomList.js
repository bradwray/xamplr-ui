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
  classroom: {
    backgroundColor: "#ddd"
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

class ClassroomList extends React.Component {
  state = {
    expanded: false
  };

  handleChange = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          className={classes.classroom}
          expanded={expanded}
          onChange={this.handleChange}
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
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ClassroomList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClassroomList);
