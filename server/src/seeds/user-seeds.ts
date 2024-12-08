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
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
};

