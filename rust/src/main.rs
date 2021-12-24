#[macro_use] extern crate rocket;
use rocket::serde::{Serialize, Deserialize, json::Json};

#[derive(Deserialize)]
#[serde(crate = "rocket::serde")]
struct Operands {
    operand_one: f64,
    operand_two: f64
}

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
struct Done {
    result: f64
}

#[post("/exponent", format = "json", data = "<operands>")]
//TODO finish exponent
fn exponent(operands: Json<Operands>) ->  Json<Done> {
    let done = Done{ result: f64::powf(operands.operand_one, operands.operand_two) };
    Json(done)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![exponent])
}