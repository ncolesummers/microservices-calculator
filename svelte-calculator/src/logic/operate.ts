import { DaprClient, HttpMethod, CommunicationProtocolEnum } from "dapr-client";

const daprAppId = "calculator";
const daprHost = "127.0.0.1"; 

const operationMap = {
  "+": "add",
  "-": "subtract",
  "x": "multiply",
  "÷": "divide"
};

export default async function operate(operandOne: string, operandTwo: string, operationSymbol: string): Promise<string> {

  const client = new DaprClient(
    daprHost, 
    process.env.DAPR_HTTP_PORT as string, 
    CommunicationProtocolEnum.HTTP
  )

  operandOne = operandOne || "0";
  operandTwo = operandTwo || (operationSymbol === "÷" || operationSymbol === 'x' ? "1" : "0"); //If dividing or multiplying, then 1 maintains current value in cases of null

  const operation = operationMap[operationSymbol];
  console.log(`Calling ${operation} service`);
  const body = {
    operandOne,
    operandTwo
  };

  const r = await client.invoker.invoke(daprAppId, operation, HttpMethod.POST, body).then ;

  return r.toString();
}