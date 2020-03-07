import { createMuiTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: teal,
    secondary: {
      main: '#fff59d'
    }
  }
});

export default theme;
