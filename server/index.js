const express = require("express");
const stripe = require("stripe")("sk_test_51KE9D2Assk6U42WqZStgv4MN86zE6UazMYFEhZImSuSd9R9SdmxGxEozo1hvTu5JKKKrGCcxDlQSHBSCMHo3Es4Q00glSJlPDU")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/payment", cors(), async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "eur",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})

