import { mintTo } from "@solana/spl-token";
import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment
} from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const AMOUNT = 9;
const DECIMALS = 6;
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const user = getKeypairFromEnvironment("SECRET_KEY");
const tokenMint = new PublicKey("CE7xaAP5HSjtcqAB1Eb4x2Wi6AcwcFE84CDnd37Fqa25");
const destTokenAccount = new PublicKey(
  "ETpcJSMowwubF9jgLuQ6PKbXdcCELCuK7WinKAu3t7D1"
);
const sig = await mintTo(
  connection,
  user,
  tokenMint,
  destTokenAccount,
  user,
  AMOUNT * 10 ** DECIMALS
);
const link = getExplorerLink("tx", sig, "devnet");

console.log(`Minted ${AMOUNT} tokens: ${link}`);
