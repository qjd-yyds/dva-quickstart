import { getTopics } from "../services/example";

export default {
  namespace: "indexTest",
  state: {
    name: "qjd",
    cnodeData: [],
  },
  subscriptions: {
    haha({ dispath, history }) {
      history.listen(({pathname}) => {
        console.log(pathname, "pathName");
        if (pathname === "/user") {
          console.log("用户页面");
        }
      });
    },
  },
  reducers: {
    setName(state, payload) {
      return {
        ...state,
        name: payload.data.name,
      };
    },
    setCnodeData(state, payload) {
      return {
        ...state,
        cnodeData: [...state.cnodeData, ...payload.data],
      };
    },
  },
  effects: {
    *setNameSync({ payload }, { put, call }) {
      yield put({
        type: "setName",
        data: {
          name: "超人强",
        },
      });
      yield console.log("run");
    },
    *getCnodeSync({ payload }, { put, call }) {
      const {
        data: { data },
      } = yield call(getTopics, {
        test: "测试的数据",
      });
      yield put({
        type: "setCnodeData",
        data,
      });
    },
  },
};
