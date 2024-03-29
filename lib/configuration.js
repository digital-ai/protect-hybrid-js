const path = require('path');
const os = require('os');

let ADP_SERVER = 'developer.arxan.com';
if (process.env.PROTECT_LICENSE_REGION === 'Europe') {
  ADP_SERVER = ADP_SERVER.replace('.com', '.eu');
}
const API = `https://api.${ADP_SERVER}/`;
const API_SERVICES = `${API}services/`;
const SUPPORT_EMAIL = 'support@digital.ai';

let binaryName = 'protect-hybrid-js';
if (os.platform() === 'win32') {
  binaryName += '.exe';
}

const platformMapping = {
  darwin: 'mac',
  win32: 'windows',
  linux: 'linux',
};
const platform = platformMapping[os.platform()];

module.exports = {
  product: 'ArxanForHybrid',
  installLocation: path.join(__dirname, '../', 'installs'),
  binaryLocation: path.join(__dirname, '../', `installs/bin/${binaryName}`),
  platform,
  ADP_SERVER,
  API,
  API_SERVICES,
  SUPPORT_EMAIL,
  apiKey: process.env.PROTECT_API_KEY,
  apiSecret: process.env.PROTECT_API_SECRET,
};
