import { NextRequest,NextResponse } from "next/server"
import {db, cartTable} from '../../../../sanity/lib/drizzle'
import {v4 as uuid} from 'uuid'
import { cookies } from "next/headers"
import { InferModel, eq, sql } from 'drizzle-orm';

export const GET = async (request: NextRequest) => {
    try {
            const res = await db.select().from(cartTable)
            const data = res.filter(r=>{
                return r.user_id=="4100e0c3-d7c9-48a4-bac2-31a312ea8b3b"
            })
            console.log("Count" + data.length)

            data.map(r=>{
                console.log(r.user_id + " ** " + r.id)
            })
            return NextResponse.json({res})
            
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error in fecting GET API"})
    }

}

export const POST = async (request: NextRequest) => {
    const req = await request.json();

    const uid = uuid();
    const setCookies = cookies();
    const user_id = cookies().get("user_id")

    console.log("POST1")
    console.log(user_id);
    
    if (!user_id)
    {
        console.log("POST 2")
        setCookies.set("user_id", uid)    
        console.log(cookies().get("user_id"))    
    }


    try {
            const res = await db.insert(cartTable).values({
                product_id: req.product_id,
                quantity: 1,
                user_id: cookies().get("user_id")?.value as string

            }).returning();
            return NextResponse.json({res})
    } catch (error) {
            console.log(error)
        return NextResponse.json({message: "something went wrong"})
    }

}