const express = require('express');
const router = express.Router();
var db = require('../db');

var bodyParser = require('body-parser');
var cors = require('cors');

router.use(bodyParser.json());
router.use(cors());
router.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

router.get('/', function (req, res, next) {
  var sql = 'SELECT * FROM vaccination';
  db.query(sql, function (err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' });
    }
    res.json(rows);
  });
});

router.post('/', function (req, res) {
  // let v_id = req.body.v_id;
  let patient_id = req.body.patient_id;
  let vaccine_id = req.body.vaccine_id;
  let vc_id = req.body.vc_id;
  let doctor_id = req.body.doctor_id;
  let time = req.body.time;
  let date = req.body.date;
  let title = req.body.title;
  let dose = req.body.dose;
  let reason = req.body.reason;
  let hash = req.body.hash;
  if (
    !patient_id &&
    !vc_id &&
    !vaccine_id &&
    !doctor_id &&
    !time &&
    !date &&
    !dose &&
    !reason &&
    !title
  ) {
    return res
      .status(400)
      .send({ error: true, message: 'Please provide Information to be add' });
  }

  db.query(
    `INSERT INTO vaccination ( patient_id , vc_id , vaccine_id, doctor_id , time , date , dose , reason , title ,hash) VALUE ( "${patient_id}" ,  "${vc_id}", "${vaccine_id}" , "${doctor_id}" , "${time}" ,"${date}" , "${dose}" , "${reason}", "${title}", "${hash}" ) `,
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

router.get('/search/:v_id', function (req, res) {
  let v_id = req.params.v_id;

  if (!v_id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }

  db.query(
    'SELECT * FROM vaccination where v_id=?',
    [v_id],
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

router.get('/vaccine/:patient_id', function (req, res) {
  let patient_id = req.params.patient_id;

  if (!patient_id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }

  db.query(
    'SELECT title FROM vaccination where patient_id=?',
    [patient_id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: 'Information by ID.',
      });
    },
  );
});

router.post('/patientVaccine/', function (req, res) {
  let patient_id = req.body.patient_id;
  let title = req.body.title;

  console.log({ patient_id, title });

  if (!patient_id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }

  db.query(
    'SELECT * FROM vaccination where patient_id=? AND title=?',
    [patient_id, title],
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

router.get('/vaccine/:patient_id', function (req, res) {
  let patient_id = req.params.patient_id;

  if (!patient_id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }

  db.query(
    'SELECT title FROM vaccination where patient_id=?',
    [patient_id],
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

router.get('/:v_id', function (req, res) {
  let v_id = req.params.v_id;

  if (!v_id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }

  db.query(
    'SELECT * FROM vaccination where v_id=?',
    [v_id],
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
  let v_id = req.body.v_id;
  let patient_id = req.body.patient_id;
  let vaccine_id = req.body.vaccine_id;
  let vc_id = req.body.vc_id;
  let doctor_id = req.body.doctor_id;
  let time = req.body.time;
  let date = req.body.date;
  let dose = req.body.dose;
  let title = req.body.title;
  let reason = req.body.reason;

  if (
    !v_id ||
    !patient_id ||
    !vc_id ||
    !vaccine_id ||
    !doctor_id ||
    !time ||
    !date ||
    !dose ||
    !reason ||
    !title
  ) {
    return res
      .status(400)
      .send({ error: true, message: 'Please provide Information to be add' });
  }

  db.query(
    'Update vaccination SET patient_id = ?, vc_id = ?, vaccine_id = ? , doctor_id =?, time=?, date = ? , dose = ? , reason =? , title = ? WHERE v_id = ?',
    [
      patient_id,
      vc_id,
      vaccine_id,
      doctor_id,
      time,
      date,
      dose,
      reason,
      title,
      v_id,
    ],
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

router.delete('/delete/:v_id', function (req, res, next) {
  let v_id = req.params.v_id;

  if (!v_id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }
  db.query(
    'DELETE FROM vaccination WHERE v_id = ?',
    [v_id],
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

module.exports = router;
