import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useSignup } from "@/features/auth/signup/use-signup";
import { ProviderAuth } from "../provider-auth";
import { PROVIDER } from "@/utils/constants";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
});

export const SignupForm = () => {
    const { signup, isLoading } = useSignup();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const { name, email, password, passwordConfirm } = values;
        console.log(values);
        signup(
            {
                name,
                email,
                password,
                passwordConfirm,
            },
            {
                onSuccess: () => {
                    form.reset();
                },
            },
        );
    }

    return (
        <Card className="max-h-[75vh] overflow-scroll">
            <CardHeader>
                <CardTitle className="text-primary">Signup</CardTitle>
                <CardDescription className="flex justify-center gap-5">
                    <ProviderAuth provider={PROVIDER.GOOGLE} Icon={FcGoogle} />
                    <ProviderAuth provider={PROVIDER.GITHUB} Icon={FaGithub} />
                </CardDescription>
            </CardHeader>
            <Separator />
            <h1 className="my-4 text-center text-xl font-medium text-secondary-foreground">
                OR
            </h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <CardContent className=" space-y-4 overflow-auto">
                        {/* <ScrollArea className="max-h-[75vh]"> */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Example"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter your full name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="example@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter your email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Password should not be less than 8
                                        characters.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="passwordConfirm"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Both passwords should match.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* </ScrollArea> */}
                    </CardContent>
                    <CardFooter>
                        <Button disabled={isLoading} type="submit">
                            Submit
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
};
