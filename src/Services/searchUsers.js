import axios from "axios";


export const searchAllUsers = async () => {

    try {
        const users = await axios.get("https://randomuser.me/api/?results=40");
        return users;
    } catch(error) {
        console.error(error);
    }
};