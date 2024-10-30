import {Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label} from "@/shared/ui-toolkit";
import Link from "next/link";
import {websiteRoutes} from "@/app/routing";

export function SignupForm() {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Sign up</CardTitle>
                <CardDescription>
                    Provide all the data marked with (*) to create an account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="firstName">Name *</Label>
                        <Input
                            id="firstName"
                            type="text"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="lastName">Surname *</Label>
                        <Input
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            required/>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="johndoe@webster.edu"
                            required/>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password *</Label>
                        <Input
                            id="password"
                            type="password"
                            required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="repeatPassword">Repeat Password *</Label>
                        <Input
                            id="repeatPassword"
                            type="password"
                            required />
                    </div>
                    <Button type="submit" className="w-full">
                        Sign up
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href={websiteRoutes.auth.login} className="underline">
                        Log in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}