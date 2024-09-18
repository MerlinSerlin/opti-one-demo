'use client'

import { MakeOptiDecisionProps, makeOptiDecision } from './lib/make-opti-decision';
import { UserAttributes } from '@optimizely/optimizely-sdk';
import { getContentRecs } from './lib/get-content-recs';
// import Image from 'next/image';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [contentRecs, setContentRecs] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [attributes, setAttributes] = useState<UserAttributes | null>(null);

  async function fetchContentRecommendations() {
    try {
      // Step 1: Get decision data from Optimizely
      const decisionData = {
        sdkKey: process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY || '',
        userID: 'user123',
        flagKey: 'content-recs',
        attributes: attributes,
      };
      
      const decision = await makeOptiDecision(decisionData);

      if (!decision) {
        setError('No decision was made.');
        setLoading(false);
        return;
      }

      // Step 2: Extract `numRecs` and `recsKey` from decision
      const numberOfRecs: any = decision?.variables['numRecs'] ?? 3;
      const recsKey: any = decision?.variables['keyValue'] ?? 'H9V3VUWCHRVGRLP1QBLY';

      // Step 3: Fetch content recommendations using decision data
      const recommendations = await getContentRecs(recsKey, numberOfRecs);

      if (!recommendations) {
        setError('No recommendations available.');
        setLoading(false);
        return;
      }

      // Step 4: Set recommendations to state
      setContentRecs(recommendations);
    } catch (err) {
      console.error(err);
      setError('An error occurred while fetching recommendations.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const cookieExists = document.cookie.includes('visited-japan-page=true');
    if (cookieExists) {
      setAttributes({ visitedJapanPage: true });
    }
    else setAttributes({ visitedJapanPage: false });
  }, []);

  useEffect(() => {
    // Only fetch recommendations if attributes are set
    if (attributes) {
      fetchContentRecommendations();
    }
  }, [attributes]); 

  if (error) {
    return <p>Error: {error}</p>;
  }

  
    return (
      <>
        <div className="max-w-4xl mx-auto p-8">
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-6">Welcome to Adventure Japan</h1>
            <p className="text-lg text-gray-700">
              Embark on a journey through Japan like never before. Our website is dedicated to adventurers and enthusiasts of Japanese culture. Whether you're exploring bustling cities, savoring exquisite cuisine, or discovering serene temples, we have something for everyone.
            </p>
          </header>
  
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Explore Our Blog</h2>
            <p className="text-lg text-gray-700 mb-6">
              Dive into our blog to find detailed guides, captivating stories, and expert recommendations. Join us as we explore the rich and diverse world of Japan.
            </p>
            <Link href="/blog" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700">
              Visit the Blog
            </Link>
          </section>

          <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Content Recommendations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contentRecs && contentRecs.map((rec: any) => (
              <div
                className={loading ? 'hidden' : 'relative bg-white shadow-lg rounded-lg overflow-hidden'}
                key={rec.title}
              >
                <img
                  src={`https:${rec.main_image_url}`}
                  alt={rec.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{rec.title}</h3>
                  <p className="text-gray-700">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
          <footer className="mt-12 text-center">
            <p className="text-gray-600">© 2024 Adventure Japan. All rights reserved.</p>
          </footer>
        </div>
      </>
    );
}