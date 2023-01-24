import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import {
  ChakraProvider,
  ErrorComponent,
  Layout,
  Box,
  IconButton,
  refineTheme,
  ReadyPage,
  Icon,
  notificationProvider,
  useColorMode,
  extendTheme,
} from "@pankod/refine-chakra-ui";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";
import { IconSun, IconMoonStars } from "@tabler/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      py="2"
      px="4"
      display="flex"
      justifyContent="flex-end"
      w="full"
      bg="chakra-body-bg"
    >
      <IconButton
        variant="ghost"
        aria-label="Toggle theme"
        onClick={toggleColorMode}
      >
        <Icon
          as={colorMode === "light" ? IconMoonStars : IconSun}
          w="18px"
          h="18px"
        />
      </IconButton>
    </Box>
  );
};

const App = () => {

  const customTheme = extendTheme({
    ...refineTheme,
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Refine
        notificationProvider={notificationProvider()}
        routerProvider={routerProvider}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        Layout={Layout}
        Header={Header}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        resources={[
          {
            name: "",

          },
        ]}
      />
    </ChakraProvider>
  );
};

export default App;