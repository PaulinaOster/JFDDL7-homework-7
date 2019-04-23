const SET = 'easterEgg/SET';

export const setActionCreator = () => ({
    type: SET,
});

const initialState = {
    isPainted: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET: return {
            ...state,
            isPainted: !state.isPainted,
        };
        default:
            return state;
    }
};