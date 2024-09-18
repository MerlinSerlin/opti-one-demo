import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  openGraph: {
    images: [
        {
            url: 'https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphcGFufGVufDB8fDB8fHww',
            alt: 'Japanese Temple in a Serene Forest',
        },
    ],
    title: 'The Timeless Beauty of Japanese Temples',
  }
}

const TemplesOfJapanPage = () => {

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
            <h1 className="text-4xl font-bold mb-4">The Timeless Beauty of Japanese Temples</h1>
            <p className="text-lg text-gray-600">Exploring the architectural and spiritual wonders of Japans ancient temples.</p>
        </header>

        <section className="mb-8">
            <Image 
            src="/japan-temple-unsplash.jpg" 
            alt="A traditional Japanese temple surrounded by lush greenery"
            width={800} 
            height={500}
            className="rounded-lg shadow-md"
            priority
            />
            <p className="text-sm text-gray-500 mt-2">Photo by Jane Doe on Unsplash</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Kinkaku-ji: The Golden Pavilion</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Kinkaku-ji, located in Kyoto, is one of the most famous temples in Japan. Known as the Golden Pavilion, this Zen Buddhist temple is covered in gold leaf and surrounded by a stunning reflective pond and meticulously maintained gardens. The beauty of Kinkaku-ji changes with the seasons, making it a must-visit year-round.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Senso-ji: Tokyo’s Oldest Temple</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Senso-ji, located in the Asakusa district of Tokyo, is the citys oldest and most visited temple. Founded in 645 AD, Senso-ji is dedicated to Kannon, the goddess of mercy. Visitors are greeted by the iconic Kaminarimon gate, which leads to a vibrant market street before reaching the grand temple itself.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Fushimi Inari Shrine: The Path of a Thousand Torii</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Although technically a Shinto shrine, Fushimi Inari Taisha is an essential part of Japans spiritual landscape. Located in Kyoto, it is famous for its thousands of bright red torii gates that wind up the forested slopes of Mount Inari. This sacred site has been a pilgrimage destination for centuries and offers visitors a serene escape from the bustle of the city.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Todai-ji: The Great Buddha of Nara</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Todai-ji, located in Nara, is home to the worlds largest bronze statue of the Buddha. This ancient temple, built in the 8th century, stands at the center of Nara Park, where friendly deer roam freely. The main hall, Daibutsuden, is one of the largest wooden structures in the world, and the temple holds a special place in Japans religious history.
            </p>
        </section>

        <footer className="mt-12 text-center">
            <p className="text-gray-600">Published on September 17, 2024</p>
        </footer>
        </div>
    </>
  );
}

export default TemplesOfJapanPage;
