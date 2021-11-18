require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin forest furnace sheriff'; 
let testAccounts = [
"0x4373f12e37341459a300fbfb3818de3a57f0236348b683a8e9d2776ddb0c8602",
"0x6e3be6050007e8c85fe14d793ab223a4380e839595ad05526dfefd55416f3790",
"0xb75ceaa0a7ec5d5adadcbdf56e69be96924dad8a98f6e130c0f93d7e443ed7cc",
"0x5897ed5b066383e7e43885f106f22db7d39bda7c18a00bb8635554a170f2dd71",
"0x366cc3de34a48773906aebb3ac3791e514f12d3f2a3adf3149f40954b4d79ded",
"0xc05dc1ea5e8f045054daf1d893968b44497cf34816ad9dd3db9a35c0b72807f1",
"0x0cd1a73210ebfe2b4d5a1ee2429f3a3e2f819f3f9e9fa63d462b943aa8033895",
"0x70a64c9e5f8ecc1ed1061cf6706147edce3c68ec05273145015e3b1ea06ecd71",
"0x8186bce0139820572996efa31e01b6bbcfb0df2e132e8bbd03c971f302e09ff9",
"0x420808e7c12636c51a0fcd28b3e27262760eb433e7ea6e89819fe9ec6e9a3bf9"
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

