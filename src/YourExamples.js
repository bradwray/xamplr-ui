import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,

    overflowX: "auto"
  },
  color: {
    main: theme.primary
  },
  panel: {
    backgroundColor: "#eefeee",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular
  },
  button: {
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#05386b",
      color: "#5cdb95"
    }
  },
  table: {
    overflowX: "auto",
    whiteSpace: "normal",
    wordWrap: "break-word"
  }
});

class YourExamples extends React.Component {
  state = {
    expanded: true
  };

  handleChange = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleDelete = () => {
    this.setState({
      expanded: true
    });
  };

  listYourExamples = classes => {
    return (
      <Paper>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
                is = 2 isn't =3
              </TableCell>
              <TableCell>
                <Button
                  mini={true}
                  variant="fab"
                  aria-label="Delete"
                  className={classes.button}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded} className={classes.panel}>
          <ExpansionPanelSummary
            onClick={this.handleChange}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography color="secondary" className={classes.heading}>
              Your examples for {this.props.termName}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.listYourExamples(classes)}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Typography color="secondary">
          Even though you've written some examples already, feel free to write
          some more
        </Typography>
      </div>
    );
  }
}

YourExamples.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(YourExamples);
