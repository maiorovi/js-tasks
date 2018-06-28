import React, {Component} from 'react';

export  default class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom : 12,
            center: {
                lat: this.props.lon,
                lng: this.props.lat
            }
        })
    }

    render() {
        return <div ref="map" />
    }

}