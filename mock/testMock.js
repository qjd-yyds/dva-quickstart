module.exports = {
  "GET /api/mockData": (req, res) => {
    console.log(req, "=====>req");
    res.send({
      msg: "我是mock数据",
    });
  },
};
