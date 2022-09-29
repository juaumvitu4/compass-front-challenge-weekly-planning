import { insertContent, getDate, getHour } from "./script/util.js";

const $ = document.querySelector.bind(document);


insertContent("time", getDate(), ".data");
setInterval(() => insertContent("time", getHour(), ".hora"));
