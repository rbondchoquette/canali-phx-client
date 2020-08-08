import axios from 'axios';

const api = axios.create({
    baseURL:'https://canali-phx-server.azurewebsites.net/api/',
})

const insertOpinion = payload => api.post(`opinion`, payload);

const increaseVoteOne = (payload) => api.put(`voteone`, payload);
const increaseVoteTwo = (payload) => api.put(`votetwo`, payload);
const increaseVoteThree = (payload) => api.put(`votethree`, payload);
const increaseVoteFour = (payload) => api.put(`votefour`, payload);

const getVoteOne = () => api.get(`voteone`);
const getVoteTwo = () => api.get(`votetwo`);
const getVoteThree = () => api.get(`votethree`);
const getVoteFour = () => api.get(`votefour`);

const apis = {
    insertOpinion,
    increaseVoteOne,
    increaseVoteTwo,
    increaseVoteThree,
    increaseVoteFour,
    getVoteOne,
    getVoteTwo,
    getVoteThree,
    getVoteFour
};

export default apis