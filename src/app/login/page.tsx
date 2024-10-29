import { LoginForm } from "@/widgets/auth"
import {ExcludeHeader} from "@/shared/utils";

export default function Page() {
  return (
    <ExcludeHeader className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </ExcludeHeader>
  )
}
