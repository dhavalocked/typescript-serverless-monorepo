import { success } from "../../../libs/response-lib"

export const hello: any = async (event, _context) => {
    return success({
        status: true,
        message: "Hello from user service",
        event: event.httpMethod
    })
}