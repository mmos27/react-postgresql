// pages/api/fish.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { FISHSIZE, FISHSPECIES } = req.body;

    try {
      const fish = await prisma.fish_data.create({
        data: {
          FISHSIZE: parseFloat(FISHSIZE),
          FISHSPECIES,
        },
      });
      res.status(200).json(fish);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: '登録に失敗しました' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
