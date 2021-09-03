const AuthReducer = (state, action) =>{
    switch (action.type) {
        case "LOGIN_START":
            return {
                user:null,
                isFetching: true,
                error: false,
            };
            case "LOGIN_SUCCESS":
                return {
                    user:action.payload,
                    isFetching: false,
                    error: false,
                }; 
            case "LOGIN_FAILED":
                 return {
                    user:null,
                    isFetching: false,
                    error: true,
                };
                case "FOLLOW":
                    return {
                      ...state,// take the state before
                      user: {
                        ...state.user,// take everthing in the user , but change the followings state
                        followings: [...state.user.followings, action.payload],
                      },
                    };
                  case "UNFOLLOW":
                    return {
                      ...state,
                      user: {
                        ...state.user,
                        followings: state.user.followings.filter(
                          (following) => following !== action.payload
                        ),
                      },
                    };
                  default:
                    return state;
                }
    }


export default AuthReducer;