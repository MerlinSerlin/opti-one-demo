import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Homepage',
  description: 'Explore our latest blog posts about Japan.',
};

const BlogHomepage = () => {
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
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-lg text-gray-600">Explore our latest posts about Japan and discover more about its cities, food, and temples.</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Blog Posts</h2>
          <ul className="list-disc list-inside">
            <li className="mb-4">
              <Link href="/blog/japan-city" className="text-blue-600 hover:underline">
                Exploring Japanese Cities
              </Link>
              <p className="text-gray-600">Dive into the vibrant urban landscapes of Japans most exciting cities.</p>
            </li>
            <li className="mb-4">
              <Link href="/blog/japan-food" className="text-blue-600 hover:underline">
                A Culinary Journey Through Japanese Food
              </Link>
              <p className="text-gray-600">Discover the diverse and delicious world of Japanese cuisine.</p>
            </li>
            <li className="mb-4">
              <Link href="/blog/japan-temple" className="text-blue-600 hover:underline">
                Exploring Japanese Temples
              </Link>
              <p className="text-gray-600">Experience the tranquility and beauty of Japans historic temples.</p>
            </li>
          </ul>
        </section>

        <footer className="mt-12 text-center">
          <p className="text-gray-600">Published on September 17, 2024</p>
        </footer>
      </div>
    </>
  );
};

export default BlogHomepage;

