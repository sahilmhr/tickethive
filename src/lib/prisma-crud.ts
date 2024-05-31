import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export enum Operation {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    READ = "READ",
}

interface User {
    email : string;
    password : string;
}

function exclude<User, Key extends keyof User>(user : any,keys : any) : User {
    return Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key))
    ) as User;
}

/**
 * Executes the specified operation on the user data.
 * @param user The user data.
 * @param operation The operation to perform.
 * @returns A message indicating the result of the operation.
 */
export async function main(user: User, operation: Operation) {
    try {
        switch (operation) {
            case Operation.CREATE:
                return await createUser(user);
            case Operation.UPDATE:
                // Implement update operation if needed
                break;
            case Operation.DELETE:
                // Implement delete operation if needed
                break;
            case Operation.READ:
                return await loginUser(user);
            default:
                throw new Error("Invalid operation");
        }
    } catch (error: any) {
        console.error("An error occurred:", error.message);
        throw new Error("Operation failed");
    } finally {
        await prisma.$disconnect();
    }
}

/**
 * Creates a new user.
 * @param user The user data.
 * @returns A message indicating the result of the operation.
 */
async function createUser(user: User) {
    try {
        const existingUser = await prisma.user.findUnique({
            where: { email: user.email }
        });
        if (existingUser) {
            return `User with email ${user.email} already exists`;
        }
        await prisma.user.create({
            data: { email: user.email, password: user.password }
        });
        return `User created successfully with email ${user.email}`;
    } catch (error: any) {
        console.error("Error creating user:", error.message);
        throw new Error("User creation failed");
    }
}

/**
 * Logs in a user.
 * @param user The user data.
 * @returns An object containing a message and a boolean indicating success.
 */
async function loginUser(user: User) : Promise<any> {
    try {
        const userData = await prisma.user.findFirst({
            where: { email: user.email }
        });
        if (!userData) {
            return { message: `No user found with email ${user.email}`, success: false, user : null };
        }
        if (userData.password !== user.password) {
            return { message: `Incorrect password for user with email ${user.email}`, success: false, user: null };
        }
        const data = exclude(user, ['password']);
        return { message: `User with email ${user.email} logged in successfully`, success: true, user : data };
    } catch (error: any) {
        console.error("Error logging in:", error.message);
        return { message: "Login failed", success: false, user : null };
    }
}