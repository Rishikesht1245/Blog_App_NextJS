import { handleGitHubLogin, loginUser } from "@/lib/actions";

export default async function LoginPage() {
  return (
    <div>
      <form action={handleGitHubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={loginUser}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login with Credentials</button>
      </form>
    </div>
  );
}
