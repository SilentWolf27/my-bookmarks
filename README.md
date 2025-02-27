# MyBookmarks

MyBookmarks is a simple web application designed to organize and store frequently accessed services and pages in one central location. It helps users manage and quickly access their streaming services, learning subscriptions, shopping sites, and software tools.

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

  - [X] Users can sign up and login to the application using Email/Password authentication.
  - [X] At registration, an email is sent to the user to verify their account.
  - [X] Users can sign in to the application using GitHub authentication.
  - [X] Protected routes using middleware to prevent unauthenticated users from accessing certain pages or services.

### Collections:

- [X] Users can create collections to organize their bookmarks. A collection is a group of bookmarks that are related to each other.
- [] Other CRUD operations for collections are not implemented yet.
- [X] Users can add a child collection to a collection.

### Bookmarks:

  - [X] Users can add and edit bookmarks.
  - [X] Each bookmark includes a title, URL, and description to help users identify and access the desired service or page.
  - [X] Users can easily search for bookmarks by title to quickly find the desired link.
  - [X] Users cand mark bookmarks as favorites to access them quickly from the main page.
  - [] Tags are not implemented yet.

