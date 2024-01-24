import Api from "./api";
import utils from "./utils";

const END_POINT = 'Branch';

export default {
    async getBranches() {
        return await utils.sendRequest(Api().get(`${END_POINT}`));
    },
    async getBrancheByProjectId(id) {
        return await utils.sendRequest(Api().get(`${END_POINT}/GetBrancheByProjectId?projectID=${id}`));
    },
    async getBranchByName(object) {
        return await utils.sendRequest(Api().get(`${END_POINT}/GetBranchByBranchName?projectId=${object.projectId}&BranchName=${object.brancName}`));
    },
};