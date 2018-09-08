import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import VocabList from "./VocabList.js";
import Classroom from "./Classroom.js";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import Button from "@material-ui/core/Button";
import ListManager from "./ListManager.js";
import JoinAClass from "./JoinAClass.js";

const styles = theme => ({
  list: {
    width: 300,
    backgroundColor: "#eee"
  },
  fullList: {
    width: "auto"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#5cdb95",
    color: "#05386b",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#05386b",
      color: "#5cdb95"
    }
  }
});

class ListDrawer extends React.Component {
  state = {
    listManagerOpen: false,
    JoinClassOpen: false,
    isStudent: true,
    classrooms: [
      {
        teacher: "Mr. Wray",
        classroomName: "Psych",
        lists: [
          {
            listName: "Cognition",
            currentlyAssigned: true,
            items: [
              {
                termName: "Functional Fixedness",
                termIndex: 66,
                done: true
              },
              {
                termName: "Hindsight Bias",
                termIndex: 16,
                done: false
              },
              {
                termName: "Algorithms",
                termIndex: 45,
                done: false
              }
            ]
          },
          {
            listName: "Memory",
            currentlyAssigned: false,
            items: [
              {
                termName: "Chunking",
                termIndex: 66,
                done: true
              },
              {
                termName: "Suggestibility",
                termIndex: 16,
                done: false
              },
              {
                termName: "Spacing",
                termIndex: 22,
                done: false
              }
            ]
          }
        ]
      }
    ]
  };

  handleListManager = () => {
    this.setState({
      listManagerOpen: !this.state.listManagerOpen
    });
  };
  handleJoinClass = () => {
    this.setState({
      JoinClassOpen: !this.state.JoinClassOpen
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.list}>
        {this.state.isStudent ? (
          <div>
            <ListSubheader component="div">
              Lists From Your Classes
            </ListSubheader>
            {this.state.classrooms.map(classroom => {
              return <Classroom classroom={classroom} />;
            })}
          </div>
        ) : (
          <div />
        )}
        <ListSubheader component="div">Your Own Lists</ListSubheader>
        <Divider />
        <ul>
          <li>
            <VocabList />
          </li>
          <br />
          <Button
            color="primary"
            className={classes.button}
            onClick={this.handleListManager}
          >
            Find/Make Lists
          </Button>
          <Button
            color="primary"
            className={classes.button}
            onClick={this.handleJoinClass}
          >
            Join a Classroom
          </Button>
        </ul>
        <ListManager
          open={this.state.listManagerOpen}
          close={this.handleListManager}
        />
        <JoinAClass
          open={this.state.JoinClassOpen}
          close={this.handleJoinClass}
        />
      </div>
    );
  }
}

ListDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListDrawer);
