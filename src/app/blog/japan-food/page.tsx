import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    images: [
        {
            url: 'https://images.unsplash.com/photo-1653565084296-5ec4398878da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphcGFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
            alt: 'A variety of Japanese dishes',
        },
    ],
    title: 'A Culinary Journey Through Japanese Food',
  }
}

const JapaneseFoodPage = () => {
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
            <h1 className="text-4xl font-bold mb-4">A Culinary Journey Through Japanese Food</h1>
            <p className="text-lg text-gray-600">Discover the rich and diverse flavors of Japanese cuisine.</p>
        </header>

        <section className="mb-8">
            <Image 
            src="/japan-food-unsplash.jpg" 
            alt="A variety of Japanese dishes"
            width={800} 
            height={500}
            className="rounded-lg shadow-md"
            priority
            />
            <p className="text-sm text-gray-500 mt-2">Photo by Unsplash</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Sushi: Japan’s Iconic Dish</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Sushi is perhaps the most famous Japanese dish. It typically consists of vinegared rice paired with a variety of ingredients including raw fish, vegetables, and sometimes tropical fruits. Sushi can be enjoyed in many forms, such as nigiri (rice topped with fish), sashimi (sliced raw fish), and maki (rolled sushi).
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Ramen: A Hearty Noodle Soup</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Ramen is a popular Japanese noodle soup that features a savory broth, tender noodles, and a variety of toppings such as sliced pork, green onions, and boiled eggs. Each region in Japan has its own unique style of ramen, from the rich tonkotsu (pork bone) broth in Kyushu to the lighter shoyu (soy sauce) ramen in Tokyo.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Tempura: Light and Crispy Fried Delights</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Tempura is a dish that involves batter-dipping seafood or vegetables and deep-frying them until crispy and golden. This technique provides a light and airy coating that enhances the natural flavors of the ingredients. Tempura is often served with a dipping sauce and grated daikon radish.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Takoyaki: Savory Octopus Balls</h2>
            <p className="text-lg leading-relaxed text-gray-700">
            Takoyaki is a beloved street food that consists of small, round balls made from a batter of flour and filled with chopped octopus, tempura scraps, and pickled ginger. These savory treats are cooked in a special takoyaki pan and are typically served with takoyaki sauce, bonito flakes, and a sprinkle of green onions.
            </p>
        </section>

        <footer className="mt-12 text-center">
            <p className="text-gray-600">Published on September 17, 2024</p>
        </footer>
        </div>
    </>
  );
}

export default JapaneseFoodPage;
