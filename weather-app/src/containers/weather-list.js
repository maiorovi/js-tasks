import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Sparklines, SparklinesLine} from 'react-sparklines'
import Chart from '../components/chart.js'
import GoogleMap from '../components/google_map.js'

class WeatherList extends Component {

    constructor(props) {
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.weatherList.map(this.renderWeather)}
                        <tr>
                            {console.log(this.props.weatherList)}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(it => it.main.temp);
        const pressures = cityData.list.map(it => it.main.pressure);
        const humidities = cityData.list.map(it => it.main.humidity);
        const {lon, lat} = cityData.city.coord;

        console.log(temps);
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="green" unit="K" />
                </td>
                <td>
                    <Chart data={pressures} color="orange" unit="Pa" />
                </td>
                <td>
                    <Chart data={humidities} color="red"  unit="%"/>
                </td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
        weatherList: state.fetchWeather
    };
}

export default connect(mapStateToProps)(WeatherList)
