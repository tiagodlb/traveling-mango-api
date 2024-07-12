import express, { Request, Response, NextFunction } from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res, next) => {
  try {
    return res.send({ message: "Hello" })
  } catch (error) {
    return next(error)
  }
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === "development") {
    console.error(err)
  }
  res.status(500).send({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  })
})

app.listen(PORT, () => {
  /* First argument is just color, second is the message */
  console.log("\x1b[32m", `Server is listening on port ${PORT}`)
})
