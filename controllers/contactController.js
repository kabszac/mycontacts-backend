const asyncHandler = require('express-async-handler')
const Contact  = require('../models/contactModels')

//@desc Get all contacts
//@route GET api/contacts
//@access public
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//@desc Get a contact
//@route GET api/contacts/:id
//@access public
const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({"message":`Get contact for ${req.params.id}`})
})

//@desc Post a contacts
//@route POST api/contacts
//@access public
const postContact = asyncHandler(async(req, res) => {
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact =await  Contact.create({name, email, phone})
    console.log(req.body)
    res.status(201).json(contact)
})

//@desc Update a contact
//@route PUT api/contacts/:id
//@access public
const updateContact =asyncHandler(async(req, res) => {
    res.status(200).json({"message":`Update contact for ${req.params.id}`})
})

//@desc Delete a contact
//@route DELETE api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({"message":`Delete contact for ${req.params.id}`})
})

module.exports= {
    getContacts,
    getContact,
    postContact,
    updateContact,
    deleteContact
}