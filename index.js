import express from "express";
import db_connection from "./DB/connection.js";

const app = express();
db_connection();
