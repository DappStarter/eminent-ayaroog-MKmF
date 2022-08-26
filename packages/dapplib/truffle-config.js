require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth magnet club include kiwi supply giant'; 
let testAccounts = [
"0x1059773ad0976f90bb86f75fd0c9209252e6d065abd637e9960865b6d5684cbf",
"0x1ebbb04b1d1570b7c3a649210420f2c8f09d0073bbb91eeb7dcaa1ba7943b311",
"0x5d10c8645fbc2c5344166d2b97a1a1c7975612aeb440e6d7cbdf371f6e5cc055",
"0x8230d67c9ba6d2a53f8bd5a24835f8f16c6667603731f333bb67b765fd51ae98",
"0x17142a29c0a7abd8139bfbf088a29dfe272a304a0f1e9f1b2ad47afa83048f13",
"0x798086540623bf7af7095315c58cc6c60cd0e18663b8566fde21456be0db1583",
"0xf334beec9a63d8203e7f27d5a23724a8f2a7e507579b02d51dd2116e5150799b",
"0x722758bba3c1dad31c37107859f208860116ff21135a4ebb8f19b389d2245066",
"0x6222749c127c468e9af2753d5476df01875cb3ac6c6d4de2e8bf83ceb4d44bb5",
"0xed71411191c0a720d7965ffdce14c9357e12905ae287e74c18080a716ae404ac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

