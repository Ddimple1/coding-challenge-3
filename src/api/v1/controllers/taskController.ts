import { Request, Response } from "express";
import { Task } from "../models/taskModel";
import { successResponse } from "../models/responseModel";
 
export const CreateTask = async (req: Request, res: Response) => {
    try {
        const tasks: Task[] = await taskService.createTask
        res.status(200).json(successResponse(tasks));
    } catch (error: unknown) {
        next(error);
    }
