import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: 'b640f3c1-de8a-4934-97fd-80326ed96e98',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})