import { User } from '../models/user.js';

export const seedUsers = async () => {
  try {
    await User.bulkCreate(
      [
        { username: 'JollyGuru', password: 'password' },
        { username: 'SunnyScribe', password: 'password' },
        { username: 'RadiantComet', password: 'password' },
      ],
      { individualHooks: true }
    );
    console.log('Users seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

seedUsers();
