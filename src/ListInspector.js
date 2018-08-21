import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

function ListInspector(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" component="h2">
          {props.listName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          created by: B. Wray
        </Typography>
        <Typography
          className={classes.pos}
          variant="subheading"
          color="primary"
        >
          terms
        </Typography>
        <Typography>
          Functional Fixedness, Algorithms, Heuristics, Divergent Thinking,
          Chunking
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.importList}>
          Import & Customize List
        </Button>
      </CardActions>
    </Card>
  );
}

ListInspector.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListInspector);
