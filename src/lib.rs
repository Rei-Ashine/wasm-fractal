mod utils;
mod logic;
mod julia;
mod mandelbrot;
use utils::set_panic_hook;
use wasm_bindgen::prelude::*;


#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn generate_julia_set(
    width: u32,
    height:u32,
    x_min: f64,
    x_max: f64,
    y_min: f64,
    y_max: f64,
    max_iter: usize,
    real: f64,
    imaginary: f64,
) -> Vec<u8> {
    set_panic_hook();
    julia::generate_julia_set(width, height, x_min, x_max, y_min, y_max, max_iter, real, imaginary)
}

#[wasm_bindgen]
pub fn generate_mandelbrot_set(
    width: u32,
    height:u32,
    x_min: f64,
    x_max: f64,
    y_min: f64,
    y_max: f64,
    max_iter: usize,
    real: f64,
    imaginary: f64,
) -> Vec<u8> {
    set_panic_hook();
    mandelbrot::generate_mandelbrot_set(width, height, x_min, x_max, y_min, y_max, max_iter, real, imaginary)
}