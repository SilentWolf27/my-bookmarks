import { signOut } from "@/actions/auth/signOut";

export default function Home() {
  return (
    <main>
      <form action={signOut}>
        <button type="submit">Sign out</button>
      </form>
    </main>
  );
}
