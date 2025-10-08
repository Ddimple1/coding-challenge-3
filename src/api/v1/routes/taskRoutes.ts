
import express, { Router } from "express";
import {
    CreateTask,
} from "../controllers/taskController";

const router: Router = express.Router();

router.post("/tasks", CreateTask);

export default router;