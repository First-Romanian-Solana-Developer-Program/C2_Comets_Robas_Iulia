import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Loaded keypair from environment: ${keypair.publicKey.toBase58()}`);
console.log(`Loaded keypair from environment: ${keypair.secretKey}`);
