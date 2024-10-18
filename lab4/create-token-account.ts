import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(`User account loaded: ${user.publicKey.toBase58()}`);

const tokenMint = new PublicKey("CE7xaAP5HSjtcqAB1Eb4x2Wi6AcwcFE84CDnd37Fqa25");
const destPubKey = new PublicKey(
  "FgRv34GopxDVsu7rhgqK2jsmfP7yQ3HEyohSMgyVrGWL"
);
const destTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  user,
  tokenMint,
  user.publicKey
);

console.log("Token account created: ", destTokenAccount.address.toBase58());
