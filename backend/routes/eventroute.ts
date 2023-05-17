import express from "express";
import { upload } from "../middleware/uploader";
import {
  deleteEvents,
  getAllEvents,
  getSingleEvent,
  newEvent,
} from "../controller/eventcontroller";
import { AuthenticatedUser } from "../controller/admincontroller";

const router = express.Router();

// POST an event
router.route("/event/new").post(AuthenticatedUser ,upload.array("images"), newEvent);

// get all events
router.route("/events/all").get(getAllEvents);

// delete events
router.route("/event/:id").get(getSingleEvent).delete(deleteEvents);

module.exports = router;
