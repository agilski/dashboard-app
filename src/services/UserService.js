import axios from "axios";

const url = "https://randomuser.me/api/";

export default {
  getList: async function (params) {
    try {
      const response = await axios.get(setUrl(params));
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

function setUrl(params) {
  let page = "?page=" + params.page;
  let pageSize = params.pageSize ? "&pageSize=" + params.pageSize : "";
  let keyword = params.keyword ? "&keyword=" + params.keyword : "";
  let gender = params.gender ? "&gender=" + params.gender : "";
  let sortBy = params.sortBy ? "&sortBy=" + params.sortBy : "";
  let sortOrder = params.sortOrder ? "&sortOrder=" + params.sortOrder : "";
  let results = "&results=5";
  let newUrl =
    url + page + pageSize + keyword + gender + sortBy + sortOrder + results;

  return newUrl;
}
