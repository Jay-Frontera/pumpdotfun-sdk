import {
  MessageV0,
  PublicKey,
  SystemProgram,
  TransactionInstruction,
  TransactionMessage,
} from '@solana/web3.js';

// check documentation for latest tip wallet, and how to send tip transactions
// https://docs.bloxroute.com/solana/trader-api-v2/front-running-protection-and-transaction-bundle
const TRADER_API_TIP_WALLET = "HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY"

// createTraderAPIMemoInstruction generates a transaction instruction that places a memo in the transaction log
// Having a memo instruction with signals Trader-API usage is required
export function bloxrouteTip(
    senderAddress: PublicKey,
    tipAmount: number
): TransactionInstruction {
    const tipAddress = new PublicKey(TRADER_API_TIP_WALLET)

    return SystemProgram.transfer({
        fromPubkey: senderAddress,
        toPubkey: tipAddress,
        lamports: tipAmount,
    })
}

// check documentation for latest tip wallet, and how to send tip transactions
const jitoAccounts = [
    'Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY',
    'DttWaMuVvTiduZRnguLF7jNxTgiMBZ1hyAumKUiL2KRL',
    '96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5',
    '3AVi9Tg9Uo68tJfuvoKvqKNWKkC5wPdSSdeBnizKZ6jT',
    'HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe',
    'ADaUMid9yfUytqMBgopwjb2DTLSokTSzL1zt6iGPaS49',
    'ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt',
    'DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh',
]

export async function jitoProcess(
    senderAddress: PublicKey,
    tipAmount: number,
    lastestBlockhash: any,
    compliedTransaction: MessageV0
): Promise<string> {
    const tipAddress = new PublicKey(TRADER_API_TIP_WALLET)

    const randomJitoAccount = jitoAccounts[Math.floor(Math.random() * jitoAccounts.length)]

    const jitTipTxFeeMessage = new TransactionMessage({
        payerKey: senderAddress,
        recentBlockhash: lastestBlockhash,
        instructions: [
            SystemProgram.transfer({
                fromPubkey: senderAddress,
                toPubkey: this.JitoFeeWallet,
                lamports: tipAmount,
            }),
        ],
    }).compileToV0Message();

    return 'jito process done'
}