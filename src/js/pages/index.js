import request from "../api/auth/requests/loginRequest.js";
import listen from "../handlers/eventListen.js";

const form = document.querySelector("#login-form");
listen.form(form, request);
