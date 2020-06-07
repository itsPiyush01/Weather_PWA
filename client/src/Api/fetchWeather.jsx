import axios from 'axios';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
                        
                        //API KEY PASTE HERE
const API_KEY = "";
export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}