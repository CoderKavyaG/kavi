export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'OPTIONS') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY
  
  if (!WAKATIME_API_KEY) {
    return res.status(200).json({ hours: 0, minutes: 0 })
  }
  
  try {
    const response = await fetch(
      'https://wakatime.com/api/v1/users/current/summaries?range=today',
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${WAKATIME_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )
    
    if (!response.ok) {
      return res.status(200).json({ hours: 0, minutes: 0 })
    }
    
    const data = await response.json()
    
    if (data.data && data.data.length > 0 && data.data[0].grand_total) {
      const totalSeconds = data.data[0].grand_total.total_seconds || 0
      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      
      return res.status(200).json({ hours, minutes })
    }
    
    return res.status(200).json({ hours: 0, minutes: 0 })
  } catch (error) {
    return res.status(200).json({ hours: 0, minutes: 0 })
  }
}
