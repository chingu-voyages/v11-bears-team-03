import React, { Component, createRef, createContext } from 'react';
import PropTypes from 'prop-types';

import CustomMap from './CustomMap';

export const MapContext = createContext({ map: null, name: '' });

class Map extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  state = {
    map: null,
    error: ''
  };

  googleMap = null;

  map = createRef();

  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.setState({
            map: new CustomMap(this.map.current, 10, {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            })
          });
        },
        (error) => this.setState({ error: error.message })
      );
    }
  }

  render() {
    const { map, error } = this.state;
    const { children } = this.props;
    return (
      <MapContext.Provider value={{ map }}>
        <div className="map" ref={this.map} style={{ height: '100vh' }}>
          {error ? <div>{error}</div> : null}
          {children}
        </div>
      </MapContext.Provider>
    );
  }
}

export default Map;
