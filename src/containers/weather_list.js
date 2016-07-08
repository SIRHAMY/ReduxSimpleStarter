import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps.js'

class WeatherList extends Component {

    renderWeather(cityData) {

        //Put all the temp data in temps
        //Weather is the arg inside the list
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const longitude = cityData.city.coord.lon;
        const latitude = cityData.city.coord.lat;
        //const {lon, lat} = cityData.city.coord; //Names must be identical

        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={longitude} lat={latitude}  /></td>
                <td>
                    <Chart data={temps} color="orange" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" />
                </td>
            </tr>
        )
    }
 
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                      <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                
                </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody> 
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
    //Weather because that's what we assigned as the app state thing
}

export default connect(mapStateToProps)(WeatherList);