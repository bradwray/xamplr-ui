import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import XampSwipe from "./cards/XampSwipe";

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

class Evaluate extends React.Component {
  state = {
    open: false,
    exampleCards: [
      "Functional fixedness is shown when you think a hammer can only be used on nails.",
      "You have functional fixedness so you refuse to watch any other tv show except Riverdale.",
      "This is an example of functional fixedness hahah",
      "Limiting a familiar object to its traditional function and being closed off to other, new functions.",
      "Lily displayed functional fixedness when she failed to realize that she could have used a stapler as a paperweight.",
      "Functional Fixedness helped Sophie realize that she didn't have to cuss the guy out, who just cut her off while driving to the store to get ice pops for yoga class."
    ]
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ open: nextProps.open });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        You are about to see a stack of 15 examples on cards. Swipe a card to
        the right if you think it is a real example, swipe to the left if you
        think it is not a real example, swipe it up if it is a definition and
        swipe down if you think it is not worthy of being on the site.
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
                Evaulate these examples
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                back
              </Button>
            </Toolbar>
          </AppBar>
          <XampSwipe data={this.state.exampleCards} />
        </Dialog>
      </div>
    );
  }
}

Evaluate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Evaluate);
