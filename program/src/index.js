import 'babel-polyfill';
import dva from 'dva';
import { hashHistory } from 'dva/router';
import 'moment/locale/zh-cn';
import FastClick from 'fastclick';
import './g2';
import './rollbar';
import onError from './error';
import './index.less';
// 1. Initialize
const app = dva({
  history: hashHistory,
  onError,
});

// 2. Plugins
// app.use({});

// 3. Register global model
app.model(require('./models/user'));
app.model(require('./models/global'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
FastClick.attach(document.body);
