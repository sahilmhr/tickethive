import { EventOperation, eventCrud } from "@/lib/event-crud";

export async function POST(req: Request){
    const data = await req.json();
    const response = await eventCrud(data, EventOperation.CREATE);
    return Response.json(response);
}

export async function GET(req: Request){
    const data = await eventCrud(EventOperation.READ, null);
    return Response.json(data);
}