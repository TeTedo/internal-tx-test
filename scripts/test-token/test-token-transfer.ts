import { ethers } from "hardhat";

async function main() {
  const [sender, receiver] = await ethers.getSigners();
  const tokenAddress = "0x761C8c730E995e57752b02279A48d583Bfe37570";
  const token = await ethers.getContractAt("TestToken", tokenAddress);

  console.log("Sender address:", sender.address);
  console.log("Receiver address:", receiver.address);
  console.log("Sender balance before:", await token.balanceOf(sender.address));
  console.log(
    "Receiver balance before:",
    await token.balanceOf(receiver.address)
  );

  const transferAmount = ethers.parseEther("100");
  const tx = await token.transfer(receiver.address, transferAmount);
  const receipt = await tx.wait();

  console.log("\nTransfer transaction hash:", receipt?.hash);
  console.log("Sender balance after:", await token.balanceOf(sender.address));
  console.log(
    "Receiver balance after:",
    await token.balanceOf(receiver.address)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
