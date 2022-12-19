const express = require('express');
const router = express.Router();
const middelware = require("../middleware/middToken");
const controller = require('../controller/controller');
let fileUploadHelper = require("../helper/file_uplaod");


router.post('/register1', controller.Admin_Register);
router.post('/login', controller.Admin_login);
router.get('/register_info/:id', controller.getRegisterInfo);


// ----------------------------------------------------------------------------------------
// adminRegister
router.post('/add_petient', middelware.validateAdminType, fileUploadHelper.uploadUserProfileImage.single('patientPhoto'), controller.Add_Petient);

router.delete('/destroy_patient/:id', middelware.validateAdminType, controller.destroy_patient);

router.put('/edit_patient/:id', middelware.validateAdminType, fileUploadHelper.uploadUserProfileImage.single('patientPhoto'), controller.edit_patient);

router.get('/get_patient_update/:id', middelware.validateAdminType, controller.get_patient_update);
router.get('/get_patient_data', controller.get_patient);
// -----------------------------------------------------------------

router.post('/add_staff', middelware.validateAdminType, controller.Add_staff);

router.delete('/destroy_staff/:id', middelware.validateAdminType, controller.destroy_staff);

router.put('/edit_staff/:id', middelware.validateAdminType, controller.edit_staff);

router.get('/get_staff_update/:id', middelware.validateAdminType, controller.get_staff_update);
router.get('/get_staff_data', middelware.validateAdminType, controller.get_staff);


// .......................................................
router.get('/get_admin', middelware.validateAdminType, controller.getAdmin)
router.put('/edit_admin/:id', middelware.validateAdminType, controller.editAdmin);

// const nodemailer = require("nodemailer")
// let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//             user: "shaista.tanveer@jtechworld.com",
//             pass: "Jtech@2022"
//       },
//       tls: {
//             rejectUnauthorized: false,
//       }
// })
// let mailOption = {
//       from: "shaista.tanveer@jtechworld.com",
//       to: "bilquise.ather@jtechworld.com",
//       subject: "Email through nodemailer",
//       text: "hello first email send from nodemailer"
// }

// transporter.sendMail(mailOption, function (err, success) {
//       if (err) {
//             console.log(err);
//       } else {
//             console.log("email sent successfully");
//       }
// })

router.post('/treeView', controller.treeView);
router.get('/getTree', controller.getTreeView);
router.put('/updateTree/:id', controller.putTReeView);

// -------------------------
router.post('/sendRecursive', controller.sendRecursive)
router.get('/getRecursive', controller.getRecursive);

router.post('/AddcuntryDetails', controller.cuntryDerails);
router.get('/getCuntry', controller.getCuntry);

module.exports = router;






