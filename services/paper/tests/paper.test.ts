import * as handler from '../src/paper';

test('hello', async () => {

    const event = { data: 'hello' };
    const context = {};

    const callback = (error, response) => {
        expect(response.statusCode).toEqual(200);
        expect(error).toBe(null);
    };

    await handler.hello(event, context, callback);
    return;
});