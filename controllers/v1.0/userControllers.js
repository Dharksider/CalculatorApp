const express = require('express');

const users = []; //simulated users database
const getAddHandler = async (req, res) => {
    try 
    {const {varA , varB} = req.body;
   
    if ((typeof varA && typeof varB) === 'number' && isFinite(varA && varB))   
    {       
                res.status(200).json((varA + varB)); 
            
                           
        }}catch (error)
        {
           res.status(500).json({message: error.message});
        
    }}

    const getSubHandler = async (req, res) => {
        try 
        {const {varA , varB} = req.body;
            if ((typeof varA && typeof varB) === 'number' && isFinite(varA && varB))   
        {       
                    res.status(200).json((varA - varB)); 
                
                               
            }}catch (error)
            {
               res.status(500).json({message: error.message});
            
        }}

 const getMultHandler = async (req, res) => {
            try 
            {const {varA , varB} = req.body;
           
            if ((typeof varA && typeof varB) === 'number' && isFinite(varA && varB))   
            {      
                        res.status(200).json((varA * varB)); 
                    
                                   
                }}catch (error)
                {
                   res.status(500).json({message: error.message});
                
    }}

    const getDivHandler = async (req, res) => {
        try 
        {const {varA , varB} = req.body;
        
        if ((typeof varA && typeof varB) === 'number' && isFinite(varA && varB))   
            {   if (varA == 0)
                    {res.status(200).json(0)}
                else if(varB !== 0)
                    {res.status(200).json((varA / varB)); }
                else 
                    {res.status(400).json({message: 'A number is not divisible by Zero'})}
          
            }                    
                                      
        }catch (error)
            {
               res.status(500).json({message: error.message});
            
        }}


    module.exports = {getAddHandler, getSubHandler, getMultHandler,getDivHandler}
