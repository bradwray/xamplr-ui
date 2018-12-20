import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

let styles = {
  card: {
    minWidth: 275
  },
  about: {
    marginTop: 400,
    marginRight: 0,
    marginLeft: 0
  },
  footer: {
    marginBottom: 0,
    marginTop: "100vh",
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

let lastScrollY = 0;
let ticking = false;

class Home extends React.Component {
  state = {
    y: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.nav.current.style.top = `${lastScrollY}px`;
        ticking = false;
      });

      ticking = true;
    }
  };

  render() {
    console.log(window);
    const { classes } = this.props;

    return (
      <div>
        <nav ref={this.nav} />
        <br />

        <br />
        <br />
        <br />

        <ScrollAnimation
          duration={0.75}
          offset={100}
          className={classes.about}
          key="3"
          animateIn="slideInLeft"
          animateOut="slideOutLeft"
        >
          Other text
        </ScrollAnimation>
        <div className={classes.footer}>hey hey</div>
        <br />
        <br />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
