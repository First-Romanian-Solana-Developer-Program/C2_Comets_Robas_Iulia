import "dotenv/config";

import { airdropIfRequired } from "@solana-developers/helpers";

import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
console.log("Connected to devnet", connection.rpcEndpoint);

const publickKey = new PublicKey(
  "BiH3ZbjcDbRpHFeYh8N92QhDjdAUoxcjgedvaHm6hkRS"
);

const balanceInLamports = await connection.getBalance(publickKey);
console.log("Balance in lamports: ", balanceInLamports);

console.log("Airdropping 1 SOL");
await airdropIfRequired(
  connection,
  publickKey,
  1 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);
console.log("Airdropped 1 SOL");

const balanceAfter = await connection.getBalance(publickKey);
console.log("Balance in lamports after: ", balanceAfter);
