import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  openGraph: {
    images: [
        {
            url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW58ZW58MHx8MHx8fDA%3D',
            alt: 'Mountains and River in Japan',
        },
    ],
    title: 'Japan Adventure Page',
  }
}

const JapanAdventurePage = () => {
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
            <h1 className="text-4xl font-bold mb-4">Discovering the Wonders of Japan</h1>
            <p className="text-lg text-gray-600">An unforgettable journey through nature and history.</p>
        </header>

        <section className="mb-8">
            <Image 
            src="/japan-city-unsplash.jpg" 
            alt="A serene landscape of Japanese mountains and river"
            width={800} 
            height={500}
            className="rounded-lg shadow-md"
            priority
            />
            <p className="text-sm text-gray-500 mt-2">Photo by Jane Doe on Unsplash</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Day 1: Hiking in the Japanese Alps</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            The Japanese Alps offer stunning views of rugged peaks, clear rivers, and lush forests. Our hike through Kamikochi Valley was the highlight of the trip.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Day 2: Exploring Nagano’s Historic Temples</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            We visited Zenko-ji Temple in Nagano, one of the most important pilgrimage sites in Japan. The rich history and beautiful architecture made it a must-see destination.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Day 3: Relaxing in Onsen Hot Springs</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            After our hikes, we relaxed in the famous hot springs of Hakone, soaking in the healing waters with views of Mount Fuji in the distance.
            </p>
        </section>

        <footer className="mt-12 text-center">
            <p className="text-gray-600">Published on September 17, 2024</p>
        </footer>
        </div>
    </>
  );
}

export default JapanAdventurePage;

