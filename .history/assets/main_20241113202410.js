const searchInput = document.getElementById("search");
const texts = [
  "Nông sản sạch - ĐỪNG BỎ LỠ",
  "Sản phẩm giảm giá hôm nay!",
  "Chất lượng cao, giá tốt",
  "Khuyến mãi đặc biệt!"
];
let textIndex = 0;
let charIndex = 0;
let speed = 50; // Điều chỉnh tốc độ chuyển đổi chữ (mili giây)
let lastTime = 0;

function displayTextSmoothly(timestamp) {
  if (timestamp - lastTime > speed) {
    // Hiển thị từng ký tự trong chuỗi hiện tại
    searchInput.value = texts[textIndex].slice(0, charIndex);
    charIndex++;
    lastTime = timestamp;

    // Khi đã hiển thị hết chuỗi hiện tại, dừng 2 giây rồi chuyển sang chuỗi tiếp theo
    if (charIndex > texts[textIndex].length) {
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(() => {
        requestAnimationFrame(displayTextSmoothly);
      }, 500); // Dừng 2 giây trước khi chuyển đổi
      return;
    }
  }

  requestAnimationFrame(displayTextSmoothly);
}

// Bắt đầu hiển thị hiệu ứng
requestAnimationFrame(displayTextSmoothly);
