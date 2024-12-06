import { Ticket } from '../models/ticket';
export const seedTickets = async () => {
    try {
        await Ticket.bulkCreate([
            { name: 'Design landing page', status: 'In Progress', description: 'Create wireframes and mockups for the landing page.', assignedUserId: 1 },
            { name: 'Set up project repository', status: 'Done', description: 'Create a new repository on GitHub and initialize it with a README file.', assignedUserId: 2 },
            { name: 'Implement authentication', status: 'Todo', description: 'Set up user authentication using JWT tokens.', assignedUserId: 1 },
            { name: 'Test the API', status: 'Todo', description: 'Test the API using Insomnia.', assignedUserId: 1 },
            { name: 'Deploy to production', status: 'Todo', description: 'Deploy the application to Render.', assignedUserId: 2 },
        ]);
        console.log('Tickets seeded successfully.');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding tickets:', error);
        process.exit(1);
    }
};
seedTickets();