import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import Project from "./Project";
import movieApp from "../images/movieApp.png";
import emailMe from "../images/emailMe.png";
import covid19 from "../images/covid19.png";
import chatApp from "../images/chatApp.png";
import adviceApp from "../images/adviceApp.png";
import weatherApp from "../images/weatherApp.png";
import youtubeApp from "../images/youtubeApp.png";

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
        <Project
          alt="Movie App"
          image={movieApp}
          title="Movie App"
          link="https://agile-forest-75094.herokuapp.com/"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto quo labore, amet, maxime illum exercitationem velit
          id facere placeat veritatis! Iusto architecto sunt possimus
          illum aliquam itaque, veniam sapiente."
        ></Project>
        <Project
          alt="Survey Email App"
          image={emailMe}
          title="Survey App"
          link="https://cryptic-sea-54086.herokuapp.com/"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto quo labore, amet, maxime illum exercitationem velit
          id facere placeat veritatis! Iusto architecto sunt possimus
          illum aliquam itaque, veniam sapiente."
        ></Project>

        <Project
          alt="Covid 19 Stats"
          image={covid19}
          title="Covid 19 Stats"
          link="https://nameless-taiga-47211.herokuapp.com/"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto quo labore, amet, maxime illum exercitationem velit
          id facere placeat veritatis! Iusto architecto sunt possimus
          illum aliquam itaque, veniam sapiente."
        ></Project>

        <Project
          alt="Chat App"
          image={chatApp}
          title="Chat App"
          link="https://nameless-taiga-47211.herokuapp.com/"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto quo labore, amet, maxime illum exercitationem velit
          id facere placeat veritatis! Iusto architecto sunt possimus
          illum aliquam itaque, veniam sapiente."
        ></Project>

        <Project
          alt="Simple Advice App"
          image={adviceApp}
          title="Simple Advice App"
          link="https://hopeful-benz-d6952b.netlify.app/"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto quo labore, amet, maxime illum exercitationem velit
          id facere placeat veritatis! Iusto architecto sunt possimus
          illum aliquam itaque, veniam sapiente."
        ></Project>

        <Project
          alt="PWA Weather App"
          image={weatherApp}
          title="PWA Weather App"
          link="https://quizzical-galileo-95cd9d.netlify.app/"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto quo labore, amet, maxime illum exercitationem velit
          id facere placeat veritatis! Iusto architecto sunt possimus
          illum aliquam itaque, veniam sapiente."
        ></Project>

        <Project
          alt="Simple Youtube Cloner"
          image={youtubeApp}
          title="Simple Youtube Cloner"
          link="https://unruffled-gates-5c1209.netlify.app/"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto quo labore, amet, maxime illum exercitationem velit
          id facere placeat veritatis! Iusto architecto sunt possimus
          illum aliquam itaque, veniam sapiente."
        ></Project>
      </Grid>
    </Box>
  );
}

export default Portfolio;
