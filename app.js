const express = require("express");
const Controller = require("./Controllers/Controllers");

const app = express();
app.use(express.json());

app.route("/api/v1/phones").get(Controller.getAllPhones);
app.route("/api/v1/new-phone").post(Controller.createPhone);
app.route("/api/v1/get-phone/:id").get(Controller.getPhone);
app.route("/api/v1/update-phone/:id").patch(Controller.updatePhone);
app.route("/api/v1/delete-phone/:id").delete(Controller.deletePhone);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
