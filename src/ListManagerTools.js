import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FindLists from "./FindLists";

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

class ListManagerTools extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  importAndSwitch = list => {
    this.setState({
      value: 1,
      listImport: list
    });
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
            <Tab label="Find Lists" />
            <Tab label="Make/Edit Lists" />
            <Tab label="" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {this.state.value === 0 ? (
            <TabContainer dir={theme.direction}>
              <FindLists importAndSwitch={this.importAndSwitch} />
            </TabContainer>
          ) : (
            <div />
          )}
          {this.state.value === 1 ? (
            <TabContainer dir={theme.direction}>
              <Thinger listImport={this.state.listImport} />
            </TabContainer>
          ) : (
            <div />
          )}
          {this.state.value === 2 ? (
            <TabContainer dir={theme.direction}>
              Add Term to database
            </TabContainer>
          ) : (
            <div />
          )}
        </SwipeableViews>
      </div>
    );
  }
}

ListManagerTools.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ListManagerTools);

class Thinger extends React.Component {
  state = {
    value: 0
  };

  componentWillMount() {
    console.log("it's on");
  }

  render() {
    return <div>{this.props.listImport}</div>;
  }
}
