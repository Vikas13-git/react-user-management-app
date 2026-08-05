import express from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/userController.js";
import validateUserId from "../middleware/validateUserId.js";
const router = express.Router();
router.get("/", getUsers);
router.get("/:id",validateUserId,getUserById);

router.post("/",createUser);
router.patch("/:id",validateUserId,updateUser);
router.delete("/:id",validateUserId,deleteUser);
export default router;