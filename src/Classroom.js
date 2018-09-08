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

class Classroom extends React.Component {
  state = {
    expanded: false
  };

  componentWillReceiveProps = next => {
    this.setState({
      expanded: this.props.currentlyAssigned
    });
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
            <Typography className={classes.heading}>
              {this.props.classroom.classroomName}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {this.props.classroom.teacher}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul>
              {this.props.classroom.lists.map(list => {
                return (
                  <li>
                    <VocabList items={list} />
                  </li>
                );
              })}
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Classroom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Classroom);
