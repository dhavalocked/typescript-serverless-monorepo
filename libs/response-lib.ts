import { APIGatewayProxyResult } from 'aws-lambda'

const buildResponse = async (statusCode, body): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  };
}

export const success = async (body): Promise<APIGatewayProxyResult> => {
  return buildResponse(200, body);
}


