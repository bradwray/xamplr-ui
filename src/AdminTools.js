import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AdminNewTeachers from "./AdminNewTeachers.js";
import AdminNewTerms from "./AdminNewTerms.js";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw"
  }
});

class AdminTools extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="Approve New Terms" />
            <Tab label="Approve New Teachers" />
            <Tab label="User Explorer" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {this.state.value === 0 ? (
            <TabContainer dir={theme.direction}>
              <AdminNewTerms />
            </TabContainer>
          ) : (
            <div />
          )}
          {this.state.value === 1 ? (
            <TabContainer dir={theme.direction}>
              <AdminNewTeachers />
            </TabContainer>
          ) : (
            <div />
          )}
          {this.state.value === 2 ? (
            <TabContainer dir={theme.direction}>User activity</TabContainer>
          ) : (
            <div />
          )}
        </SwipeableViews>
      </div>
    );
  }
}

AdminTools.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AdminTools);

class Thinger extends React.Component {
  state = {
    value: 0
  };

  componentWillMount() {
    console.log("it's on");
  }

  render() {
    return <div>Yipppeeeee</div>;
  }
}
