export async function post({request}) {
  const {adId} = await request.json();

  console.log(`Ad Impression: ${adId}`);

  // TODO: Store the impression in your database

  return new Response(JSON.stringify({success: true}), {
    status: 200,
    headers: {'Content-Type': 'application/json'},
  });
}
