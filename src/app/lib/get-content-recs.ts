export async function getContentRecs(recsKey: string, numberOfRecs: number) {
    const userId = 'user123';
    // const recsKey = 'H9V3VUWCHRVGRLP1QBLY';
    // const numberOfRecs = 3;

    // Chris' cloudflare endpoint
    const url = `https://fxrestapi.optidemo.com/api/content_recommendations?visitor_id=${userId}&key=${recsKey}&rpp=${numberOfRecs}`

    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Recommendations:', data);
        return data;
    } catch (error) {
        console.error('Error fetching content recommendations:', error);
        return null;
    }
}