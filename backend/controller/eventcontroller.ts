import { NextFunction, Request, Response } from "express";
import { connectDB } from "../ormconfig";
import { Events } from "../entities/Events";

const eventRepo = connectDB.getRepository(Events);

// Add new Events
export const newEvent = async (req: any, res: Response, next: NextFunction) => {
  try {
    const data = req.body;

    if (req.files) {
      data.images = req.files.map(function (item: any, index: number) {
        return item.filename;
      });
    }
    let events = new Events();
    var files: any = [];
    data.images.map((img: any) => files.push(img));
    events.eventTitle = req.body.eventTitle;
    events.eventDesc = req.body.eventDesc;
    events.filename = files;

    const newEvent = await eventRepo.save(events);
    res.status(201).json({
      success: true,
      newEvent,
    });
  } catch (error) {
    res.status(500).json({
      error: error + "Unexpected Error",
    });
  }
};

// get all events
export const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const events: any = await eventRepo.find();
    res.json({
      events,
    });
  } catch (error) {
    return res.status(500).json({
      error: next(error),
    });
  }
};

// get single events
export const getSingleEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const event: any = await eventRepo.findOneBy({ id: +req.params.id });

  if (!event) {
    return "Error";
  }
  res.status(200).json({
    success: true,
    event,
  });
};

// deleting event
export const deleteEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await eventRepo.delete(req.params.id);

  res.status(200).json({
    success: true,
  });
};
