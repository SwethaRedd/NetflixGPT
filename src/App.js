import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import QRCode from "qrcode.react";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <QRCode
        value="https://swethareddy6.wordpress.com/my-projects/south-indian-cafe/"
        size="256"
        renderAs="canvas"
      />
    </Provider>
  );
}

export default App;
