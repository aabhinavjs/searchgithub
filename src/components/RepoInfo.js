import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
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
  paper: {
    padding: theme.spacing(2),
    textAlign: '-webkit-center',
		color: theme.palette.text.secondary,
		background: "#31c0a1"
	},
	buttonRoot:{
			"&:hover": {
				backgroundColor: 'rgb(7, 177, 77, 0.42)'
			}
	}
}));

export default function RepoInfo({repoName,repoDescription,knowMoreHandler}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Card className={`${classes.root} `}>
            <CardContent>
							<Typography className={classes.title} color="textSecondary" gutterBottom>
								{bull}Repo Name
							</Typography>
							<Typography variant="h5" component="h2">
								{repoName}
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								{bull}Description
							</Typography>
							<Typography variant="body2" component="p">
								{repoDescription}
							</Typography>
            </CardContent>
            <CardActions>
                <Button classes={{root:classes.buttonRoot}}size="small" onClick={knowMoreHandler}>Learn More</Button>
            </CardActions>
        </Card>
        </Paper>
    </Grid>
    
  );
}
