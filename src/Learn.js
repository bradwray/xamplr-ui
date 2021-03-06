import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LearnExampleSwiper from "./LearnExampleSwiper.js";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function Learn(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {props.term.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.term.pos}
          </Typography>
          <Typography component="p">
            {props.term.stockDefinitions[0]}
            <br />
            <br />
            <LearnExampleSwiper exes={props.term.stockExamples} />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Learn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Learn);
