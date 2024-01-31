import Api from "./api";
import utils from "./utils";

const END_POINT = 'Project';

export default {
    async getProjects() {
        return await utils.sendRequest(Api().get(`${END_POINT}`));
    },

    async getProjectById(id) {
        return await utils.sendRequest(Api().get(`${END_POINT}/GetProjectsByprojectId?projectId=${id}`));
    },

    async getAllProjectIssueStatistics() {
        return await utils.sendRequest(Api().get(`${END_POINT}/GetAllProjectIssueStatistics`));
    },
};
