import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";

export const PersonalInfo = () => {
    const { currentUser } = useCurrentUser();

    return (
        <div className="">
            <h1 className="mb-10 text-center text-4xl font-semibold text-primary">
                Personal Info
            </h1>
            <Card className="max-w-lg">
                <CardHeader>
                    <CardTitle>{currentUser?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input defaultValue={currentUser?.name} />
                    <Input defaultValue={currentUser?.email} disabled />
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </div>
    );
};
