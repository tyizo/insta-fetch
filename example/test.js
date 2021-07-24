const { fetchUser, fetchPost } = require("./insta-Packge");
const data = fetchUser("1xm0d").then((data) => console.log(data));
const data2 = fetchPost("CRtrth5oJTV").then((data) => console.log(data));
