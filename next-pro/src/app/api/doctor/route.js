import { connectToDB } from '@/lib/db';


export default async function handler(req, res) {
  if (req.method === 'GET') {
     await connectToDB();
    const client = new connectToDB(uri);
    try {
      await client.connect();
      const database = client.db('your_database_name');
      const doctorsCollection = database.collection('doctors');
      const doctors = await doctorsCollection.find({}).toArray();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch doctors data' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
