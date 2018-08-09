import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import VocabList from "./VocabList.js";
import ClassroomLists from "./ClassroomLists.js";

const styles = {
  list: {
    width: 300
  },
  panel: {},
  fullList: {
    width: "auto"
  }
};

class ToolDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.list}>
        <ClassroomLists />
      </div>
    );
  }
}

ToolDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolDrawer);
