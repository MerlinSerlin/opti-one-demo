'use client';

import Image from 'next/image';
import Script from 'next/script';

const BlogPage = () => {
  return (
    <>
      <Script id="idio-tracking" strategy="afterInteractive">
        {`
          _iaq = [
              ['client', '6ee9c959107d44be8f6fd7ddcc8b1eef'],
              ['delivery', 1400],
              ['track', 'consume']
          ];

          !function(d,s){var ia=d.createElement(s);ia.async=1,s=d.getElementsByTagName(s)[0],ia.src='//s.usea01.idio.episerver.net/ia.js',s.parentNode.insertBefore(ia,s)}(document,'script');
        `}
      </Script>

      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Building a Website: A Step-by-Step Guide</h1>
          <p className="text-lg text-gray-600">Published on September 14, 2024</p>
        </header>

        <section className="mb-8">
          <Image 
            src="/build-website-unsplash.webp" 
            alt="Building a website" 
            width={800} 
            height={500} 
            className="rounded-lg shadow-md" 
            priority
          />
          <p className="text-sm text-gray-500 mt-2">Photo by John Doe on Unsplash</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Step 1: Plan Your Website</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Planning is the first and most important step in building a website. 
            Before diving into development, define your website’s purpose, audience, and key features.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Step 2: Choose Your Technology Stack</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Next, decide on the technology stack for your website. Using tools like Next.js for server-side rendering and Tailwind CSS for styling can greatly improve development speed and performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Step 3: Design Your Layout</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Good design is key to creating a user-friendly website. 
            Tools like Figma can help you create responsive designs that look great on any device.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Step 4: Develop Your Website</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Now it’s time to start coding. Set up your project with the appropriate frameworks and build the site’s structure. Be sure to test thoroughly as you go.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Step 5: Deploy and Maintain</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Finally, deploy your site on a reliable platform like Vercel or Netlify. Make sure to monitor and maintain your site regularly to ensure it stays fast and secure.
          </p>
        </section>

        <footer className="mt-12 text-center">
          <p className="text-gray-600">Published on September 14, 2024</p>
        </footer>
      </div>
    </>
  );
}

export default BlogPage;

