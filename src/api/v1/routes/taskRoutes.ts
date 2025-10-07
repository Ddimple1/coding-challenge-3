
import express, { Router } from "express";
import {
    createItem,
} from "../controllers/taskController";

const router: Router = express.Router();

router.post("/items", createItem);

export default router;