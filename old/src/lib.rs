use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate_fm_signal(t: u32, len: u32) -> js_sys::Float32Array {
    let mut arr = vec![0.0f32; len as usize];
    let carrier_freq = 0.03;
    let mod_freq = 0.007;
    let mod_index = 12.0;
    for i in 0..len {
        let time = (t + i) as f32;
        let modulator = (2.0 * std::f32::consts::PI * mod_freq * time).sin();
        let phase = 2.0 * std::f32::consts::PI * carrier_freq * time + mod_index * modulator;
        arr[i as usize] = phase.sin();
    }
    js_sys::Float32Array::from(arr.as_slice())
}
