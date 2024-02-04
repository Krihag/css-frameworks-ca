import page from "../../handlers/pageHandlers.js";
import getPosts from "../../api/auth/requests/getPosts.js";
import pageSpecific from "./pageSpecific.js";

const userData = page.enterPage();
console.log(userData);
getPosts();

pageSpecific(userData);
