import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Zoom from "@material-ui/core/Zoom";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Reread extends React.Component {
  state = {
    open: false,
    example: "",
    useGimme: false
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      open: nextProps.open,
      example: nextProps.example
    });
  };

  handleClose = () => {
    this.props.close();
    this.setState({ open: false });
  };

  handleCheckGimme = () => {
    this.setState({ useGimme: !this.state.useGimme });
  };

  render() {
    console.log(this.state);
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
              {this.state.example}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Tooltip
              placement="top"
              TransitionComponent={Zoom}
              disableFocusListener
              title="You have 3 gimmes left for this term"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.useGimme}
                    onChange={this.handleCheckGimme}
                    value="Use Gimme!"
                    color="primary"
                    label="Disabled"
                  />
                }
                label="Use a gimme!"
                color="primary"
              />
            </Tooltip>
            <Button onClick={this.handleClose} color="primary">
              Got it
            </Button>
            <Button onClick={this.handleClose} color="primary">
              I still think I was right
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Reread;
