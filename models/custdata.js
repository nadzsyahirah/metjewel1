const mongoose = require('mongoose');

//new


//========== Schema consult section ============//
const CustConsultSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

//======== consult model=========//

const custConsult = mongoose.model("custConsult", CustConsultSchema);

module.exports = custConsult;

/*
module.exports={
    deleteData:function(deleteId, callback){
                   
       userData= userTable.findByIdAndDelete(deleteId);
       userData.exec(function(err, data){
         if (err) throw err;
          return callback(data);
       })
    }
 }
 */

/* DELETE PART
//========== enquiries section ===========//
const CustEnqSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

//========== consult section ============//

const notesSchema = {
    name: String,
    email: String,
    phone: Number,
    date: Date,
    time: String,
    product: String,
    message: String
}



//========== enquiries section ===========//

const schemaTwo = {
    name: String,
    email: String,
    subject: String,
    message: String
}
*/



//======== enquiry model=========//

//const custEnquiry = mongoose.model("custEnquiry", CustEnqSchema);

//////////////////




//module.exports = custEnquiry;