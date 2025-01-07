```javascript
// pages/about.js
import {getServerSideProps} from 'next';

export default function About({customVar}) {
  console.log(customVar); // Access the environment variable here

  return (
    <div>
      <h1>About Page</h1>
      <p>Custom Variable: {customVar}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const customVar = process.env.MY_CUSTOM_VAR; 
  return {
    props: {
      customVar,
    },
  };
}
```