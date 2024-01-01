export enum ACTION_TYPE {
    SET_INITIALIZED = 'APP/SET_INITIALIZED',

    SET_USER_DATA = 'AUTH/SET_USER_DATA',
    SEND_MESSAGE = 'DIALOGS/SEND-MESSAGE',
    SET_CAPTCHA = 'AUTH/SET_USER_DATA',

    ADD_POST = 'PROFILE/ADD-POST',
    DELETE_POST = 'PROFILE/DELETE-POST',
    SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE',
    SET_STATUS = 'PROFILE/SET-STATUS',
    SET_PHOTO = 'PROFILE/SET-PHOTO',

    FOLLOW = 'USERS/FOLLOW',
    UNFOLLOW = 'PROFILE/UNFOLLOW',
    SET_USER = 'USERS/SET_USER',
    SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE',
    SET_TOTAL_USER_COUNT = 'USERS/SET_TOTAL_USER_COUNT',
    IS_FETCHING = 'USERS/IS_FETCHING',
    IS_FOLLOWING = 'USERS/IS_FOLLOWING',
    USER_FILTER = 'USERS/USER_FILTER',
    MESSAGES_RECEIVED = 'CHAT/MESSAGES-RECEIVED',
}