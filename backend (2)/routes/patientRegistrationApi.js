const express = require('express');
const router = express.Router();
var db = require('../db');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.set("view-engine", "ejs");


// const app = require('../app');



var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + path.extname( file.originalname)  )
  }
})

const fileFilter=(req, file, cb)=>{
  if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/jpg" ){
    cb(null,true);
  }
  else{
    cb(null,false);
  }
}
 
var upload = multer({storage:storage,
limits:{
  fileSize: 1024 * 1024 * 5
},
fileFilter: fileFilter
});

var bodyParser = require('body-parser');
var cors = require('cors');
router.use(cors());
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: true
}));





router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(express.static('public'));  
router.use('/uploads', express.static('uploads')); 

router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM patient";
    db.query(sql, function(err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json(rows)
    })
  });


  // ,upload.single('photo')

router.post('/' ,upload.single('photo'),function (req, res) {
console.log(req.file);

  // let patient_id = req.body.patient_id;
  let vc_id = req.body.vc_id;
  let f_name = req.body.f_name;
  let l_name = req.body.l_name;
  let father_name = req.body.father_name;
  let email = req.body.email;
  let password = req.body.password;
  let date = req.body.date;
  let address = req.body.address;
  let phone = req.body.phone;
  let qualification = req.body.qualification;
  let gender = req.body.gender;
  let dob = req.body.dob;
  let martial_status = req.body.martial_status;
  let cnic = req.body.cnic;
  let religion = req.body.religion;
  let city = req.body.city;
  let state = req.body.state;
  let zip = req.body.zip;
  let photo= req.file.filename;
  let hash = req.body.hash

  if ( !vc_id && !f_name && l_name && !father_name && !email && !password && !date && !address && !phone && !qualification && !gender && !dob && !martial_status && !cnic && !religion && !city && !state && !zip && !photo) {
      return res.status(400).send({ error:true, message: 'Please provide Information to be add' });
  }

  db.query(`INSERT INTO patient ( vc_id ,f_name , l_name , father_name , email, password , date, address , phone , qualification ,gender, dob, martial_status , cnic , religion, city ,state , zip, photo,hash) VALUE ( "${vc_id}", "${f_name}", "${l_name}", "${father_name}", "${email}", "${password}","${date}", "${address}", "${phone}", "${qualification}", "${gender}", "${dob}", "${martial_status}" , "${cnic}", "${religion}", "${city}", "${state}", "${zip}", "${photo}" , "${hash}") `, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Record has been added' });
  });
});


// router.post('/patientVaccinedReport/:patient_id', function(req, res, next) {
//   const patient_id = req.body.patient_id;
//   var sql = "select vaccine.title from vaccine where vaccination.patient_id = ? vaccination.vaccine_id=vaccine.vaccine_id"; 
  
//   db.query(sql, function(err, rows, fields) {
//     if (err) {
//       res.status(500).send({ error: 'Something failed!' })
//     }
//     res.json(rows)
//   })
// });


router.get('/patientVaccined', function(req, res, next) {
  var sql = "SELECT patient.f_name, patient.l_name,vaccination.date,vaccination.time, vaccination.result,vaccination.reason,doctor.f_name,doctor.l_name,vc_center.name,vaccine.title FROM patient, vaccination,doctor,vc_center,vaccine WHERE patient.patient_id == vaccination.patient_id, vc_center.vc_id == vaccination.vc_id, doctor.doctor_id == vaccination.doctor_id,vaccine.vaccine_id == vaccination.vaccine_id ";
  db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json(rows)
  })
});




router.post("/login",(req,res)=>{
  const patient_id = req.body.patient_id;
  const password = req.body.password;
 

  db.query("SELECT * FROM patient WHERE patient_id = ? AND password = ? ",[patient_id,password], (err,result)=>{
      if(err){
        throw err;
       
      }
      if(result.length > 0){
        res.send({'success' : true, 'message': result[0].patient_id});
        // res.send(result);
      }
      else{
        res.send({ 'success': false, 'message' : "User not found, please try again"});
      }
    
    }
  );

});





router.get('/:patient_id', function (req, res) {
  
  let patient_id = req.params.patient_id;

  if (!patient_id) {
      return res.status(400).send({ error: true, message: 'Please provide id' });
  }

  db.query('SELECT * FROM patient where patient_id=?', patient_id, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results[0], message: 'Information by ID.' });
  });

});


router.put('/update', function(req, res, next) {

  let patient_id = req.body.patient_id;
  let vc_id = req.body.vc_id;
  let f_name = req.body.f_name;
  let l_name = req.body.l_name;
  let father_name = req.body.father_name;
  let email = req.body.email;
  let password = req.body.password;
  let address = req.body.address;
  let date = req.body.date;
  let phone = req.body.phone;
  let qualification = req.body.qualification;
  let gender = req.body.gender;
  let dob = req.body.dob;
  let martial_status = req.body.martial_status;
  let cnic = req.body.cnic;
  let religion = req.body.religion;
  let city = req.body.city;
  let state = req.body.state;
  let zip = req.body.zip;

  if (!patient_id || !vc_id || !f_name || l_name || !father_name || !email || !password ||!date || !address || !phone || !qualification || !gender || !dob || !martial_status || !cnic || !religion || !city || !state || !zip) {
    return res.status(400).send({ error:true, message: 'Please provide Information to be add' });
}

    db.query("Update patient SET vc_id = ?, f_name = ?, l_name = ? ,father_name = ? , email =?, password=?, date= ?, address = ? , phone = ? , qualification =?, gender = ?, dob = ?, martial_status = ?, cnic = ?, religion = ?, city = ?, state = ?, zip = ? WHERE patient_id = ?", 
    [vc_id , f_name , l_name ,father_name , email ,password ,date, address , phone , qualification,gender,dob, martial_status, cnic, religion,city,state,zip , patient_id], function (error, results, fields) {   
  if (error) throw error;
      return res.send({ error: false, data: results, message: 'Record has been added' });
  })
});



router.delete('/delete/:patient_id', function (req, res, next) {
  
  let patient_id = req.params.patient_id;

  if (!patient_id) {
      return res.status(400).send({ error: true, message: 'Please provide id' });
  }
  db.query("DELETE FROM patient WHERE patient_id = ?",[patient_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'User Data has been deleted' });
       
      })

}); 


module.exports = router;