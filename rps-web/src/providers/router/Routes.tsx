import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "visuals/LoadingScreen/LoadingScreen";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { Box, Center } from "@chakra-ui/react";

const NotFound = () => <Center>404 Not Found</Center>;

const Routes = () => {
  const HomePage = lazy(() => import("pages/RoomGenerator"));
  const GameRoom = lazy(() => import("pages/GameRoom"));
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Box mt={4}>
        <ColorModeSwitcher />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/game" component={GameRoom} />
          <Route component={NotFound} />
        </Switch>
      </Box>
    </Suspense>
  );
};

export default Routes;
