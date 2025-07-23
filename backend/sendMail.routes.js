import express from "express";
import { SendMail } from "./sendMail.js";

const MailRouter = express.Router() 

MailRouter.post("/send-request", SendMail);

export default MailRouter