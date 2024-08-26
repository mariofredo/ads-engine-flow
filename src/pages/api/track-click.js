export async function post({request}) {
  const {adId} = await request.json();

  console.log(`Ad Click: ${adId}`);

  // TODO: Store the click in your database

  return new Response(JSON.stringify({success: true}), {
    status: 200,
    headers: {'Content-Type': 'application/json'},
  });
}
