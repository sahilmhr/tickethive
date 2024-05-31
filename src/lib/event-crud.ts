import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export enum EventOperation {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    READ = "READ"
}


export async function eventCrud(operation:any, event :any){
    try {
        switch (operation) {
            case EventOperation.CREATE:
                return await createEvent(event);
            case EventOperation.UPDATE:
                // Implement update operation if needed
                break;
            case EventOperation.DELETE:
                // Implement delete operation if needed
                break;
            case EventOperation.READ:
                return await getAllEvents();
                break;
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

async function createEvent(event:any){
    try {
        const {name, date, description, location, ticket_price, currency} = event;
        const new_event = await prisma.event.create({
            data: { name, description, location, date : new Date(date), ticket_price, currency }
        });
        return new_event;
    } catch (error: any) {
        console.error("Error creating event:", error.message);
        return null;
    }
}

async function getAllEvents(){
    try {
        return await prisma.event.findMany();
    } catch (error: any) {
        console.error("Error creating event:", error.message);
        return null;
    }
}