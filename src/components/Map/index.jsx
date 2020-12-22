import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import { Container } from "./styles";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Map
          google={this.props.google}
          zoom={18}
          disableDefaultUI={true}
          initialCenter={{ lat: -30.0144973, lng: -50.1467123 }}
          containerStyle={{ position: 'relative', width: "100%", height: "100%" }}
          style={{
            width: "95%",
            height: "400px",
            margin: "0 auto",
          }}

        />
      </Container>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: process.env.tokenGoogleMaps,
}))(MapContainer);
