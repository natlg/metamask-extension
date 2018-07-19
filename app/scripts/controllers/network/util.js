const {
  POA_SOKOL,
  ROPSTEN,
  RINKEBY,
  KOVAN,
  MAINNET,
  ROPSTEN_CODE,
  RINKEYBY_CODE,
  KOVAN_CODE,
  POA_SOKOL_CODE,
  ROPSTEN_DISPLAY_NAME,
  RINKEBY_DISPLAY_NAME,
  KOVAN_DISPLAY_NAME,
  MAINNET_DISPLAY_NAME,
  POA_SOKOL_DISPLAY_NAME,
} = require('./enums')

const networkToNameMap = {
  [POA_SOKOL]: POA_SOKOL_DISPLAY_NAME,
  [ROPSTEN]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY]: RINKEBY_DISPLAY_NAME,
  [KOVAN]: KOVAN_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [POA_SOKOL_CODE]: POA_SOKOL_DISPLAY_NAME,
  [ROPSTEN_CODE]: ROPSTEN_DISPLAY_NAME,
  [RINKEYBY_CODE]: RINKEBY_DISPLAY_NAME,
  [KOVAN_CODE]: KOVAN_DISPLAY_NAME,
}

const getNetworkDisplayName = key => networkToNameMap[key]

module.exports = {
  getNetworkDisplayName,
}
