import express from "express";
//import dataFetchandStore from "../repository/repository.js";
import { getData } from "../repository/repository.js";

const dataRetrival = async (req,res)=>{
    let data =[];
    try{
        data = await getData();
        if(!data){
            throw new Error("Data not retrived from the database!!");
        }
        res.status(200).json({
            success:true,
            data: data,
            msg: "data fetched successfully!!"
        })
    }catch(err){
        console.log(err);
    }
    //setInterval(dataRetrival,2000);
}

export default dataRetrival;
