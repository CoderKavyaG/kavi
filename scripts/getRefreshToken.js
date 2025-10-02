// One-time setup script to get your Spotify refresh token
// Run this ONCE to get the refresh token, then add it to your environment variables

const SPOTIFY_CLIENT_ID = 'eb02480e8e464c6b86e25bb6ff6d7260';
const SPOTIFY_CLIENT_SECRET = '833e5e422bbe4259a71bcf2d0f41aa82';
const REDIRECT_URI = 'https://coderkavyag.me/setup'; // Special setup endpoint

console.log('🎵 Spotify Refresh Token Setup');
console.log('================================');
console.log('');
console.log('Step 1: Go to this URL and authorize:');
console.log('');

const authUrl = new URL('https://accounts.spotify.com/authorize');
authUrl.searchParams.append('client_id', SPOTIFY_CLIENT_ID);
authUrl.searchParams.append('response_type', 'code');
authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
authUrl.searchParams.append('scope', 'user-read-currently-playing user-read-playback-state');
authUrl.searchParams.append('show_dialog', 'true');

console.log(authUrl.toString());
console.log('');
console.log('Step 2: After authorization, you\'ll be redirected to:');
console.log('https://coderkavyag.me/setup?code=AUTHORIZATION_CODE');
console.log('');
console.log('Step 3: Copy the "code" parameter from the URL and run:');
console.log('node getRefreshToken.js YOUR_AUTHORIZATION_CODE');

// If authorization code is provided as argument
if (process.argv[2]) {
  const authCode = process.argv[2];
  
  // Exchange authorization code for refresh token
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: REDIRECT_URI,
    }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.refresh_token) {
      console.log('✅ Success! Your refresh token is:');
      console.log('');
      console.log(data.refresh_token);
      console.log('');
      console.log('Add this to your environment variables:');
      console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
    } else {
      console.log('❌ Error:', data);
    }
  })
  .catch(error => {
    console.log('❌ Error:', error);
  });
}