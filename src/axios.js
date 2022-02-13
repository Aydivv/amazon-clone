import axios from "axios";

const base = "https://us-central1-clone-a50ec.cloudfunctions.net/api" 

const instance = axios.create({
    baseURL: base
    // local host for debugging `http://localhost:5001/clone-a50ec/us-central1/api`
});

export default instance;

export {base}
