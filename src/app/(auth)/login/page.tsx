import { SignInWithGithub } from "@/actions/auth/github";

export default function LoginPage() {
  return (
    <main>
      <form action={SignInWithGithub}>
        <button type="submit">Sign in with GitHub</button>
      </form>
    </main>
  );
}
