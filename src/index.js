import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./components/theme";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

/*
TOP
Header

LEFT
AddSong
SongList
  Song

RIGHT
SongPlayer
  QueuedSongList

*/
