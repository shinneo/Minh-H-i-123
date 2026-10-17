const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
const assetsDir = path.resolve(publicDir, 'assets');

[publicDir, assetsDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Helper to save to both locations
function saveAsset(filename, content) {
  fs.writeFileSync(path.join(publicDir, filename), content);
  fs.writeFileSync(path.join(assetsDir, filename), content);
  console.log(`Saved ${filename}`);
}

// 1. s1_trangmo_01.png (SVG rendered as 16:9 banner)
const s1_trangmo_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <radialGradient id="hero-glow" cx="60%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="50%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#f43f5e" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="675" fill="url(#hero-bg)" />
  <rect width="1200" height="675" fill="url(#grid)" />
  <rect width="1200" height="675" fill="url(#hero-glow)" />

  <!-- 3D Oxyz coordinate space -->
  <g transform="translate(680, 420) scale(1.1)">
    <!-- Axes -->
    <line x1="0" y1="0" x2="360" y2="0" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4" />
    <polygon points="365,0 350,-6 350,6" fill="#38bdf8" />
    <text x="375" y="5" fill="#38bdf8" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16">x</text>

    <line x1="0" y1="0" x2="-140" y2="140" stroke="#a855f7" stroke-width="2.5" stroke-dasharray="6,4" />
    <polygon points="-145,145 -133,136 -139,126" fill="#a855f7" />
    <text x="-165" y="155" fill="#a855f7" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16">y</text>

    <line x1="0" y1="0" x2="0" y2="-280" stroke="#f43f5e" stroke-width="2.5" />
    <polygon points="0,-285 -6,-270 6,-270" fill="#f43f5e" />
    <text x="-5" y="-295" fill="#f43f5e" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16">z</text>

    <!-- Vector u and plane representation -->
    <path d="M -80,60 L 220,-40 L 300,100 L 0,200 Z" fill="rgba(99, 102, 241, 0.12)" stroke="#6366f1" stroke-width="1.5" />
    <line x1="0" y1="0" x2="160" y2="-120" stroke="#fbbf24" stroke-width="3" />
    <polygon points="165,-124 150,-128 156,-115" fill="#fbbf24" />
    <text x="175" y="-130" fill="#fbbf24" font-family="'Plus Jakarta Sans', sans-serif" font-weight="bold" font-size="18">n⃗ = (A; B; C)</text>
  </g>

  <!-- Calculus curve -->
  <path d="M 50,480 Q 220,120 420,380 T 820,240 T 1150,150" fill="none" stroke="url(#curve-grad)" stroke-width="4.5" filter="drop-shadow(0 0 12px rgba(99, 102, 241, 0.7))" />

  <!-- Math Symbols Float -->
  <text x="120" y="160" fill="rgba(255,255,255,0.25)" font-family="serif" font-size="72" font-style="italic">∫</text>
  <text x="155" y="145" fill="rgba(255,255,255,0.2)" font-family="serif" font-size="28">b</text>
  <text x="145" y="185" fill="rgba(255,255,255,0.2)" font-family="serif" font-size="28">a</text>
  <text x="180" y="160" fill="rgba(255,255,255,0.25)" font-family="'Plus Jakarta Sans', sans-serif" font-size="34">f(x)dx</text>

  <text x="100" y="320" fill="rgba(56, 189, 248, 0.25)" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="bold">lim f(x) = L</text>
  <text x="960" y="520" fill="rgba(244, 63, 94, 0.25)" font-family="'Plus Jakarta Sans', sans-serif" font-size="36" font-weight="bold">P(A|B)</text>
</svg>`;

// 2. s1_trangmo_02.svg (Icon Card Chương học 1:1)
const s1_trangmo_02 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <linearGradient id="book-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4f46e5" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
  </defs>
  <rect width="120" height="120" rx="28" fill="url(#book-grad)" />
  <g transform="translate(24, 24)" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M44 19.5A2.5 2.5 0 0 0 41.5 17H28" />
    <path d="M41.5 2H28v20h13.5A2.5 2.5 0 0 0 44 19.5v-15A2.5 2.5 0 0 0 41.5 2z" />
    <path d="M12 9h4" />
    <path d="M32 9h4" />
    <path d="M12 13h4" />
    <path d="M32 13h4" />
  </g>
  <circle cx="60" cy="88" r="4" fill="#fbbf24" />
</svg>`;

// 3. s2_cungko_01.jpg (Infographic Lý thuyết 4:5)
const s2_cungko_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <linearGradient id="info-bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e1e2f" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="accent-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>
  <rect width="600" height="750" fill="url(#info-bg)" rx="16" />
  <rect x="20" y="20" width="560" height="710" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" rx="12" />
  
  <text x="40" y="70" fill="#38bdf8" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800">INFOGRAPHIC CỦNG CỐ KIẾN THỨC</text>
  <text x="40" y="100" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="14">SƠ ĐỒ TƯ DUY KHẢO SÁT & VẼ ĐỒ THỊ HÀM SỐ</text>

  <!-- Step 1 -->
  <g transform="translate(40, 130)">
    <rect width="520" height="110" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    <circle cx="35" cy="40" r="18" fill="#3b82f6" />
    <text x="35" y="46" fill="#fff" font-family="sans-serif" font-weight="bold" font-size="16" text-anchor="middle">1</text>
    <text x="70" y="38" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="700">TẬP XÁC ĐỊNH & ĐẠO HÀM</text>
    <text x="70" y="65" fill="#94a3b8" font-family="sans-serif" font-size="13">Tìm TXĐ D, tính f'(x), giải f'(x) = 0 tìm nghiệm x_i thuộc D</text>
    <text x="70" y="90" fill="#38bdf8" font-family="monospace" font-size="13">f'(x) &gt; 0 =&gt; Đồng biến | f'(x) &lt; 0 =&gt; Nghịch biến</text>
  </g>

  <!-- Step 2 -->
  <g transform="translate(40, 260)">
    <rect width="520" height="120" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    <circle cx="35" cy="40" r="18" fill="#10b981" />
    <text x="35" y="46" fill="#fff" font-family="sans-serif" font-weight="bold" font-size="16" text-anchor="middle">2</text>
    <text x="70" y="38" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="700">CỰC TRỊ & GTLN - GTNN</text>
    <text x="70" y="65" fill="#94a3b8" font-family="sans-serif" font-size="13">Đổi dấu (+) sang (-) qua x_0 =&gt; Cực đại</text>
    <text x="70" y="88" fill="#94a3b8" font-family="sans-serif" font-size="13">Đổi dấu (-) sang (+) qua x_0 =&gt; Cực tiểu</text>
    <text x="70" y="108" fill="#34d399" font-family="monospace" font-size="12">min/max [a;b]: So sánh f(a), f(b), f(x_k)</text>
  </g>

  <!-- Step 3 -->
  <g transform="translate(40, 400)">
    <rect width="520" height="140" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    <circle cx="35" cy="40" r="18" fill="#f59e0b" />
    <text x="35" y="46" fill="#fff" font-family="sans-serif" font-weight="bold" font-size="16" text-anchor="middle">3</text>
    <text x="70" y="38" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="700">ĐƯỜNG TIỆM CẬN (TCN, TCD, TCX)</text>
    <text x="70" y="65" fill="#e2e8f0" font-family="monospace" font-size="13">lim(x-&gt;+-oo) f(x) = y_0 =&gt; Tiệm cận ngang y = y_0</text>
    <text x="70" y="90" fill="#e2e8f0" font-family="monospace" font-size="13">lim(x-&gt;x_0) f(x) = +-oo =&gt; Tiệm cận đứng x = x_0</text>
    <text x="70" y="115" fill="#fbbf24" font-family="monospace" font-size="13">f(x) = ax + b + g(x) với lim g(x)=0 =&gt; TC Xiên y = ax+b</text>
  </g>

  <!-- Step 4 -->
  <g transform="translate(40, 560)">
    <rect width="520" height="130" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    <circle cx="35" cy="40" r="18" fill="#8b5cf6" />
    <text x="35" y="46" fill="#fff" font-family="sans-serif" font-weight="bold" font-size="16" text-anchor="middle">4</text>
    <text x="70" y="38" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="700">TÂM ĐỐI XỨNG & ĐIỂM UỐN</text>
    <text x="70" y="65" fill="#94a3b8" font-family="sans-serif" font-size="13">Điểm uốn đồ thị bậc ba: I(x_0; y_0) với f''(x_0) = 0</text>
    <text x="70" y="90" fill="#c084fc" font-family="sans-serif" font-size="13">I là tâm đối xứng của hàm đa thức bậc ba và phân thức hữu tỉ</text>
  </g>
</svg>`;

// 4. s3_tracnghiem_01.svg (Icon Trắc nghiệm 1:1)
const s3_tracnghiem_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#3b82f6" />
  <circle cx="36" cy="36" r="12" fill="#fff" />
  <text x="36" y="41" fill="#1d4ed8" font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">A</text>
  <circle cx="64" cy="36" r="12" fill="rgba(255,255,255,0.3)" />
  <text x="64" y="41" fill="#fff" font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">B</text>
  <circle cx="36" cy="64" r="12" fill="rgba(255,255,255,0.3)" />
  <text x="36" y="69" fill="#fff" font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">C</text>
  <circle cx="64" cy="64" r="12" fill="rgba(255,255,255,0.3)" />
  <text x="64" y="69" fill="#fff" font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">D</text>
  <path d="M 44 36 L 40 40 L 48 30" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" />
</svg>`;

// 5. s4_dungtai_01.svg (Icon Đúng Sai 1:1)
const s4_dungtai_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#10b981" />
  <g transform="translate(18, 25)">
    <!-- Checkmark badge (Đúng) -->
    <circle cx="20" cy="25" r="18" fill="#ffffff" />
    <path d="M12 25 L18 31 L29 18" fill="none" stroke="#10b981" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Cross badge (Sai) -->
    <circle cx="48" cy="25" r="18" fill="rgba(255,255,255,0.25)" />
    <path d="M41 18 L55 32 M55 18 L41 32" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
  </g>
</svg>`;

// 6. s5_traloin_01.svg (Icon Trả lời ngắn 1:1)
const s5_traloin_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="24" fill="#8b5cf6" />
  <rect x="22" y="32" width="56" height="36" rx="8" fill="#ffffff" />
  <text x="32" y="56" fill="#6d28d9" font-family="monospace" font-size="20" font-weight="bold">-2.5</text>
  <line x1="68" y1="40" x2="68" y2="60" stroke="#7c3aed" stroke-width="2.5" />
</svg>`;

// 7. s6_deontap_01.png (Mockup Màn hình làm đề 16:9)
const s6_deontap_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="mock-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#mock-bg)" rx="16" />
  
  <!-- Header bar -->
  <rect x="40" y="30" width="1120" height="60" rx="10" fill="#334155" />
  <circle cx="70" cy="60" r="8" fill="#ef4444" />
  <circle cx="95" cy="60" r="8" fill="#f59e0b" />
  <circle cx="120" cy="60" r="8" fill="#10b981" />
  <text x="160" y="66" fill="#f8fafc" font-family="sans-serif" font-size="18" font-weight="bold">ĐỀ ÔN TẬP CHƯƠNG - MA TRẬN BỘ GD&amp;ĐT 2025</text>
  <rect x="960" y="44" width="180" height="32" rx="6" fill="#0284c7" />
  <text x="1050" y="65" fill="#fff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Thời gian: 60:00</text>

  <!-- Left: Content questions -->
  <rect x="40" y="110" width="760" height="520" rx="12" fill="#1e1e2d" stroke="#334155" stroke-width="1.5" />
  <text x="70" y="150" fill="#38bdf8" font-family="sans-serif" font-size="18" font-weight="bold">PHẦN I: 12 CÂU TRẮC NGHIỆM 4 PHƯƠNG ÁN (3.0 ĐIỂM)</text>
  
  <rect x="70" y="180" width="700" height="130" rx="8" fill="#2d3748" />
  <text x="90" y="215" fill="#e2e8f0" font-family="sans-serif" font-size="15" font-weight="600">Câu 1: Cho hàm số y = f(x) có bảng biến thiên như hình vẽ. Điểm cực đại là?</text>
  <rect x="90" y="240" width="140" height="36" rx="6" fill="#3b82f6" />
  <text x="160" y="263" fill="#fff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">A. x = 2 (Đúng)</text>
  <rect x="250" y="240" width="140" height="36" rx="6" fill="#4a5568" />
  <text x="320" y="263" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">B. x = -1</text>
  <rect x="410" y="240" width="140" height="36" rx="6" fill="#4a5568" />
  <text x="480" y="263" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">C. y = 5</text>
  <rect x="570" y="240" width="140" height="36" rx="6" fill="#4a5568" />
  <text x="640" y="263" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">D. y = 1</text>

  <text x="70" y="360" fill="#34d399" font-family="sans-serif" font-size="18" font-weight="bold">PHẦN II: 4 CÂU ĐÚNG / SAI (4.0 ĐIỂM - THANG BẬC MỚI)</text>
  <rect x="70" y="390" width="700" height="100" rx="8" fill="#2d3748" />
  <text x="90" y="420" fill="#e2e8f0" font-family="sans-serif" font-size="14">a) [Đúng]  b) [Sai]  c) [Đúng]  d) [Đúng]  =&gt; Đạt 3/4 ý = 0.50 điểm</text>

  <text x="70" y="525" fill="#f43f5e" font-family="sans-serif" font-size="18" font-weight="bold">PHẦN III: 6 CÂU TRẢ LỜI NGẮN (3.0 ĐIỂM)</text>

  <!-- Right: Question grid palette -->
  <rect x="830" y="110" width="330" height="520" rx="12" fill="#1e1e2d" stroke="#334155" stroke-width="1.5" />
  <text x="860" y="150" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="bold">BẢNG ĐIỀU HƯỚNG CÂU HỎI</text>
  
  <!-- 22 buttons mockup -->
  <g transform="translate(860, 180)">
    ${Array.from({ length: 22 }).map((_, i) => {
      const col = i % 5;
      const row = Math.floor(i / 5);
      const isDone = i < 14;
      const bg = isDone ? '#10b981' : '#334155';
      return `<rect x="${col * 54}" y="${row * 50}" width="42" height="38" rx="6" fill="${bg}" />
      <text x="${col * 54 + 21}" y="${row * 50 + 24}" fill="#fff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">${i + 1}</text>`;
    }).join('')}
  </g>

  <rect x="860" y="530" width="270" height="46" rx="8" fill="#10b981" />
  <text x="995" y="559" fill="#fff" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">NỘP BÀI THI</text>
