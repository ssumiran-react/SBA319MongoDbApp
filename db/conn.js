import mongoose from "mongoose";

let conn;
async function dbConn() {
  try {
    conn = await mongoose.connect(process.env.ATLAS_URI); 
    //dbConn = conn.db("bank_loan");
    
    //Create a single-field index on empid, project
    /*const empidIndex = await conn.createIndex({ empid: 1 });
    console.log(`empidIndex created: ${empidIndex}`);

    const projectIndex = await conn.createIndex({ project: 1 });
    console.log(`projectIndex created: ${projectIndex}`);

    mongoose.connection.db.createCollection("employees", {
      validator: { // Pass the validator object
        $jsonSchema: {  // Use the $jsonSchema operator
          bsonType: "object",
          title: "Grades Validation",
          required: ["empid", "username", "fullname", "role"], //required fields
          properties: {   // Properties object contains document fields
            empid: { // Each document field is given validation criteria
              bsonType: "String",
              // and a description that is shown when a document fails validation
              description: "Employee Id is required in String",
            },
            username: {
              bsonType: "String",
              // and a description that is shown when a document fails validation
              description: "username is required in String",
            },
            fullname: { 
              bsonType: "String",
              // and a description that is shown when a document fails validation
              description: "fullname is required in String",
            },
            role: { 
              bsonType: "String",
              // and a description that is shown when a document fails validation
              description: "role is required in String",
            }
          },
        },
      },
      validationAction: "warn"
    });*/
    console.log("conn in MERN DB");
  } catch (e) {
    console.error(e);
  }  
}

export default dbConn; 

/* Sample data
{
      "userid": 1,
      "username": "BillyJohn1",
      "email": "Billy.John@gmail.com",
      "fullname": "Billy John",
      "applicant": "Loan"
    },
    {
    "userid": 2,
      "username": "kennyk2",
      "email": "Kenny.Koo@gmail.com",
      "fullname": "Kenny Koo",
      "applicant": "Loan"
    },
    {
      "userid": 3,
      "username": "Janeeng3",
      "email": "Janeeng@gmail.com",
      "fullname": "Jane Eng",
      "applicant": "Loan"
},{
      "userid": 4,
      "username": "brianKay",
      "email": "BrianK@gmail.com",
      "fullname": "Brian Kay",
      "applicant": "Loan"
},{
      "userid": 5,
      "username": "Evab5",
      "email": "Eva-Best@gmail.com",
      "fullname": "Eva Best",
      "applicant": "Investment"
},
 
 
    {
      "empid": "JW1001",
      "username": "jwest1001",
      "email": "jennifer_West@bankloan.com",
      "fullname": "Jennifer West",
      "role": "Employee",
      "project": "Loan"
    },
    {
      "empid": "SJ101",
      "username": "sjackson101",
      "email": "steve_jackson@bank.com",
      "fullname": "Steve Jackson",
      "role": "Employee",
      "project": "Loan"
},{
      "empid": "JL210",
      "username": "jlionar201",
      "email": "Jack_Lionar@bank.com",
      "fullname": "Jack Lionar",
      "role": "Employee",
      "project": "Financial Advisor"
}


"loanid": "L100",
 "userid" : 1     
 "assignedid": "JW1001",
 "assignedname": "Jennifer West", 
  "active":"Y",
"process":[{
"status": "New",
"desc": "New loan application",
"date" : "2026-07-10 23:23:59"
}
]*/