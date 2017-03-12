var initialState = {
    users: [
        {
            id: 1,
            first: "Bucky",
            last: "Roberts",
            age: 71,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg",
            active:1
        },
        {
            id: 2,
            first: "Joby",
            last: "Wasilenko",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://i.imgur.com/52xRlm8.png",
            active:1
        },
        {
            id: 3,
            first: "Madison",
            last: "Williams",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png",
            active:1
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'USER_CREATED':
            return Object.assign({}, state, {
                users: [
                ...state.users,
                action.payload
                ]
            })
            break;
        case 'USER_DELETED':
            return Object.assign({}, state, {
                users: state.users.map((user) => {
                    if (user.id == action.payload){
                        user.active = 0;
                    }
                    return user;
                })
            })
            break;
        default:
        return state;
    }    
}
