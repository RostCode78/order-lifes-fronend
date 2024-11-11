import { UserData } from '../../core/entities/user.entity';
import { LoginResponse } from '../interfaces/lyfer-db.responses';

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

}
