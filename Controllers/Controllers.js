const fs = require("fs");

// Update the path to the correct relative path
const allPhones = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/phones.json`, "utf-8")
);

const getAllPhones = (req, res) => {
  res.status(200).json({
    status: "success",
    count: allPhones.length,
    data: {
      phones: allPhones,
    },
  });
};

const getPhone = (req, res) => {
  const id = req.params.id * 1;
  const phone = allPhones.find((el) => el.id === id);
  if (!phone) {
    return res.status(404).json({
      status: "fail",
      message: `Invalid ID, Id must be less than ${allPhones.length}`,
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      phone,
    },
  });
};

const createPhone = (req, res) => {
  const newId = allPhones[allPhones.length - 1].id + 1;
  const newPhone = Object.assign({ id: newId }, req.body);
  allPhones.push(newPhone);
  fs.writeFile(
    `${__dirname}/../data/phones.json`,
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
};

const updatePhone = (req, res) => {
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
    `${__dirname}/../data/phones.json`,
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
};

const deletePhone = (req, res) => {
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
    `${__dirname}/../data/phones.json`,
    JSON.stringify(allPhones),
    (err) => {
      res.status(204).json({
        status: "success",
        data: null,
      });
    }
  );
};

module.exports = {
  getAllPhones,
  getPhone,
  createPhone,
  updatePhone,
  deletePhone,
};
