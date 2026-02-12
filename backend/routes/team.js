const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Get all team members
router.get('/', async (req, res) => {
    try {
        const team = await Team.find();
        res.json(team);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed team data
router.post('/seed', async (req, res) => {
    try {
        const teamMembers = [
            {
                name: 'Justice Essoun Baah',
                position: 'Founder & CEO',
                bio: 'Founded JEBP Construction in 2020 with a vision to provide quality construction services in Ghana.',
                joinedYear: 2020,
                founder: true,
                social: {
                    linkedin: '#',
                    twitter: '#',
                    email: 'justice@jebpconstruction.com'
                }
            },
            {
                name: 'Theophilus Baah',
                position: 'Operations Director',
                bio: 'Over 15 years of experience in construction management and scaffold engineering.',
                joinedYear: 2020,
                founder: false,
                social: {
                    linkedin: '#',
                    twitter: '#',
                    email: 'theophilus@jebpconstruction.com'
                }
            },
            {
                name: 'Stephen Takyi Baah',
                position: 'Head of Security Solutions',
                bio: 'Specialist in security door installation and access control systems.',
                joinedYear: 2020,
                founder: false,
                social: {
                    linkedin: '#',
                    twitter: '#',
                    email: 'stephen@jebpconstruction.com'
                }
            },
            {
                name: 'Benjamin Baah',
                position: 'Scaffolding Specialist',
                bio: 'Expert in scaffold design, safety compliance, and equipment maintenance.',
                joinedYear: 2020,
                founder: false,
                social: {
                    linkedin: '#',
                    twitter: '#',
                    email: 'benjamin@jebpconstruction.com'
                }
            }
        ];
        
        await Team.deleteMany();
        await Team.insertMany(teamMembers);
        res.json({ message: 'Team seeded successfully', team: teamMembers });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;