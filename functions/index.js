const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KS8MqBHTrojWuNY9ifHHf0aCsC15WjIUGPWUPa6wel3nfIxI3vqLyukwhDeELw69pm6yVrjsGISz2NkOIW2UVKv008hONB3cY"
);

//Setting up an API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Request Received for >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example api endpoint is http://localhost:5001/clone-a50ec/us-central1/api
