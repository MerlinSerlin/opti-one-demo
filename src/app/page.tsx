'use client'

import { useEffect, useState } from 'react';
import { MakeOptiDecisionProps, makeOptiDecision } from './lib/make-opti-decision';
import { UserAttributes } from '@optimizely/optimizely-sdk';
import { getContentRecs } from './lib/get-content-recs';
// import Image from 'next/image';
import CardWithImage from '@/components/card-with-image';


export default function Home() {
const [variationKey, setVariationKey] = useState<string | null>(null);
const [attributes, setAttributes] = useState<UserAttributes | null>(null);
const [contentRecs, setContentRecs] = useState<any | null>(null);

  async function getRecs() {
    const recs = await getContentRecs();
    setContentRecs(recs);
  }

  async function fetchDecision() {
    const decisionData: MakeOptiDecisionProps = {
      sdkKey: process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY || '',
      userID: 'user123',
      flagKey: 'test-flag',
      attributes: attributes,
    };

    const decision = await makeOptiDecision(decisionData);
    setVariationKey(decision?.variationKey || null);
  }

  useEffect(() => {
    fetchDecision();
    getRecs();
  }, []);

  return (
    <main className='flex flex-col w-full h-max items-center'>
      <div>
        <h1>Optimizely Decision</h1>
        <p>Variation Key: {variationKey}</p>
      </div>
      <div className='flex flex-col md:flex-row w-full h-full justify-center items-center'>
        {contentRecs && contentRecs.map((rec: any) => (
          <div className='relative flex w-full h-2/5 md:h-4/5 justify-center' key={rec.title}>
            <CardWithImage
              src={`https://${rec.main_image_url}`}
              title={rec.title}
              // description={rec.description}
            />
          </div>
        ))}
      </div>
      
    </main>
  );
}