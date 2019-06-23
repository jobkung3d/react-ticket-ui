import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedSelects from '../common/select';

const useStyles = makeStyles(
    createStyles({
      card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    }),
  );
  
  export default function Sidebar() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
             All Filters
          </Typography>
          <Typography variant="h5" component="h2">
            <CustomizedSelects/>
            <CustomizedSelects/>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained" color="primary" className={classes.button}>
                 Submit
            </Button>
        </CardActions>
      </Card>
    );
  }