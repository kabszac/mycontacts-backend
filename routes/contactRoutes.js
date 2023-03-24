const express = require("express")
const router = express.Router()
const {getContacts, getContact, updateContact, postContact, deleteContact} = require('../controllers/contactController')

//documentation
// router.get('/', (req, res) => {
//     res.send('Birds home page')
// })

router.route('/').get(getContacts)

router.route('/:id').get(getContact)

router.route('/').post(postContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)





module.exports = router