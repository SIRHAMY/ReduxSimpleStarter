import axios from 'axios';

const API_KEY = "e10ef0f508b96a98a95d06c3c1397d37";
//const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

//This is a template string
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {

    const url = `${ROOT_URL}&q=${cityName},us`;
    const request = axios.get(url);

    

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}