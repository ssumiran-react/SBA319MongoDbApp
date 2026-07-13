import express from "express";
import UserModel from '../models/UserModel.js';

const router = express.Router();

router.route("/")
  .get( async (req, res) => { // Get All customer users
    //const result = await UserModel.find() ;
    const result = await UserModel.aggregate([
      {
        $match: {
            applicant: "Loan"
        }
      }
    ]);

    //console.log("in get user");
    if (!result) res.send("Not found").status(404);
    else res.json(result).status(200);
  })
  .post( async (req, res) => {  // Post single user
    //console.log("in post user: ", req.body);
    const result = await UserModel.insertOne(req.body) ;
    res.json(result).status(204);
  })

router.route("/delete/:userid")  
  .delete(async (req, res)=> { //console.log("in delete _id: ");
    const result = await UserModel.findOneAndDelete({userid: req.params.userid });
    
    if (!result) res.send("Not found").status(404);
    else res.json(result).status(200);
  })

export default router;
