import Api from "./api";
import utils from "./utils";

const END_POINT = 'Issue';

export default {
    async getIssues() {
        return await utils.sendRequest(Api().get(`${END_POINT}`));
    },
    async getIssuesByProjectId(projectId) {
        return await utils.sendRequest(Api().get(`${END_POINT}/GetIssuesByProjectId?projectId=${projectId}`));
    },
    async GetIssueByIssueId(object) {
        return await utils.sendRequest(Api().get(`${END_POINT}/GetIssueByIssueId?projectId=${object.projectId}&IssueId=${object.issueId}`));
    },
};