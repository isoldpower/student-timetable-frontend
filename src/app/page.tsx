'use client';

// import {PrivateRoute} from "@/features/auth";
import {useAuthContext} from "@/app/utilities";
import {Button, PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading} from "@/shared/ui-toolkit";
import Link from "next/link";
import {CurrentScheduleView, StudentPreferencesView} from "@/widgets/schedule";

export default function Home() {
    const {user} = useAuthContext();

    return (
        // <PrivateRoute>
            <div className="grid py-10 gap-20">
                <PageHeader className='text-center items-center'>
                    <PageHeaderHeading className="hidden md:block">
                        Build your schedule
                    </PageHeaderHeading>
                    <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
                    <PageHeaderDescription>
                        View your schedule, provide feedback, get recommendations
                        and set preferences so that advisors can help you create a schedule that
                        works for you.
                    </PageHeaderDescription>
                    <PageActions className='flex justify-center'>
                        <Button asChild size="sm">
                            <Link href='#preferences'>Set the preferences</Link>
                        </Button>
                        <Button asChild size="sm" variant="ghost">
                            <Link href="#schedule">See schedule</Link>
                        </Button>
                    </PageActions>
                </PageHeader>
                <section id='preferences'>
                    <StudentPreferencesView userId={user?.id} />
                </section>
                <section id='schedule'>
                    <CurrentScheduleView />
                    {/*<ScheduleFeedbackView />*/}
                    {/*<RecommendationsView />*/}
                </section>
            </div>
        // </PrivateRoute>
    );
}
