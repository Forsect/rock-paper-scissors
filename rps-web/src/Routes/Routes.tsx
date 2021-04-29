import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "visuals/LoadingScreen/LoadingScreen";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { Center, Flex } from "@chakra-ui/react";

const NotFound = () => <Center>404 Not Found</Center>;

const Routes = () => {
  const HomePage = lazy(() => import("pages/HomePage"));
  const GameRoom = lazy(() => import("pages/GameRoom"));
  const GameProvider = lazy(() => import("providers/GameProvider"));

  return (
    <Flex direction="column" minH="100vh" p={4}>
      <Flex justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            exact
            path="/game/:id"
            component={() => (
              <GameProvider>
                <GameRoom />
              </GameProvider>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Flex>
  );
};

export default Routes;
