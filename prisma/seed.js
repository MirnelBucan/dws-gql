const { prisma } = require('../src/generated/prisma-client')

async function main() {
  await prisma.createUser({
    name: 'Dala',
    email: 'dala@test.io',
    posts: {
      create: [
        {
          title: 'Pozdrav Selma :D',
          content: 'Proba nekog posta',
          published: true,
        },
      ],
    },
  })

  await prisma.createUser({
    name: 'Mirnel',
    email: 'mirnel@test.io',
    posts: {
      create: [
        {
          title: 'Test post',
          content: 'test',
          published: true,
          comments: {
            create: [
              {
                text: 'Test comment 💯',
                writtenBy: {
                  connect: { email: 'dala@test.io' },
                },
              },
            ],
          },
        },
        {
          title: 'Test naslov',
          content: 'test',
        },
      ],
    },
  })
}

main()
