import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Map from "@material-ui/icons/Map";

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
  },
  indent: {
    paddingLeft: theme.spacing.unit * 14
  }
});

class AdminNewTeachers extends React.Component {
  state = {
    expanded: null,
    newTeachersToCheck: [
      {
        name: "Steve Jones",
        email: "sjones@dps.net"
      },
      {
        name: "Steve Turner",
        email: "sturner@k12albemarle.org"
      },
      {
        name: "Nancy Fenton",
        email: "nfenton@d125.org"
      }
    ]
  };

  handleWho = (newTeacher, key) => (event, expanded) => {
    if (expanded) {
      let query = newTeacher.name + " " + newTeacher.email;
      let url = "https://www.google.com/search?q=" + query;
      window.open(url, "_blank");
    }

    this.setState({
      expanded: expanded ? key : false
    });
  };

  handleWhere = (newTeacher, key) => (event, expanded) => {
    let district = newTeacher.email.substring(
      newTeacher.email.indexOf("@") + 1,
      newTeacher.email.length
    );
    let mapUrl = "https://www.google.com/maps/search/" + district;
    console.log(mapUrl);
    window.open(mapUrl, "_blank1");
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        {this.state.newTeachersToCheck.map((newTeacher, index) => {
          return (
            <ExpansionPanel
              expanded={expanded === index}
              onChange={this.handleWho(newTeacher, index)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  {newTeacher.name}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  {newTeacher.email}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className={classes.indent}>
                  <Button
                    variant="small"
                    color="Secondary"
                    className={classes.button}
                    onClick={this.handleWhere(newTeacher, index)}
                  >
                    <Map />
                  </Button>
                  <Button
                    variant="outlined"
                    color="Secondary"
                    className={classes.button}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="outlined"
                    color="Secondary"
                    className={classes.button}
                  >
                    Deny
                  </Button>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

AdminNewTeachers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminNewTeachers);
