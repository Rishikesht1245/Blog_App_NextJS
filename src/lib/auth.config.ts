export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user && !user?.error) {
        token.id = user.id;
        token.isAdmin = user?._doc?.isAdmin;
      } else if (user?.error) {
        token.error = user?.error;
      }
      // token will be caught by the next call back function : session
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token && !token?.error) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      } else if (token?.error) {
        session.error = token?.error;
      }
      return session;
    },
    authorized({ auth, request }: { auth: any; request: any }) {
      const user = auth?.user;
      const isOnAdminPanel = request?.nextUrl?.pathname?.startsWith("/admin");
      const isOnBlogPage = request?.nextUrl?.pathname?.startsWith("/blog");
      const isOnLoginPage = request?.nextUrl?.pathname?.startsWith("/login");

      if (auth?.error) {
        return false;
      }

      if (isOnAdminPanel && !user?.isAdmin) {
        // Only admin can reach the admin dashboard
        return false;
      }

      //Only logged in user can see the blog page
      if (isOnBlogPage && !user) {
        return false;
      }

      //AUthenticated users can't access the login page
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
