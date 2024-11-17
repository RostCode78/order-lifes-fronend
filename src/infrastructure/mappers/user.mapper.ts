import { UserData, User } from '../../core/entities/user.entity';
import { LoginResponse, SignupResponse } from '../interfaces/lyfer-db.responses';

export class UserMapper {

    static toUserData(data: LoginResponse): UserData {

        return {
            id: data.userData.id,
            token: data.token,
            name: data.userData.name,
            email: data.userData.email,
            profilePicture: data.userData.profilePicture,
            theme: data.userData.theme,
            partnerId: data.userData.partnerId,
            partnerInvitationId: data.userData.partnerInvitationId,
            partnerInvitation: data.userData.partnerInvitation,
        };

    }

    static toUser(data: SignupResponse): User {
        return {
            id: data.user.id,
            token: data.token,
            name: data.user.name,
            email: data.user.email,
        };
    }

}
