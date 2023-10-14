import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utils/helpers";

interface AuthUserAvatarProps {
    name: string;
}

export const AuthUserAvatar: React.FC<AuthUserAvatarProps> = ({ name }) => {
    const initials = getInitials(name);

    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    );
};
