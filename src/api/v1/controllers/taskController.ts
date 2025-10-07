import { Request, Response } from "express";

export const createItem = (req: Request, res: Response) => {
    // Logic to create a new item
    
    res.status(201).send("Create a new item");
};