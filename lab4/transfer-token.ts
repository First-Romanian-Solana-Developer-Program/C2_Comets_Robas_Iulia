import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const AMOUNT = 9;
const DECIMALS = 6;

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(`User account loaded: ${user.publicKey.toBase58()}`);

const sourceTokenAccount = new PublicKey(
  "ETpcJSMowwubF9jgLuQ6PKbXdcCELCuK7WinKAu3t7D1"
);
const tokenMint = new PublicKey("BRU4pACAGjxGFzGftRKNpunypHtkGhwZisiQHEkqb1DW");
const destPubKey = new PublicKey(
  "4m6TxM4nLqvmUBbC9M73gNWqMgPYY65kzhX9Pb6WLYzy"
);

const destTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  user,
  tokenMint,
  destPubKey
);

console.log("Token account created: ", destTokenAccount.address.toBase58());

const signature = await transfer(
  connection,
  user,
  sourceTokenAccount,
  destTokenAccount.address,
  user,
  AMOUNT * 10 ** DECIMALS
);

console.log("Token transfered: ", signature);
