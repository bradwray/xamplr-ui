import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class ToolDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>yes</List>
        <Divider />
        <List>umm</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>what</List>
        <Divider />
        <List>huh?</List>
      </div>
    );

    return <div>{sideList}</div>;
  }
}

ToolDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolDrawer);
