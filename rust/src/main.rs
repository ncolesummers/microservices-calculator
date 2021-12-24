#[macro_use] extern crate rocket;
use rocket::serde::{Serialize, Deserialize, json};

#[derive(Serialize, Deserialize)]
#[serde(crate = "rocket::serde")]
struct Operands {
    operandOne: f64,
    operandTwo: f64
}

#[post("/exponent", format = "json" data = "operands")]
//TODO finish exponent
fn exponent(Operands) ->  json {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}