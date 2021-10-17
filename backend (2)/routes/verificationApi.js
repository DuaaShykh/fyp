const express = require('express');
const router = express.Router();
var db = require('../db');
const vaccineContract = require('../vaccineContract');
var bodyParser = require('body-parser');
var cors = require('cors');
router.use(bodyParser.json());
router.use(cors());
router.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

router.delete('/delete/:vn_id', function (req, res, next) {
  let vn_id = req.params.vn_id;

  if (!vn_id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }
  db.query(
    'DELETE FROM verification WHERE vn_id = ?',
    [vn_id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: 'User Data has been deleted',
      });
    },
  );
});

router.get('/', function (req, res, next) {
  var sql = 'SELECT * FROM verification';
  db.query(sql, function (err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' });
    }
    res.json(rows);
  });
});

router.post('/', function (req, res) {
  // let vn_id = req.body.vn_id;
  let verifier_id = req.body.verifier_id;
  let vfc_id = req.body.vfc_id;
  let patient_id = req.body.patient_id;
  let time = req.body.time;
  let date = req.body.date;
  let result = req.body.result;
  let purpose = req.body.purpose;

  if (
    vfc_id &&
    !verifier_id &&
    !patient_id &&
    !time &&
    !date &&
    !result &&
    !purpose
  ) {
    return res
      .status(400)
      .send({ error: true, message: 'Please provide Information to be add' });
  }

  db.query(
    `INSERT INTO verification (vfc_id , verifier_id , patient_id ,  time , date , result , purpose) VALUE ( "${vfc_id}", "${verifier_id}" , "${patient_id}" , "${time}" ,"${date}" , "${result}" , "${purpose}"" )`,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: 'Record has been added',
      });
    },
  );
});

// http://localhost:3001/verification/getHash
// {
//   "type" : "patient",
//   "data" : {"patient_id" : 232222 , "patient_name": "ab", "cnic" : "2222"}
// }

// {
//   "type": "vaccine",
//   "data": {
//       "provider_id": 1,
//       "patient_id": 2,
//       "vaccine_id": 4,
//       "vaccine_type": "snnn",
//       "status": "333",
//       "date": "ee"
//   }
// }

router.post('/getHash', async (req, res) => {
  try {
    let { type, data } = req.body;
    console.log({ body: req.body });
    let transaction = null;
    if (type.toLowerCase() === 'patient') {
      const { patient_id, patient_name, cnic } = data;
      console.log({ patient_id, patient_name, cnic });
      transaction = await vaccineContract.methods
        .getsha256ForPatient(patient_id, patient_name, cnic)
        .call();
      console.log(transaction);
    } else {
      const {
        provider_id,
        patient_id,
        vaccine_id,
        vaccine_type,
        status,
        date,
      } = data;
      transaction = await vaccineContract.methods
        .getsha256ForVaccine(
          provider_id,
          patient_id,
          vaccine_id,
          vaccine_type,
          status,
          date,
        )
        .call();
    }
    return res.json({
      error: false,
      data: transaction,
      message: 'hash of data',
    });
  } catch (error) {
    console.log({ error });
  }
});

router.post('/verifyQr', async (req, res) => {
  try {
    let { type, hash } = req.body;
    console.log({ body: req.body });
    let transaction = null;
    if (type.toLowerCase() === 'patient') {
      console.log({ hash });
      transaction = await vaccineContract.methods.verifyPatient(hash).call();
      console.log(transaction);
    } else {
      console.log("vaccine",{ hash });
      transaction = await vaccineContract.methods
        .verifyVaccination(hash)
        .call();
    }
    console.log(transaction)
    return res.json({
      error: false,
      data: transaction,
      message: 'hash of data',
    });
  } catch (error) {
    console.log({ error });
  }
});

router.get('/:vn_id', function (req, res) {
  let vn_id = req.params.vn_id;

  if (!vn_id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }

  db.query(
    'SELECT * FROM verification where vn_id=?',
    vn_id,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results[0],
        message: 'Information by ID.',
      });
    },
  );
});

router.put('/update', function (req, res, next) {
  let vn_id = req.body.vn_id;
  let vfc_id = req.body.vfc_id;
  let verifier_id = req.body.verifier_id;
  let patient_id = req.body.patient_id;
  let time = req.body.time;
  let date = req.body.date;
  let result = req.body.result;
  let purpose = req.body.purpose;

  if (
    !vn_id ||
    !vfc_id ||
    !verifier_id ||
    !patient_id ||
    !time ||
    !date ||
    !result ||
    !purpose
  ) {
    return res
      .status(400)
      .send({ error: true, message: 'Please provide Information to be add' });
  }

  db.query(
    'Update verification SET vfc_id = ?, verifier_id = ? , patient_id = ?, time =? , date = ?, result= ? , purpose =?  WHERE vn_id = ?',
    [verifier_id, vfc_id, patient_id, time, date, result, purpose, vn_id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: 'Record has been added',
      });
    },
  );
});

module.exports = router;
