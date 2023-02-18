export default {
  "GET /users": { name: "rhb", age: 100, location: "dalian" },
  "POST /users/login": (req, res) => {
    const { username, password } = req.body;
    let message = username === "rhb" && password === "123456" ? "登陆成功" : "登陆失败"
    res.send({
      ok: message,
    });
  },
};
