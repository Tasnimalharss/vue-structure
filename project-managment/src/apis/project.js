import Api from "./api";
import utils from "./utils";

const END_POINT = 'Project';

export default {
    async getProjects() {
        return await utils.sendRequest(Api().get(`${END_POINT}`));
    },
};
