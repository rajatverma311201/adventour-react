import { Button } from "@/components/ui/button";
import { firebaseApp } from "@/config/firebase";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
} from "firebase/auth";

import { IconType } from "react-icons";
import { AuthProvider } from "types";
import { PROVIDER } from "@/utils/constants";
import { useProviderAuth } from "./use-provider-auth";

interface ProviderAuthProps {
    provider: AuthProvider;
    Icon: IconType;
}

const Providers = {
    [PROVIDER.GOOGLE]: GoogleAuthProvider,
    [PROVIDER.GITHUB]: GithubAuthProvider,
};

export const ProviderAuth: React.FC<ProviderAuthProps> = ({
    provider,
    Icon,
}) => {
    const ProviderClass = Providers[provider];
    const providerInstance = new ProviderClass();

    const { providerAuth } = useProviderAuth();

    const handleGoogle = async () => {
        console.log("handleSignin", firebaseApp);
        const auth = getAuth();
        signInWithPopup(auth, providerInstance)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = ProviderClass.credentialFromResult(result);
                const user = result.user;
                console.log("credential", credential);
                console.log("user", user);

                // const accessToken =await user.getIdToken();

                user.getIdToken().then((accessToken) => {
                    providerAuth({ token: accessToken, provider });
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    };

    const BtnIcon: IconType = (props) => <Icon {...props} />;

    return (
        <Button variant="outline" size="icon" onClick={handleGoogle}>
            <BtnIcon className="h-6 w-6 text-foreground" />
        </Button>
    );
};
