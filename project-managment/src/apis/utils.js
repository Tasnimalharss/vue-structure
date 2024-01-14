import Api from "./api";

export default {
    async getBolbRequest(endPoint, method='get', payload=null) {
        return await Api()({
            method: method,
            url: endPoint,
            data: payload,
            responseType: 'blob',
            observe: 'response',
            headers: { 'Content-Type': 'application/json' },
          });
    },
    async sendRequest(request){
        try {
            return await request;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}