# MyBookmarks

MyBookmarks is a web application designed to help users organize and store frequently accessed services, tools, and pages in one central location. Whether it's streaming platforms, learning subscriptions, shopping sites, or software tools, MyBookmarks ensures quick and efficient access to your most-used resources.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Styling**: Tailwind CSS
- **Storage**: Supabase Storage
- **Forms**: React Hook Form
- **Validation**: Zod
- **Hosting**: Vercel

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/SilentWolf27/my-bookmarks.git
cd my-bookmarks
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file and add the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

AUTH_GITHUB_CLIENT_ID=
AUTH_GITHUB_CLIENT_SECRET=
AUTH_GITHUB_REDIRECT_URI=
EMAIL_CONFIRMATION_REDIRECT_URI=
```

4. Run the development server

```bash
npm run dev
```

## 📝 Features

### Authentication:

  - ✅ Email/Password authentication with account verification
  - ✅ GitHub OAuth integration
  - ✅ Protected routes via middleware
  - ✅ Email verification flow

### Collections:

- ✅ Create new collections
- ✅ Nested collections support
- 🚧 Edit collection details (In Progress)
- 🚧 Delete collections (In Progress)
- 🚧 Reorder collections (Planned)

### Bookmarks:

  - ✅ Create and edit bookmarks
  - ✅ Title, URL, and description fields
  - ✅ Search functionality
  - ✅ Favorite bookmarks feature
  - 🚧 Tags system (Planned)
  - 🚧 Bulk operations (Planned)

