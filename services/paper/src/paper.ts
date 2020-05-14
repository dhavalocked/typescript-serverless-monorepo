import { success } from "../../../libs/response-lib"

export const hello: any = async (event, _context) => {
    return success({
        status: true,
        message: "Hello from paper service",
        event: event.httpMethod
    })
}