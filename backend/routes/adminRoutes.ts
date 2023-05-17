import express from "express";
import {
  AuthenticatedUser,
  Login,
  Register,
  getAllAdmins,
} from "../controller/admincontroller";

const router = express.Router();
router.route("/admin/register").post(Register);
router.route("/admin/login").post(Login);
router.route("/admins").get(AuthenticatedUser, getAllAdmins);

module.exports = router;
