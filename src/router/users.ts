import express from "express";

import { deleteUser, getAllUser, updateUser } from "../controller/users";
import { isAuthenticated, isOwner } from "../middleware";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUser);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
};
