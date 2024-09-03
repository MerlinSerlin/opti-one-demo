import { createInstance } from "@optimizely/optimizely-sdk";

import { UserAttributes } from "@optimizely/optimizely-sdk";

export interface MakeOptiDecisionProps {
    sdkKey: string;
    userID: string;
    flagKey: string;
    attributes?: UserAttributes | null;
}

export async function makeOptiDecision(decisionData: MakeOptiDecisionProps) {
    const { sdkKey, userID, attributes, flagKey } = decisionData;
    const validAttributes: UserAttributes | undefined = attributes && Object.keys(attributes).length > 0 ? attributes : undefined;
    const optimizelyClient = createInstance({ sdkKey });
    try {
      if (!optimizelyClient) {
        console.error('Failed to create Optimizely client.');
        return null;
    }
      const { success, reason } = await optimizelyClient.onReady();

      if (success) {
          // Create the Optimizely user context and make a decision
          const user = optimizelyClient?.createUserContext(userID, validAttributes);
          const fetched = await user?.fetchQualifiedSegments()
          console.log(fetched) // returns bool value
          console.log(user?.qualifiedSegments) // Updated qualified segments for target user
          const decision = user?.decide(flagKey);
          return decision || null;  // Return the decision or null if it fails
      } else {
          console.error(`Optimizely SDK failed to initialize: ${reason}`);
          return null;
      }
  } catch (error) {
      console.error(`An error occurred: ${error}`);
      return null;
  }
}