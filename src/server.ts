import app from "./app.js"

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("\x1b[32m", `Server is listening on port ${PORT}`)
})
