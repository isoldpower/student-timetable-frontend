'use client';

import {useAuthContext} from "@/app/utilities";
import {PageHeader, PageHeaderDescription, PageHeaderHeading} from "@/shared/ui-toolkit";
import {
    CurrentScheduleView,
    EditStudentView,
    SearchCourses,
    StudentActions,
    StudentPreferencesView
} from "@/widgets/schedule";
import {AdvisorActions} from "@/widgets/schedule/main-actions";
import {CoursesDataset} from "@/widgets/schedule/courses-dataset";

export default function Home() {
    const {user} = useAuthContext();

    return (
        // <PrivateRoute>
            <div className="flex flex-col py-10 gap-20">
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
                    {user?.type == 'student'
                        ? <StudentActions/>
                        : <AdvisorActions />}
                </PageHeader>
                {user?.type == 'student' && (
                    <>
                        <section id='preferences'>
                            <StudentPreferencesView userId={user?.id} />
                        </section>
                        <section id='schedule'>
                            <CurrentScheduleView />
                            {/*<RecommendationsView />*/}
                        </section>
                    </>
                )}
                {/*{user?.type == 'advisor' && (*/}
                    <div className='flex flex-col gap-32'>
                        <section id='student'>
                            <EditStudentView />
                        </section>
                        <section id='dataset'>
                            <SearchCourses />
                        </section>
                    </div>
                {/*)}*/}
            </div>
        // </PrivateRoute>
    );
}
