import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "visuals/LoadingScreen/LoadingScreen";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { Center, Flex } from "@chakra-ui/react";
import GameProvider from "providers/GameProvider";

const NotFound = () => <Center>404 Not Found</Center>;

const Routes = () => {
  const HomePage = lazy(() => import("pages/RoomGenerator"));
  const GameRoom = lazy(() => import("pages/GameRoom"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Flex direction="column" minH="100vh" p={4}>
        <Flex justifyContent="flex-end">
          <ColorModeSwitcher />
        </Flex>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <GameProvider>
            <Route path="/game" component={GameRoom} />
          </GameProvider>
          <Route component={NotFound} />
        </Switch>
      </Flex>
    </Suspense>
  );
};

export default Routes;
