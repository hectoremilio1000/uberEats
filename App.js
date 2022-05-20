import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation";

import { Amplify, Analytics } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure({ ...config, Analytics: { disabled: true } });
import AuthContextProvider from "./src/contexts/AuthContext";
import BasketContextProvider from "./src/contexts/BasketContext";
import OrderContextProvider from "./src/contexts/OrderContext";

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <OrderContextProvider>
            <RootNavigator />
          </OrderContextProvider>
        </BasketContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
