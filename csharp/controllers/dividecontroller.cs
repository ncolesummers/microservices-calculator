// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Divide.Models;

namespace Divide.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class DivideController : ControllerBase
  {

    //POST: /divide
    [HttpPost]
    public string Divide(Operands operands)
    {
      Console.WriteLine($"Dividing {operands.OperandTwo} from {operands.OperandOne}");
      Compute compute = new Compute
      {
        Result = Decimal.Parse(operands.OperandOne) / Decimal.Parse(operands.OperandTwo)
      };
      string jsonString = JsonSerializer.Serialize(compute);
      return jsonString;
    }
  }
}