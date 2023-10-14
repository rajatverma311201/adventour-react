import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./login/login-form";
import { SignupForm } from "./signup/signup-form";

interface AuthTabsProps {
    defaultTab?: string;
}

export const AuthTabs: React.FC<AuthTabsProps> = ({ defaultTab = "login" }) => {
    return (
        <Tabs defaultValue={defaultTab} className="">
            <TabsList className="grid w-full grid-cols-2 border-primary">
                <TabsTrigger
                    className=" data-[state=active]:text-primary"
                    value="login"
                >
                    Login
                </TabsTrigger>

                <TabsTrigger
                    className="data-[state=active]:text-primary"
                    value="signup"
                >
                    Sign Up
                </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="signup">
                <SignupForm />
            </TabsContent>
        </Tabs>
    );
};
