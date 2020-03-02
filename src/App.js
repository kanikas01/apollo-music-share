import React from "react";
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid, useMediaQuery, Hidden } from "@material-ui/core";
import songReducer from "./reducer";

export const SongContext = React.createContext({
  song: {
    id: "f21bcf5d-4a45-4d10-affb-24eee1682c30",
    title: "Carried From The Start",
    artist: "Black Rebel Motorcycle Club",
    thumbnail: "http://img.youtube.com/vi/yrcejc-xnBA/0.jpg",
    url: "https://www.youtube.com/watch?v=yrcejc-xnBA",
    duration: 367
  },
  isPlaying: false
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(songReducer, initialSongState);
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up("md"));
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: greaterThanSm ? 80 : 10
          }}
          item
          xs={12}
          md={7}
        >
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  right: 0,
                  top: 70
                }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
