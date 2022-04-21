import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation";

import { Amplify, Analytics } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
