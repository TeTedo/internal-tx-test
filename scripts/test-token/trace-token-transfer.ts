import { ethers } from "hardhat";

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  const txHash =
    "0x6921bbbc95796586c219d447876c917d5a2000cf436db5e3316b0c9ef49d5651";

  const trace = await provider.send("debug_traceTransaction", [txHash, {}]);

  console.log("=== token transfer transaction trace ===");
  console.log(JSON.stringify(trace, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
