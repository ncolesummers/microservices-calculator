import { Drash } from "./deps.ts"

// Create your resource
class HomeResource extends Drash.Resource {
  public paths = ["/subtract"];

  public POST(request: Drash.Request, response: Drash.Response): void {
    
    const numOne: string = request.bodyParam("operandOne") || "";
    const numTwo: string = request.bodyParam("operandTwo") || "";
    // No param passed in? Get out.
    if (numOne === "" || numTwo === "") {
      throw new Drash.Errors.HttpError(
        400,
        "This resource requires the `numOne` and `numTwo` body paramaters.",
      );
    } 
    const result = parseInt(numOne) - parseInt(numTwo)
    console.log(`Subtracted ${numOne} from ${numTwo} and got result: ${result}`)

    return response.json({
      result: result
    });
  }
}

// Create and run your server

const server = new Drash.Server({
  hostname: "0.0.0.0",
  port: 1447,
  protocol: "http",
  resources: [
    HomeResource,
  ],
});

server.run();

console.log(`Server running at ${server.address}.`);