</svg>`;

// 8. s7_giuaky1_01.jpg (Banner Đề ôn kì 1 16:9)
const s7_giuaky1_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="gk1-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#gk1-bg)" />
  <circle cx="950" cy="200" r="220" fill="rgba(99, 102, 241, 0.15)" />
  <circle cx="200" cy="500" r="180" fill="rgba(14, 165, 233, 0.1)" />

  <text x="100" y="240" fill="#a5b4fc" font-family="sans-serif" font-size="24" font-weight="bold" letter-spacing="4">HỌC KỲ I - TOÁN 12</text>
  <text x="100" y="320" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="64" font-weight="800">BỘ ĐỀ ÔN THI GIỮA KỲ I</text>
  <text x="100" y="380" fill="#cbd5e1" font-family="sans-serif" font-size="22">Trọng tâm: Ứng dụng đạo hàm, Khảo sát hàm số, Vectơ Oxyz &amp; Số liệu ghép nhóm</text>

  <rect x="100" y="440" width="260" height="60" rx="10" fill="#4f46e5" />
  <text x="230" y="478" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">Luyện Đề Ngay (60p)</text>

  <g transform="translate(800, 240) scale(1.4)">
    <circle cx="100" cy="100" r="90" fill="none" stroke="#6366f1" stroke-width="4" stroke-dasharray="12,6" />
    <text x="100" y="90" fill="#38bdf8" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">CHUẨN ĐỀ</text>
    <text x="100" y="125" fill="#f43f5e" font-family="sans-serif" font-size="32" font-weight="900" text-anchor="middle">2025</text>
  </g>
</svg>`;

