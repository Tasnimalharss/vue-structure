import Api from "./api";
import utils from "./utils";

const END_POINT = 'Branch';

export default {
    async getBranches() {
        return await utils.sendRequest(Api().get(`${END_POINT}`));
    },
};
