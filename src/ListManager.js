import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import ListTools from "./ListTools";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ListManager extends React.Component {
  state = {
    open: false
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ open: nextProps.open });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.close();
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                List Manager
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Save
              </Button>
            </Toolbar>
          </AppBar>
          <ListTools />
        </Dialog>
      </div>
    );
  }
}

ListManager.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListManager);
