import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/Toc";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CheckBoxBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckedOff from "@material-ui/icons/CheckBox";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff"
  },
  good: {
    color: "#5cdb95"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class VocabList extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="CH 7 Cognition" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                {false ? <CheckedOff /> : <CheckBoxBlank />}
              </ListItemIcon>
              <ListItemText inset primary="Functional Fixedness" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                {true ? (
                  <CheckedOff className={classes.good} />
                ) : (
                  <CheckBoxBlank />
                )}
              </ListItemIcon>
              <ListItemText inset primary="Heuristics" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <CheckBoxBlank />
              </ListItemIcon>
              <ListItemText inset primary="Availability Bias" />
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  }
}

VocabList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VocabList);
