//@desc Get all contacts
//@route GET api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({"message":"Get all contacts"})
}

//@desc Get a contact
//@route GET api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({"message":`Get contact for ${req.params.id}`})
}

//@desc Post a contacts
//@route POST api/contacts
//@access public
const postContact = (req, res) => {
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        throw new Error("All fields are mandatory")
    }
    console.log(req.body)
    res.status(201).json({"message":"Add a contact"})
}

//@desc Update a contact
//@route PUT api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({"message":`Update contact for ${req.params.id}`})
}

//@desc Delete a contact
//@route DELETE api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({"message":`Delete contact for ${req.params.id}`})
}

module.exports= {
    getContacts,
    getContact,
    postContact,
    updateContact,
    deleteContact
}