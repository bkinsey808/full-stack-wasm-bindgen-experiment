use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(i: i32, j: i32) -> i32 {
    i + j
}
