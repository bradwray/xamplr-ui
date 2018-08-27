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
import Divider from "@material-ui/core/Divider";

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
    backgroundColor: "#eeeeee",
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
  },
  title: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
    fontSize: theme.typography.pxToRem(19)
  },
  votes: {
    fontSize: theme.typography.pxToRem(12)
  },
  divider: {
    marginTop: theme.spacing.unit
  }
});

class YourExamples extends React.Component {
  state = {
    expanded: true,
    yourExamples: [
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
        xamp:
          "yadda yoooo bo bo bo hangdang ba dang a lang a fang wang chang yang",
        non: true,
        exVotes: 0,
        nonVotes: 0,
        garbageVotes: 0,
        defVotes: 0
      }
    ]
  };

  handleChange = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleDelete = key => {
    let yours = this.state.yourExamples;
    yours.splice(key, 1);
    this.setState({
      yourExamples: yours
    });
  };

  listYourExamples = classes => {
    return this.state.yourExamples.map((item, key) => {
      return (
        <div>
          <li>
            <Paper>
              <Table className={classes.table}>
                <TableBody>
                  <Typography className={classes.title}>
                    {!item.non ? <div>Example</div> : <div>Non-Example</div>}
                  </Typography>

                  <TableRow>
                    <TableCell>
                      <Typography>{item.xamp}</Typography>
                      <Divider className={classes.divider} />
                      <div className={classes.votes}>
                        Votes: ex={item.exVotes} non={item.nonVotes} trash/def={item.garbageVotes +
                          item.defVotes}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        mini={true}
                        variant="fab"
                        aria-label="Delete"
                        className={classes.button}
                        onClick={() => this.handleDelete(key)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <Divider />
          </li>
          <br />
        </div>
      );
    });
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
            <ul> {this.listYourExamples(classes)}</ul>
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
