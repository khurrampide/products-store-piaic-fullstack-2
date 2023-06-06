import { NextRequest,NextResponse } from "next/server"
import {db, cartTable} from '../../../../sanity/lib/drizzle'
import {v4 as uuid} from 'uuid'
import { cookies } from "next/headers"

export const GET = async (request: Request) => {
    try {
            const res = await db.select().from(cartTable)
            return NextResponse.json({res})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error in fecting GET API"})
    }

}

export const POST = async (request: Request) => {
    const uid = uuid();
    const setCookies = cookies();
    const user_id = cookies().get("user_id")
    
    if (!user_id)
    {
        setCookies.set("user_id", uid)        
    }


    const req = await request.json();
    try {
            const res = await db.insert(cartTable).values({
                product_id: req.product_id,
                quantity: 1,
                user_id: cookies().get("user_id")?.value as string

            }).returning();
            return NextResponse.json({res})
    } catch (error) {
        
    }

}