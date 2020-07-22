import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript.jpg";
import project2 from "../images/javascript-fullstack.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

function Portfolio() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar></Navbar>
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  architecto quo labore, amet, maxime illum exercitationem velit
                  id facere placeat veritatis! Iusto architecto sunt possimus
                  illum aliquam itaque, veniam sapiente.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  architecto quo labore, amet, maxime illum exercitationem velit
                  id facere placeat veritatis! Iusto architecto sunt possimus
                  illum aliquam itaque, veniam sapiente.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  architecto quo labore, amet, maxime illum exercitationem velit
                  id facere placeat veritatis! Iusto architecto sunt possimus
                  illum aliquam itaque, veniam sapiente.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  architecto quo labore, amet, maxime illum exercitationem velit
                  id facere placeat veritatis! Iusto architecto sunt possimus
                  illum aliquam itaque, veniam sapiente.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
