import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import AllRoutes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AllRoutes />
    </ThemeProvider>
  );
};
export default App;
