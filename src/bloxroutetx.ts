import axios from 'axios';

const helloworld = "YzY1NjliODItZGI2MS00MzgxLTgxODQtNmU0ZWViMjY2OWYxOjIyOWMxMjI5ZmZiNzY0Yjc1NjBiYjVlZjlkYjdmOGRi"

export async function bloxroutetx(transaction) {
    const url = "https://ny.solana.dex.blxrbdn.com/api/v2/submit"
    const headers = {
        "Authorization": `${helloworld}`
    }

    const body = {
        transaction: {
            content: transaction,
            isCleanup: false
        },
        skipPreFlight: true,
        frontRunningProtection: false,
        useStakedRPCs: true
    }

    const { data: { signature } } = await axios.post(url, body, { headers })

    return signature
}
