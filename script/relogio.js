import { insertContent, getDate, getHour } from "./util.js";

const $ = document.querySelector.bind(document);


insertContent("time", getDate(), ".data");
setInterval(() => insertContent("time", getHour(), ".hora"));


