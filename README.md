```bash
npm i -g ganache-cli
ganache-cli --chainId 1337
```

### 1. Test Token Internal Transaction

#### (1) deploy test token

```bash
npx hardhat run scripts/test-token/deploy-token.ts --network ganache
```

```bash
TestToken deployed to: 0x7Fb61F5E434640d3cA9dC2b233F50b36f3261AE4
```

copy the contract address and paste in scripts/test-token/test-token-transfer.ts

token address : [] in line 5

#### (2) send transfer transaction

```bash
npx hardhat run scripts/test-token/test-token-transfer.ts --network ganache
```

```bash
Sender address: 0x709a4AD295bE1F4CA7570c6f6710679e265Fe524
Receiver address: 0xcB1572d61E25217c2291e0037f5db5f483416682
Sender balance before: 1000000000000000000000000n
Receiver balance before: 0n

Transfer transaction hash: 0x4d0c385202f8c927b5dfcb4524c27b4f68de4fccdb20c4753e2e893b68c506fe
Sender balance after: 999900000000000000000000n
Receiver balance after: 100000000000000000000n
```
