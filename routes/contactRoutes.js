const express = require("express")
const router = express.Router()
const {getContacts, getContact, updateContact, postContact, deleteContact} = require('../controllers/contactController')

//documentation
// router.get('/', (req, res) => {
//     res.send('Birds home page')
// })

router.route('/').get(getContacts).post(postContact)
router.route('/:id').put(updateContact).get(getContact).delete(deleteContact)

module.exports = router