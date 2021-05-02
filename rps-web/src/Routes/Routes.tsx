import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "visuals/LoadingScreen/LoadingScreen";
import { Center } from "@chakra-ui/react";

const NotFound = () => <Center>404 Not Found</Center>;

const Routes = () => {
  const HomePage = lazy(() => import("pages/HomePage"));
  const GameRoom = lazy(() => import("pages/GameRoom"));
  const GameProvider = lazy(() => import("providers/GameProvider"));

  return (
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
  );
};

export default Routes;
