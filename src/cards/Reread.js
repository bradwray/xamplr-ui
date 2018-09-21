import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  message: {
    backgroundColor: "#efefef",
    color: "#05386b",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2
  }
});

const message = {
  example: "9 out of 10 users said this was an example",
  nonexample: "9 out of 10 users said this was a non-example",
  definition: "9 out of 10 users said this was a definition",
  garbage: "9 out of 10 users said this was garbage"
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Reread extends React.Component {
  state = {
    open: false,
    example: "",
    complaint: false
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      open: nextProps.open,
      example: nextProps.example
    });
  };

  handleClose = () => {
    this.props.close();
    this.setState({
      open: false,
      complaint: false
    });
  };

  handleComplaint = () => {
    this.setState({ complaint: true });
  };

  handleUseGimme = () => {
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"This was the previous item"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.state.example.example}
            </DialogContentText>
            <br />
            <Paper className={classes.message} variant="body2" elevation={1}>
              ummmmmmmm yeah
            </Paper>
          </DialogContent>
          <DialogActions>
            <Tooltip
              placement="top"
              TransitionComponent={Zoom}
              disableFocusListener
              title="You have 3 gimmes left for this term"
            >
              {this.state.complaint ? (
                <div>
                  <Button onClick={this.handleUseGimme} color="primary">
                    Use Gimme
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    No thanks
                  </Button>
                </div>
              ) : (
                <div>
                  <Button onClick={this.handleClose} color="primary">
                    Got it
                  </Button>
                  <Button onClick={this.handleComplaint} color="primary">
                    I still think I was right
                  </Button>
                </div>
              )}
            </Tooltip>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(Reread);
