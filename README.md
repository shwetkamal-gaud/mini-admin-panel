This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# Mini Admin Panel – Next.js + Reqres API

A fully responsive mini admin dashboard built using **Next.js (App Router)**, **Tailwind CSS**, and the **Reqres mock API**. This project demonstrates real-world frontend features like authentication, route protection, state management, and interactive UI.

---

## Features

 JWT-based Login / Signup  
 Protected Dashboard Route  
 Users Table with Pagination  
 User Details Modal  
 Logout  
 Light/Dark Mode Toggle (with Context + Tailwind)  
 Responsive Layout (Mobile/Desktop)  
 Loading and Error States  
 Clean, polished Yellow/Black/Gray theme  
 Bonus: Motion (Framer Motion)  
 Bonus: Token Expiry Auto-Logout (10min)

---

## Tech Stack

- **Next.js App Router**
- **Tailwind CSS** (Dark mode via `class`)
- **React Context API** (Auth + Theme)
- **Framer Motion** (for subtle animations)
- **Reqres API** (https://reqres.in)

---

##  Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/shwetkamal-gaud/mini-admin-panel.git
cd mini-admin-panel
```

### 2. Install the dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
