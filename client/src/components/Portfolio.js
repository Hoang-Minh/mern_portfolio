import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import Project from "./Project";
import projects from "../Data/portfolio";

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
        {projects.map((project, key) => (
          <Project
            key={key}
            alt={project.alt}
            image={project.image}
            title={project.title}
            link={project.link}
            code={project.code}
            content={project.content}
          ></Project>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;
