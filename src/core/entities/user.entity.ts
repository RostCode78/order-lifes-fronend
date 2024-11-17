export interface UserData {
    id:                  number;
    token:               string;
    name:                string;
    email:               string;
    profilePicture:      null;
    theme:               null;
    partnerId:           number;
    partnerInvitationId: null;
    partnerInvitation:   null;
}

export interface User {
    id:    number;
    token: string;
    name:  string;
    email: string;
}
