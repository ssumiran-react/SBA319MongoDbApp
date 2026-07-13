import express from "express";
import EmployeeModel from '../models/EmployeeModel.js';

const router = express.Router();

router.route("/")
  .get( async (req, res) => { // Get All Loan employee
    const result = await EmployeeModel.aggregate([
      {
        $match:{
            project: "Loan"
          }
      }
    ]);
    //console.log("in get employee");
    if (!result) res.send("Not found").status(404);
    else res.json(result).status(200);
  })
  .post( async (req, res) => {  // Post single employee
    //console.log("in post employee: ", req.body);
    const result = await EmployeeModel.insertOne(req.body) ;
    res.json(result).status(204);
  })

router.route("/delete/:empid")  
  .delete(async (req, res)=> { console.log("in delete empid: ",req.params.empid );
    const result = await EmployeeModel.findOneAndDelete({empid: req.params.empid });
    
    if (!result) res.send("Not found").status(404);
    else res.json(result).status(200);
  })

export default router;
