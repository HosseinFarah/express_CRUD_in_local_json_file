const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());

const allPhones = JSON.parse(
  fs.readFileSync(`${__dirname}/data/phones.json`, "utf-8")
);

app.get("/api/v1/phones", (req, res) => {
  res.status(200).json({
    status: "success",
    count: allPhones.length,
    data: {
      phones: allPhones,
    },
  });
});

app.get("/api/v1/get-phone/:id", (req, res) => {
  const id = req.params.id * 1;
  const phone = allPhones.find((el) => el.id === id);
  if (!phone) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      phone,
    },
  });
});

app.post("/api/v1/new-phone", (req, res) => {
  const newId = allPhones[allPhones.length - 1].id + 1;
  const newPhone = Object.assign({ id: newId }, req.body);
  allPhones.push(newPhone);
  fs.writeFile(
    `${__dirname}/data/phones.json`,
    JSON.stringify(allPhones),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          phone: newPhone,
        },
      });
    }
  );
});

app.patch("/api/v1/update-phone/:id", (req, res) => {
  const id = req.params.id * 1;
  const phone = allPhones.find((el) => el.id === id);
  if (!phone) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  const updatedPhone = Object.assign(phone, req.body);
  fs.writeFile(
    `${__dirname}/data/phones.json`,
    JSON.stringify(allPhones),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          phone: updatedPhone,
        },
      });
    }
  );
});

app.delete("/api/v1/delete-phone/:id", (req, res) => {
    const id = req.params.id * 1;
    const phone = allPhones.find((el) => el.id === id);
    if (!phone) {
        return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
        });
    }
    const index = allPhones.indexOf(phone);
    allPhones.splice(index, 1);
    fs.writeFile(
        `${__dirname}/data/phones.json`,
        JSON.stringify(allPhones),
        (err) => {
        res.status(204).json({
            status: "success",
            data: null,
        });
        }
    );
    });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
