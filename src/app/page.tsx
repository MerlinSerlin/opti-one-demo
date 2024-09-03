'use client'

import { useEffect, useState } from 'react';
import { MakeOptiDecisionProps, makeOptiDecision } from './lib/make-opti-decision';
import { UserAttributes } from '@optimizely/optimizely-sdk';
import { getContentRecs } from './lib/get-content-recs';

export default function Home() {
const [variationKey, setVariationKey] = useState<string | null>(null);
const [attributes, setAttributes] = useState<UserAttributes | null>(null);

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
    getContentRecs();
  }, []);

  return (
    <div>
      <h1>Optimizely Decision</h1>
      <p>Variation Key: {variationKey}</p>
    </div>
  );
}