```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause the error in Next.js 15
  console.log(process.env.MY_CUSTOM_VAR);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```