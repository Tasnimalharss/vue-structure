import Api from "./api";
import utils from "./utils";

const END_POINT = 'Issue';

export default {
    async getIssues() {
        return await utils.sendRequest(Api().get(`${END_POINT}`));
    },
};
