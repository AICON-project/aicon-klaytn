# aicon contract based klaytn

This repository contains contracts that are helpful to building blockchain applications on Klaytn.

Some files were derived from [openzeppelin contracts v2.3.0](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v2.3.0).

## Deploying a contract to Baobab

### Using an EN

Update `privateKey` and `EN URL` in `baobab` of [truffle-config.js](./truffle-config.js).

```js
    baobab: {
      provider: () => {
        return new HDWalletProvider(privateKey, "https://your.baobab.en:8651");
      },
      network_id: '1001', //Klaytn baobab testnet's network id
      gas: '8500000',
      gasPrice: null
    },
```

### Using KAS

Also, you can use [KAS](http://www.klaytnapi.com) instead of your own EN. Please refer to `kasBaobab` as shown below.
In this case, you need to update `privateKey`, `accessKeyId`, and `secretAccessKey`.

**NOTE**: As of Feb 2021, "Using KAS" is not supported yet.

```js
const accessKeyId = "ACCESS_KEY";
const secretAccessKey = "SECRET_KEY";

...

    kasBaobab: {
      provider: () => {
        option.headers['x-chain-id'] = '1001';
        return new HDWalletProvider(privateKey, new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option))
      },
      network_id: '1001', //Klaytn baobab testnet's network id
      gas: '8500000',
      gasPrice:'25000000000'
    },
```

## Deploying a contract to Cypress

### Using an EN
Update `privateKey` and `EN URL` in `baobab` of [truffle-config.js](./truffle-config.js).

```js
    cypress: {
      provider: () => new HDWalletProvider(privateKey, "https://your.cypress.en:8651"),
      network_id: '8217', //Klaytn mainnet's network id
      gas: '8500000',
      gasPrice: null
    }
```

### Using KAS

Also, you can use [KAS](http://www.klaytnapi.com) instead of your own EN. Please refer to `kasBaobab` as shown below.
In this case, you need to update `privateKey`, `accessKeyId`, and `secretAccessKey`.

**NOTE**: As of Feb 2021, "Using KAS" is not supported yet.

```js
const accessKeyId = "ACCESS_KEY";
const secretAccessKey = "SECRET_KEY";

...

    kasCypress: {
      provider: () => {
        option.headers['x-chain-id'] = '8217';
        return new HDWalletProvider(privateKey, new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option))
      },
      network_id: '8217', //Klaytn baobab testnet's network id
      gas: '8500000',
      gasPrice:'25000000000'
    },
```
