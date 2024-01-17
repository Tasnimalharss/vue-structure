import Api from "./api";
import utils from "./utils";

const END_POINT = 'Commit';

export default {
    async getCommits() {
        return await utils.sendRequest(Api().get(`${END_POINT}`));
    },
};
