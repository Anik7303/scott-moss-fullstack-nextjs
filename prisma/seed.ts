import { db } from '@/lib/db';
import { generateRandomNumber } from '@/lib/utils';
import { TASK_STATUS } from '@prisma/client';

function getRandomTaskStatus() {
  const statuses = [
    TASK_STATUS.NOT_STARTED,
    TASK_STATUS.STARTED,
    TASK_STATUS.FINISHED,
  ];
  const randomIndex = generateRandomNumber(statuses.length);
  return statuses[randomIndex];
}

async function main() {
  const user = await db.user.upsert({
    where: { email: 'user@email.com' },
    update: {},
    create: {
      firstName: 'User',
      lastName: 'Person',
      email: 'user@email.com',
      password: 'randompassword',
      projects: {
        create: new Array(generateRandomNumber(20)).fill(1).map((_, index) => ({
          name: `Project ${index}`,
          due: new Date(2023, 7, 31),
        })),
      },
    },
    include: {
      projects: true,
    },
  });

  const tasks = await Promise.all(
    user.projects.map((project) => {
      return db.task.createMany({
        data: new Array(generateRandomNumber(10)).fill(1).map((_, index) => ({
          name: `Task ${index}`,
          ownerId: user.id,
          projectId: project.id,
          description: `Everything that describes task ${index}`,
          status: getRandomTaskStatus(),
        })),
      });
    })
  );

  console.log({ user, tasks });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
