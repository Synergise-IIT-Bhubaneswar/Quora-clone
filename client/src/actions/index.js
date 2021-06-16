import * as api from '../api/index.js';

export const askQuestion = (question) => async (dispatch) => {
    try {
        const data = await api.askquestion(question);
        await dispatch({ type: "Ask", payload: data.data });
    } catch (error) {
        console.log(error);
        await dispatch({ type: "Ask", payload: 2 });
    }
}

export const login = (user) => async (dispatch) => {
    let userDetail = user?.profileObj;
    const token = user?.tokenId;
    try {
        userDetail=await api.login(userDetail);
        console.log(userDetail);
        await dispatch({ type: 'AUTH', data: { userDetail.data, token } });
    } catch (error) {
        console.log(error);
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        const posts = await api.getAllPosts();
        // console.log(posts);
        dispatch({ type: 'FETCH_ALL', payload: posts.data });
    } catch (error) {
        console.log(error);
    }
}

export const answer = async (data) => {
    try {
        await api.answer(data);

    } catch (error) {
        console.log(error);
    }
}
