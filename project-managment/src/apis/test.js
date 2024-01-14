import Api from "./api";
import utils from "./utils";

const END_POINT = 'WeatherForecast';

export default {
    async getWeatherList() {
        return await utils.sendRequest(Api().get(`${END_POINT}`));
    },
};