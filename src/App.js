import React, { Component } from "react";
import "./App.css";
import image from "./Ghanem.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "ghanem gahgouh",
        bio: "MERN stack devoloper, able to create any web application",
        imgSrc: image,
        profession: "fullStack JS",
      },
      shows: true,
      timer: 0,
      intervall: null,
    };
  }

  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        /* this.setState({ timer: this.state.timer + 1 }); */
        this.setState((prev) => {
          return { timer: prev.timer + 1 };
        });
      }, 1000),
    });
  }
  componentWillUnmount = () => {
    console.log("run componentWillUnmount ");
    clearInterval(this.state.intervall);
  };

  render() {
    const handleClick = () => {
      this.setState({ shows: !this.state.shows });
      console.log(this.state.shows);
    };
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            cursor: "pointer",
            margin: 20,
          }}
          onClick={handleClick}
        >
          {this.state.shows === true ? "hide card" : "show card"}
        </Button>
        {this.state.shows === true ? (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={this.state.person.imgSrc}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {this.state.person.fullName}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {this.state.person.profession}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {this.state.person.bio}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        ) : null}
        <div style={{ fontSize: 42, color: "white" }}>{this.state.timer}</div>
      </div>
    );
  }
}
