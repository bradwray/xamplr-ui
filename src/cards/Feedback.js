import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Reread from "./Reread";

const styles = theme => ({
  close: {
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#05386b",
      color: "#5cdb95"
    }
  },
  incorrect: {
    backgroundColor: "#FF4500"
  },
  correct: {
    backgroundColor: "#5cdb95"
  },
  thanks: {
    backgroundColor: "#c0deed"
  },
  button: {
    "&:hover": {
      transform: "scale(1.1)"
    }
  }
});

class Feedback extends React.Component {
  state = {
    open: false,
    key: 0,
    reread: false
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      open: nextProps.open
    });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  rereadIt = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      open: false,
      reread: true
    });
  };

  closeReread = () => {
    this.setState({
      reread: false
    });
  };

  render() {
    const { classes } = this.props;
    //determine color based on whether it was right or wrong
    //if(right or wrong logic)
    let color = "#F00";
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id">
              {this.props.correct ? "Correct!" : "9 out of 10 users disagree"}
            </span>
          }
          action={[
            <Button
              className={classes.button}
              key="reread"
              size="small"
              onClick={this.rereadIt}
            >
              Re-read it
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        <Reread
          open={this.state.reread}
          close={this.closeReread}
          example={
            this.props.example === undefined ? "" : this.props.example.example
          }
        />
      </div>
    );
  }
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Feedback);
