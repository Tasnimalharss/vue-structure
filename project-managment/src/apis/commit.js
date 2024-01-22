import Api from "./api";
import utils from "./utils";

const END_POINT = 'Commit';

export default {
    async getCommits(object ) {
        return await utils.sendRequest(Api().get(`${END_POINT}?projectId=${object.projectId}&name=${object.branchName}`));
    },
};
