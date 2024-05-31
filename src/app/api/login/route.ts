import { Operation, main } from "@/lib/prisma-crud";

export async function POST(req: Request){
    try {
        const request = await req.json();
        console.log(request);
        const data = await main(request, Operation.READ);
        return Response.json(data);
    } catch (error : any) {
        return Response.json({error: error.message})
    }
}