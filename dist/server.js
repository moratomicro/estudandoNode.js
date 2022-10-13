"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.get('/', (req, res) => res.send('<h1><u>Hello World!</u></h1>'));
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});