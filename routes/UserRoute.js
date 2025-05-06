import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  loginHandler,
  logout,
} from "../controllers/UserController.js";

import { refreshToken } from "../controllers/refreshToken.js";
import { verifyToken } from "../middleware/verufyToken.js";

const router = express.Router();

//endpoint token
router.get("/token", refreshToken);

//endpoint auth
router.post("/login", loginHandler);
router.post("/register", createUser);
router.delete("/logout", logout);

//endpoint CRUD
router.get("/users", refreshToken, getUsers);
router.get("/users/:id", refreshToken, getUserById);
router.post("/add-user", refreshToken, createUser);
router.put("/edit-user/:id", refreshToken, updateUser);
router.delete("/delete-user/:id", refreshToken, deleteUser);

export default router;
