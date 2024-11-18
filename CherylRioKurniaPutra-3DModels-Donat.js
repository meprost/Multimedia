function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01); // Rotasi pada sumbu X untuk efek 3D

  // Buat donat
  fill(200, 150, 100); // Warna coklat untuk donat
  torus(80, 30); // Buat torus untuk donat

  // Buat lapisan gula
  push();
  rotateZ(HALF_PI); // Putar untuk posisi yang tepat
  fill(255, 0, 0, 150); // Warna merah untuk lapisan gula (transparan)
  torus(80, 10); // Buat torus lebih kecil untuk lapisan gula
  pop();

  // Tambahkan beberapa sprinkles
  for (let i = 0; i < 20; i++) {
    push();
    let angle = map(i, 0, 20, 0, TWO_PI);
    let x = 80 * cos(angle);
    let y = 80 * sin(angle);
    translate(x, y, 0); // Pindah ke posisi sprinkles
    fill(random(255), random(255), random(255)); // Warna acak untuk sprinkles
    sphere(5); // Buat sprinkles sebagai bola kecil
    pop();
  }
}