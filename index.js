console.log("Hello Node.js")

setTimeout(
    () => console.log("see you"),
    2000
)

process.on('SIGINT', handleSignal)
process.on('SIGTERM', handleSignal)

function handleSignal(signal) {
    console.log()
    console.log(`Received signal ${signal}`)
    console.log("bye bye")
    process.exit(0)
}