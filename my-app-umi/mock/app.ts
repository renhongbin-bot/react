import { defineMock } from "umi";
import mockjs from 'mockjs'

export default defineMock({
  "GET /data": [
    { id: 1, name: "xm" },
    { id: 2, name: "xh" },
  ],
  "POST /api/user/1": { id: 1, name: "xm" },
  "PUT /api/users/1": { id: 1, name: "new-foo" },
  "GET /api/users/2": (req, res) => {
    res.status(200).json({ id: 2, name: "bar" });
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
});
