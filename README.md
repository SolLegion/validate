# validate
### Steps to validate your transaction from SolLegion Lootboxes and prove it is fair

[SolLegion Lootboxes](https://sollegion.io/) website allows you to open one of six lootboxes for potential rewards.
The code to generate this result executes on your browser and also on the system's server.
The code is identical in both frontend and backend and is available for you to see here. The only difference is that one is written in JavaScript and the other in TypeScript.

You can also generate the same result, to verify and prove that you won or lost as per the same result provided to you.

Find your transaction, this is usually something like `2TEMFzBSHGv9XE3bZDSb6fMEd7T7qCDXTPpgdT3wxrwdP5bViYVDJdsViLS1VhU8tQoRCmH6CtCm6mTqAw2MRh4X` and should be shown in your wallet and any Solana explorer. For example, [this is a sample transaction in devnet on Solana](https://explorer.solana.com/tx/2TEMFzBSHGv9XE3bZDSb6fMEd7T7qCDXTPpgdT3wxrwdP5bViYVDJdsViLS1VhU8tQoRCmH6CtCm6mTqAw2MRh4X?cluster=devnet).

Then, create your own version of the script using the source code above, and use the `getMultiplier` function with your transaction hash, or use our [JSFiddle](https://jsfiddle.net/daq7Lt0w/2/).
