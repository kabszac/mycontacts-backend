const asyncHandler = require('express-async-handler')
const Contact  = require('../models/contactModels')

//@desc Get all contacts
//@route GET api/contacts
//@access private
// req.user.id from the token middleware
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)
})

//@desc Get a contact
//@route GET api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error('Contact not found')
    }
    res.status(200).json(contact);
})


//@desc Post a contacts
//@route POST api/contacts
//@access private
const postContact = asyncHandler(async(req, res) => {
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact =await  Contact.create({name, email, phone, user_id:req.user.id})
    console.log(req.body)
    res.status(201).json(contact)
})

//@desc Update a contact
//@route PUT api/contacts/:id
//@access private
const updateContact =asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error('Contact not found')
    }
    const updatedContent = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContent)
})

//@desc Delete a contact
//@route DELETE api/contacts/:id
//@access private
const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error('Contact not found')
    }

    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact)
})

module.exports= {
    getContacts,
    getContact,
    postContact,
    updateContact,
    deleteContact
}