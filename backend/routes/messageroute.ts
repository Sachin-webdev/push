import express from "express";
import {
  createMessageController,
  deleteMessage,
  getAllMessage,
} from "../controller/messagecontroller";
import { AuthenticatedUser } from "../controller/admincontroller";

const router = express.Router();

router.route("/message/new").post(createMessageController);
router.route("/messages/all").get(AuthenticatedUser, getAllMessage);
router.route("/messages/delete/:id").delete(AuthenticatedUser, deleteMessage);

module.exports = router;
