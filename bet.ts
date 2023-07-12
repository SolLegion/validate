import { createHash } from 'crypto';
import { logger } from 'firebase-functions/v2';

export function getMultiplier(txhash: string) {
    const betResult = calculateBetResult(txhash);
    const payout = calculatePayout(betResult);
    logger.log(`txhash ${txhash}, betResult ${betResult}, payout ${payout}`);
    return payout;
}

function calculateBetResult(seed: string): number {
    const hash = createHash('sha256').update(seed).digest('hex');
    const number = parseInt(hash.slice(0, 8), 16);
    return number % 10000;
}

function calculatePayout(betResult: number): number {
    let totalChance = 0;
    for (const { payout, chance } of ODDS) {
        totalChance += chance;
        if (betResult < totalChance * 10000) {
            return payout;
        }
    }
    return 0;
}

const ODDS = [
    { payout: 0, chance: 0.3923 },
    { payout: 0.5, chance: 0.21 },
    { payout: 1, chance: 0.2 },
    { payout: 2, chance: 0.15 },
    { payout: 5, chance: 0.03 },
    { payout: 10, chance: 0.015 },
    { payout: 25, chance: 0.002 },
    { payout: 50, chance: 0.0005 },
    { payout: 100, chance: 0.0002 },
];
