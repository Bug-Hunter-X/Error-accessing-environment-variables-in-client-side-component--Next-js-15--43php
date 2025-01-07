# Next.js 15 Environment Variable Access Error

This repository demonstrates a common error encountered when working with environment variables in Next.js 15 applications. Specifically, it highlights the issue of accessing environment variables within client-side components.

## Problem

Attempting to access environment variables using `process.env` directly within client-side components in Next.js 15 will result in an error. This is because these variables are not available on the client-side for security reasons.

## Solution

The solution involves utilizing the `getServerSideProps` or `getStaticProps` methods to fetch the required environment variables from the server-side and pass them as props to the component. This ensures that the environment variables are accessed and handled securely within the server environment.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`. You will observe an error in the console, indicating the environment variable is not found.
5. The solution file demonstrates the appropriate approach using getServerSideProps.