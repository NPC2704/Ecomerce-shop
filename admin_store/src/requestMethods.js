// import axios from "axios";

// const BASE_URL = "http://localhost:8800/api/";
// // const TOKEN =
// //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// //     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });

import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
//   ?.currentUser?.accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODIyYzZlMzJmZDExM2VjMzY0YWVlYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjU5Mjg4MywiZXhwIjoxNjg2ODUyMDgzfQ.aw4idaRrmF_BrrWOJixcrmmZcNalMqW3FfkofBX2StQ";
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
