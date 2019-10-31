import bycrpt from 'bcryptjs';

const passwordHasher = async (password, salt) => {
    const hashed = await bycrpt.hash(password, salt);
    return hashed;
}

const matchPassword = async (password, hashedPassword) => {
    const foundPassword = await bycrpt.compareSync(password, hashedPassword);
    return foundPassword;
}

export { passwordHasher, matchPassword }