// 9. s7_giuaky1_02.svg (Icon Trạng thái hoàn thành 1:1)
const s7_giuaky1_02 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#shield-grad)" />
  <path d="M50 18 L76 28 C76 56 50 78 50 78 C50 78 24 56 24 28 Z" fill="#ffffff" />
  <path d="M38 46 L46 54 L62 38" fill="none" stroke="#10b981" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

// 10. s8_giuaky2_01.jpg (Banner Đề ôn kì 2 16:9)
const s8_giuaky2_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="gk2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#042f2e" />
      <stop offset="50%" stop-color="#134e4a" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#gk2-bg)" />
  <text x="100" y="240" fill="#5eead4" font-family="sans-serif" font-size="24" font-weight="bold" letter-spacing="4">HỌC KỲ II - TOÁN 12</text>
  <text x="100" y="320" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="64" font-weight="800">BỘ ĐỀ ÔN THI GIỮA KỲ II</text>
  <text x="100" y="380" fill="#cbd5e1" font-family="sans-serif" font-size="22">Trọng tâm: Nguyên hàm - Tích phân, Phương pháp tọa độ không gian &amp; Xác suất có điều kiện</text>
  <rect x="100" y="440" width="260" height="60" rx="10" fill="#0d9488" />
  <text x="230" y="478" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">Luyện Đề 60 Phút</text>
