import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./login/login-form";
import { SignupForm } from "./signup/signup-form";

export const AuthTabs = () => {
    return (
        <Tabs defaultValue="login" className="max-w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                    className="data-[state=active]:text-primary"
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
