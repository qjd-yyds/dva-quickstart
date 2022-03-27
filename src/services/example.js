import request from "../utils/request";
const preUrl = "/apis";
export function query() {
  return request("/api/users");
}

export function getTopics(data) {
  return request(preUrl + "/api/v1/topics");
}

export function getMock() {
  return request("/api/mockData");
}