</svg>`;

// 11. s8_giuaky2_02.svg (Icon Đồng hồ đếm giờ 60p 1:1)
const s8_giuaky2_02 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="clock-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#clock-grad)" />
  <circle cx="50" cy="54" r="28" fill="#ffffff" />
  <rect x="46" y="16" width="8" height="8" rx="2" fill="#ffffff" />
  <path d="M50 36 L50 54 L62 54" fill="none" stroke="#d97706" stroke-width="4" stroke-linecap="round" />
  <circle cx="50" cy="54" r="3.5" fill="#d97706" />
</svg>`;

// 12. s9_tongket_01.png (Background Footer 16:9)
const s9_tongket_01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" width="100%" height="100%">
  <defs>
    <linearGradient id="footer-bg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
  </defs>
  <rect width="1200" height="400" fill="url(#footer-bg)" />
  <path d="M 0,100 Q 300,200 600,80 T 1200,160" fill="none" stroke="rgba(99, 102, 241, 0.15)" stroke-width="2" />
  <path d="M 0,250 Q 400,120 800,280 T 1200,220" fill="none" stroke="rgba(56, 189, 248, 0.15)" stroke-width="2" />
  <circle cx="200" cy="180" r="140" fill="rgba(99, 102, 241, 0.05)" />
  <circle cx="1000" cy="220" r="120" fill="rgba(16, 185, 129, 0.05)" />
</svg>`;

saveAsset('s1_trangmo_01.png', s1_trangmo_01);
saveAsset('s1_trangmo_02.svg', s1_trangmo_02);
saveAsset('s2_cungko_01.jpg', s2_cungko_01);
saveAsset('s3_tracnghiem_01.svg', s3_tracnghiem_01);
saveAsset('s4_dungtai_01.svg', s4_dungtai_01);
saveAsset('s5_traloin_01.svg', s5_traloin_01);
saveAsset('s6_deontap_01.png', s6_deontap_01);
saveAsset('s7_giuaky1_01.jpg', s7_giuaky1_01);
saveAsset('s7_giuaky1_02.svg', s7_giuaky1_02);
saveAsset('s8_giuaky2_01.jpg', s8_giuaky2_01);
saveAsset('s8_giuaky2_02.svg', s8_giuaky2_02);
saveAsset('s9_tongket_01.png', s9_tongket_01);
console.log('All 12 visual assets generated successfully.');
