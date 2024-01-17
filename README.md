This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Development with Prisma

Local dev uses `.env.local` for storing environment variables. Next.js by default uses this file to load environment variables, but Prisma uses `.env`. Therefore, there is a little bit of extra work to get Prisma to load `.env.local`.

1. Install `dotenv-cli` globally.

```sh
npm i -g dotenv-cli
```

2. Add custom scripts to `package.json`, e.g:

```json
  "scripts": {
    ...,
    "prismaReset": "dotenv -e .env.local npx prisma migrate reset",
    "prismaPush": "dotenv -e .env.local npx db push",
    "prismaGenerate": "dotenv -e .env.local npx prisma generate",
  },
```

3. After making schema changes, run the custom scripts.
