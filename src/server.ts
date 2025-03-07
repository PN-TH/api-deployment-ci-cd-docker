import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import dotenv from "dotenv";
import { schema } from "./graphql/index";

dotenv.config();

const app = express();
app.use(cors());



app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use("/", (req, res) => {
  res.send("Bonjour !");
});
app.listen(process.env.PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}/graphql`);
});

export default app;