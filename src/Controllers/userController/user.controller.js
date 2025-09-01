import db from '../../models/index.js';

const CreateUser = async (req, res) => {
    try {
        const{ name, email} = req.body;

        if(!name || !email){
            return res.status(400).json({ message: 'Name and email are required' });
        }

        const user = await db.User.findAll({ where: { email: email} })
        if(user.length > 0){
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = await db.User.create({ name, email });
        if(!newUser) {
            return res.status(500).json({ message: 'Something went wrong' });
        }

        return res.status(201).json("New user created Succesfully", newUser);

    }
    catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export { CreateUser };