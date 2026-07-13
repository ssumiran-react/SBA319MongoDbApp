import express from "express";
import LoanModel from '../models/LoanModel.js';

const router = express.Router();

router.route("/")
  .get( async (req, res) => { // Get All Loans
    const result = await LoanModel.aggregate([
      {
        $match:{
            active: "Y"
          }
      }
    ]);
    //console.log("in get Loan");
    if (!result) res.send("Not found").status(404);
    else res.json(result).status(200);
  })
  .post( async (req, res) => {  // Post single Loan
    console.log("in post Loan: ", req.body);
    const result = await LoanModel.insertOne(req.body) ;
    res.json(result).status(204);
  })

router.route("/delete/:loanid")  
  .delete(async (req, res)=> { console.log("in delete Loan: ");
    const result = await LoanModel.findOneAndDelete({loanid: req.params.loanid });
          
    if (!result) res.send("Not found").status(404);
    else res.json(result).status(200);
  })

router.route("/update/process/:loanid")  
  .patch(async (req, res)=> { 
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const nowFormat = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    req.body.date = nowFormat;
    //console.log("in update process Loan: ", req.body);
    const result = await LoanModel.findOneAndUpdate({loanid:req.params.loanid}, {$push: { process:req.body }}) ;
          
    if (!result) res.send("Not found").status(404);
    else res.json(result).status(200);
  })

export default router;
