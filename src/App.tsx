import { AppRouting } from "routes";
import { GlobalStyle } from "styles/general/global";
import { ThemeProvider } from "styled-components";
import useStore from "./hooks/useStore";
import { observer } from "mobx-react";
import { ThemesList } from "./styles/themes";

const App = observer(() => {
  const { appStore } = useStore();

  return (
    <ThemeProvider theme={ThemesList.find((theme) => theme.name === appStore.theme)!}>
      <GlobalStyle />
      <AppRouting />
    </ThemeProvider>
  );
});

export default App;
