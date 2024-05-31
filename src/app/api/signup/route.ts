import { Operation, main } from "@/lib/prisma-crud";

export async function POST(req: Request){
    try {
        const request = await req.json();
        const user = await main(request, Operation.CREATE);
        return Response.json({"user": JSON.stringify(user)});
    } catch (error : any) {
        return Response.json({error: error.message})
    }
}