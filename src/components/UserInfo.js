import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import gitImage from "../assets/images/gitImage.png";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
      media: {
        height: "300px",
      },
      gridRoot: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: '-webkit-center',
				color: theme.palette.text.secondary,
				// background: "#f59c1a",
				backgroundImage:`url(${gitImage})`,
				backgroundPosition:"center",
				backgroundRepeat:"no-repeat",
				backgroundSize:"cover"
      }
  }));

export default function UserInfo({userName,ImageUrl}) {
  const classes = useStyles();

  return (
		<div >
    <Grid container spacing={3}>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
					<Card className={classes.root}>
						<CardActionArea>
								<CardMedia
										className={classes.media}
										image={ImageUrl}
										title="Contemplative Reptile"
								/>
								<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
										{userName}
								</Typography>
								</CardContent>
							</CardActionArea>
            </Card>
					</Paper>
        </Grid>
    </Grid>
		</div>
  );
}
