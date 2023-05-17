import { NextFunction, Request, Response } from "express";
import { connectDB } from "../ormconfig";
import { Admin } from "../entities/admin";
import bcryptjs from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const adminRepo = connectDB.getRepository(Admin);

// register admin
export const Register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = await adminRepo.save({
    name,
    email,
    password: await bcryptjs.hash(password, 12),
  });

  res.send(user);
};

// login admin
export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await adminRepo.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: "Invalid Credentials",
    });
  }

  if (!(await bcryptjs.compare(password, user.password))) {
    return res.status(400).send({
      message: "Invalid Credentials",
    });
  }

  const accessToken = sign(
    {
      id: user.id,
    },
    "access_secret",
    { expiresIn: 60 * 60 }
  );

  const refreshToken = sign({ id: user.id }, "refresh_secret", {
    expiresIn: 24 * 60 * 60,
  });

  // res.cookie("accessToken", accessToken, {
  //   httpOnly: true,
  //   maxAge: 24 * 60 * 60 * 1000, //equivalent to 1 day
  // });

  // res.cookie("refreshToken", refreshToken, {
  //   httpOnly: true,
  //   maxAge: 7 * 24 * 60 * 60 * 1000, //equivalent to 7 days
  // });
  // passing token
  const token = {
    accessToken,
    refreshToken,
  };

  res.send({
    message: "success",
    token: accessToken,
    user,
  });
};

export const AuthenticatedUser = async (req: any, res: Response, next: NextFunction) => {
  try {
    console.log("Hello world", req.headers["authorization"]);
    const accessToken: any = req.headers["authorization"];

    const payload: any = verify(accessToken, "access_secret");

    if (!payload) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }

    const user = await adminRepo.findOne({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }

    const { password, ...data } = user;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).send({
      message: "Unauthenticated",
    });
  }
};

// Get all Admin
export const getAllAdmins = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("yeta aayem hami");
  
  let admins = await adminRepo.find();
console.log("admins are >> ", admins);

  res.status(200).json({
    admins,
    success: true,
  });
};
