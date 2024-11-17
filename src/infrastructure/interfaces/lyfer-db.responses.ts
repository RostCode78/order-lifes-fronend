/*=============
=    LOGIN    =
=============*/

export interface LoginResponse {
    token:    string;
    userData: UserData;
}

export interface UserData {
    id:                  number;
    name:                string;
    email:               string;
    profilePicture:      null;
    theme:               null;
    partnerId:           number;
    partnerInvitationId: null;
    createdAt:           Date;
    updatedAt:           Date;
    partnerInvitation:   null;
}

/*==============
=    SIGNUP    =
==============*/

export interface SignupResponse {
    token: string;
    user:  User;
}

export interface User {
    id:    number;
    name:  string;
    email: string;
}
