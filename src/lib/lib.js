// import _ from 'lodash';
// import eMap from './lib/emap.js';
// import FetchApi from './lib/fetchapi.js';
import { $, $$, $$$ } from './pseudojQuery.js';
import * as policyDialog from './policyDialog.js';

import showClickPosition from './rippleBtn.js';

$$$('.btn').forEach((button) => {
  button.addEventListener('click', showClickPosition);
});

policyDialog.showPolicy();
policyDialog.hidePolicy();
