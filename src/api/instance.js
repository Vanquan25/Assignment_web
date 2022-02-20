import axios from "axios";

const intance = axios.create({
    baseURL: "http://localhost:3002",
    headers: {
        "Content-Type": "application/json",
    },
});

export default intance;
