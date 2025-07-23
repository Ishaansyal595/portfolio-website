import express from "express";
import { SendMail } from "./sendMail";

const MailRouter = express.Router() 

MailRouter.post("/send-request", SendMail);

export default MailRouter