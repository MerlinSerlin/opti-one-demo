'use client'

import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';

const TravelPage = () => {
    const imageUrl = 'https://unsplash.com/photos/canal-between-cherry-blossom-trees-8sOZJ8JF0S8';

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

        <Head>
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content="Cherry Blossoms Over Water" />
            <title>Japan Travel Page 1</title>
        </Head>

        <div className="max-w-4xl mx-auto p-8">
        <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Exploring the Beauty of Japan</h1>
            <p className="text-lg text-gray-600">A journey through the land of the rising sun.</p>
        </header>

        <section className="mb-8">
            <Image 
            src="/japan-unsplash.jpg" 
            alt="A beautiful view of Japan"
            width={800} 
            height={500}
            className="rounded-lg shadow-md"
            priority
            />
            <p className="text-sm text-gray-500 mt-2">Photo by John Doe on Unsplash</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Day 1: Arrival in Tokyo</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Tokyo, Japan’s bustling capital, is a perfect blend of ultramodern and traditional.
            From neon-lit skyscrapers to historic temples, this city offers an unforgettable experience.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Day 2: Visiting Mount Fuji</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            On the second day, we embarked on a journey to Mount Fuji, Japan’s tallest peak.
            The view was breathtaking, with the serene surroundings of Lake Kawaguchi offering the perfect spot for reflection.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Day 3: Exploring Kyoto’s Temples</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Kyoto, known for its classical Buddhist temples, beautiful gardens, and traditional wooden houses,
            was our next destination. We visited the iconic Fushimi Inari Shrine and the beautiful Kinkaku-ji, or the Golden Pavilion.
            </p>
        </section>

        <footer className="mt-12 text-center">
            <p className="text-gray-600">Published on September 9, 2024</p>
        </footer>
        </div>
    </>
  );
}

export default TravelPage;
