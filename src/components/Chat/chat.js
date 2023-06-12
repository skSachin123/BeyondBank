import React, { Component } from "react";

class chat extends Component {
  constructor() {
    //supper();
  }
  render() {
    return (
      <React.Fragment>
        <script src="https://github.com/Cognigy/WebchatWidget/releases/latest/download/webchat.js"></script>

        <script>
          initWebchat(
          "https://endpoint-trial.cognigy.ai/2a7dbd4efa25354aa8b6abb0b637629ee8fcd3aab960523599c5da1e0204f5a5"
          );
        </script>
      </React.Fragment>
    );
  }
}
export default chat;
