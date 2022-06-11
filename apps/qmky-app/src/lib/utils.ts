export async function delay(second: number) {
    return new Promise<void>((res) => {
        setTimeout(() => {
            res()
        }, second * 1000)
    })
}