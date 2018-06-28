import { combineReducers } from 'redux';
import FetchWeather from './fetch_weather_reducer.js';

const rootReducer = combineReducers({
    fetchWeather: FetchWeather
});

export default rootReducer;
