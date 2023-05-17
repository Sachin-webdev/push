import { NextFunction, Request, Response } from "express";
import { Message } from "../entities/Message";
import { connectDB } from "../ormconfig";

const messagerepo = connectDB.getRepository(Message);

// Post a message
export const createMessageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = new Message();
  message.name = req.body.name;
  message.email = req.body.email;
  message.phone = req.body.phone;
  message.message = req.body.message;

  let newMessage = await messagerepo.save(message);

  res.status(201).json({
    newMessage,
    success: true,
  });
};

// Get all Message
export const getAllMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let messages = await messagerepo.find();

  res.status(200).json({
    messages,
    success: true,
  });
};

// deleting message
export const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  await messagerepo.delete(req.params.id);

  res.status(200).json({
    success: true,
  });
};
