export async function getMultiplier(txhash) {
  const betResult = await calculateBetResult(txhash)
  const payout = calculatePayout(betResult)
  window.Bugfender.log(`txhash ${txhash}, betResult ${betResult}, payout ${payout}`)
  return payout
}

async function calculateBetResult(seed) {
  const hash = await sha256(seed)
  const number = parseInt(hash.slice(0, 8), 16)
  return number % 10000
}

function calculatePayout(betResult) {
  let totalChance = 0
  for (const { payout, chance } of ODDS) {
    totalChance += chance
    if (betResult < totalChance * 10000) {
      return payout
    }
  }
  return 0
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
]

async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message)

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer))

  // convert bytes to hex string
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
