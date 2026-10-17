import { Chapter } from '../types/mathTypes';

export const chapter4Data: Chapter = {
  id: 4,
  slug: 'nguyen-ham-tich-phan',
  code: 'CHƯƠNG IV',
  title: 'Nguyên Hàm, Tích Phân & Ứng Dụng',
  subtitle: 'Bảng nguyên hàm cơ bản, phương pháp đổi biến, từng phần, diện tích hình phẳng và thể tích tròn xoay',
  semester: 2,
  icon: '/assets/s1_trangmo_02.svg',
  color: 'cyan',
  gradient: 'from-cyan-600 to-blue-600',
  stats: {
    lessons: 4,
    mcCount: 15,
    tfCount: 5,
    saCount: 5,
  },
  theory: {
    title: 'Củng cố kiến thức trọng tâm Chương 4',
    summary: [
      '**Nguyên hàm**: $F(x)$ là nguyên hàm của $f(x)$ trên $K \\iff F\'(x) = f(x)$. Kí hiệu: $\\int f(x)dx = F(x) + C$.',
      '**Định nghĩa Tích phân**: $\\int_a^b f(x)dx = F(b) - F(a) = F(x)\\Big|_a^b$.',
      '**Tích phân từng phần**: $\\int u dv = uv - \\int v du$. Thứ tự ưu tiên đặt $u$: "Nhất lô, nhì đa, tam lượng, tứ mũ".',
      '**Ứng dụng diện tích hình phẳng**: $S = \\int_a^b |f(x) - g(x)| dx$.',
      '**Ứng dụng thể tích vật thể tròn xoay**: Quay quanh $Ox$: $V = \\pi \\int_a^b f^2(x) dx$.'
    ],
    keyFormulas: [
      {
        name: 'Bảng nguyên hàm hàm số lũy thừa',
        formula: '\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C \\quad (\\alpha \\ne -1); \\quad \\int \\frac{1}{x} dx = \\ln|x| + C',
        note: 'Với biểu thức bậc nhất: $\\int (ax+b)^\\alpha dx = \\frac{1}{a} \\frac{(ax+b)^{\\alpha+1}}{\\alpha+1} + C$.'
      },
      {
        name: 'Nguyên hàm hàm lượng giác',
        formula: '\\int \\cos x dx = \\sin x + C; \\quad \\int \\sin x dx = -\\cos x + C; \\quad \\int \\frac{1}{\\cos^2 x} dx = \\tan x + C',
        note: 'Chú ý dấu trừ khi lấy nguyên hàm của $\\sin x$.'
      },
      {
        name: 'Thể tích khối tròn xoay quanh trục Ox',
        formula: 'V = \\pi \\int_a^b [f(x)]^2 dx',
        note: 'Đừng quên nhân với hằng số $\\pi$.'
      }
    ],
    typicalMethods: [
      {
        name: 'Dạng 1: Phương pháp đổi biến số',
        steps: [
          'Bước 1: Đặt $t = u(x)$, suy ra vi phân $dt = u\'(x)dx$.',
          'Bước 2: Với tích phân xác định, tiến hành ĐỔI CẬN ($x=a \\to t=u(a), x=b \\to t=u(b)$).',
          'Bước 3: Biến đổi về tích phân theo $t$ và tính kết quả.'
        ]
      },
      {
        name: 'Dạng 2: Phương pháp tích phân từng phần',
        steps: [
          'Bước 1: Đặt $u$ theo quy tắc ưu tiên, phần còn lại đặt là $dv$.',
          'Bước 2: Tính vi phân $du = u\'dx$ và chọn $v = \\int dv$.',
          'Bước 3: Áp dụng công thức $\\int_a^b u dv = uv\\Big|_a^b - \\int_a^b v du$.'
        ]
      }
    ],
    pitfalls: [
      'Quên đổi cận khi dùng phương pháp đổi biến số trong tích phân.',
      'Quên nhân $\\pi$ trong công thức thể tích khối tròn xoay.',
      'Quên dấu trị tuyệt đối khi tính diện tích hình phẳng $S = \\int |f(x) - g(x)|dx$.'
    ]
  },
  mcBank: [
    {
      id: 'c4_mc_01',
      question: 'Họ tất cả các nguyên hàm của hàm số $f(x) = 3x^2 + 2x$ là:',
      options: [
        { key: 'A', text: '$x^3 + x^2 + C$' },
        { key: 'B', text: '$6x + 2 + C$' },
        { key: 'C', text: '$3x^3 + 2x^2 + C$' },
        { key: 'D', text: '$x^3 + 2x^2 + C$' }
      ],
      correctKey: 'A',
      explanation: '$\\int (3x^2 + 2x)dx = 3\\frac{x^3}{3} + 2\\frac{x^2}{2} + C = x^3 + x^2 + C$.'
    },
    {
      id: 'c4_mc_02',
      question: 'Tích phân $\\int_0^1 e^x dx$ bằng:',
      options: [
        { key: 'A', text: '$e - 1$' },
        { key: 'B', text: '$e$' },
        { key: 'C', text: '$e + 1$' },
        { key: 'D', text: '$1$' }
      ],
      correctKey: 'A',
      explanation: '$\\int_0^1 e^x dx = e^x\\Big|_0^1 = e^1 - e^0 = e - 1$.'
    },
    {
      id: 'c4_mc_03',
      question: 'Cho $\\int_1^3 f(x)dx = 4$ và $\\int_1^3 g(x)dx = -2$. Khi đó $\\int_1^3 [f(x) + 2g(x)]dx$ bằng:',
      options: [
        { key: 'A', text: '$0$' },
        { key: 'B', text: '$2$' },
        { key: 'C', text: '$8$' },
        { key: 'D', text: '$-4$' }
      ],
      correctKey: 'A',
      explanation: '$\\int_1^3 [f(x) + 2g(x)]dx = 4 + 2(-2) = 0$.'
    },
    {
      id: 'c4_mc_04',
      question: 'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành và hai đường thẳng $x = 0, x = 3$ bằng:',
      options: [
        { key: 'A', text: '$9$' },
        { key: 'B', text: '$27$' },
        { key: 'C', text: '$3$' },
        { key: 'D', text: '$18$' }
      ],
      correctKey: 'A',
      explanation: '$S = \\int_0^3 x^2 dx = \\frac{x^3}{3}\\Big|_0^3 = \\frac{27}{3} = 9$.'
    },
    {
      id: 'c4_mc_05',
      question: 'Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}, y = 0, x = 4$ quanh trục $Ox$ là:',
      options: [
        { key: 'A', text: '$8\\pi$' },
        { key: 'B', text: '$16\\pi$' },
        { key: 'C', text: '$4\\pi$' },
        { key: 'D', text: '$8$' }
      ],
      correctKey: 'A',
      explanation: '$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\frac{x^2}{2}\\Big|_0^4 = 8\\pi$.'
    },
    {
      id: 'c4_mc_06',
      question: 'Họ nguyên hàm của hàm số $f(x) = \\cos 2x$ là:',
      options: [
        { key: 'A', text: '$\\frac{1}{2}\\sin 2x + C$' },
        { key: 'B', text: '$-\\frac{1}{2}\\sin 2x + C$' },
        { key: 'C', text: '$2\\sin 2x + C$' },
        { key: 'D', text: '$\\sin 2x + C$' }
      ],
      correctKey: 'A',
      explanation: '$\\int \\cos 2x dx = \\frac{1}{2}\\sin 2x + C$.'
    },
    {
      id: 'c4_mc_07',
      question: 'Cho $\\int_0^2 f(x)dx = 6$. Giá trị của tích phân $\\int_0^1 f(2x)dx$ bằng:',
      options: [
        { key: 'A', text: '$3$' },
        { key: 'B', text: '$12$' },
        { key: 'C', text: '$6$' },
        { key: 'D', text: '$4$' }
      ],
      correctKey: 'A',
      explanation: 'Đặt $t = 2x \\implies dt = 2dx$. Cận: $x=0 \\to t=0, x=1 \\to t=2$. Khi đó $\\int_0^1 f(2x)dx = \\frac{1}{2}\\int_0^2 f(t)dt = 3$.'
    },
    {
      id: 'c4_mc_08',
      question: 'Họ nguyên hàm $\\int x e^x dx$ bằng:',
      options: [
        { key: 'A', text: '$(x - 1)e^x + C$' },
        { key: 'B', text: '$(x + 1)e^x + C$' },
        { key: 'C', text: '$x e^x - e^x$' },
        { key: 'D', text: '$\\frac{x^2}{2}e^x + C$' }
      ],
      correctKey: 'A',
      explanation: 'Từng phần: $u = x, dv = e^x dx \\implies du = dx, v = e^x$. Vậy $\\int = x e^x - \\int e^x dx = (x - 1)e^x + C$.'
    },
    {
      id: 'c4_mc_09',
      question: 'Tích phân $\\int_1^e \\frac{1}{x} dx$ bằng:',
      options: [
        { key: 'A', text: '$1$' },
        { key: 'B', text: '$e$' },
        { key: 'C', text: '$0$' },
        { key: 'D', text: '$\\ln e - 1$' }
      ],
      correctKey: 'A',
      explanation: '$\\ln|x|\\Big|_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$.'
    },
    {
      id: 'c4_mc_10',
      question: 'Một chất điểm chuyển động với vận tốc $v(t) = 3t^2 + 2$ (m/s). Quãng đường vật đi được từ $t = 0$ đến $t = 3$ giây là:',
      options: [
        { key: 'A', text: '$33\\text{ m}$' },
        { key: 'B', text: '$27\\text{ m}$' },
        { key: 'C', text: '$29\\text{ m}$' },
        { key: 'D', text: '$35\\text{ m}$' }
      ],
      correctKey: 'A',
      explanation: '$s = \\int_0^3 (3t^2 + 2)dt = (t^3 + 2t)\\Big|_0^3 = 27 + 6 = 33\\text{ m}$.'
    },
    {
      id: 'c4_mc_11',
      question: 'Họ tất cả các nguyên hàm của $f(x) = \\frac{1}{2x + 1}$ trên $(-1/2; +\\infty)$ là:',
      options: [
        { key: 'A', text: '$\\frac{1}{2}\\ln(2x+1) + C$' },
        { key: 'B', text: '$\\ln(2x+1) + C$' },
        { key: 'C', text: '$2\\ln(2x+1) + C$' },
        { key: 'D', text: '$-\\frac{1}{(2x+1)^2} + C$' }
      ],
      correctKey: 'A',
      explanation: '$\\int \\frac{1}{2x+1} dx = \\frac{1}{2}\\ln|2x+1| + C$.'
    },
    {
      id: 'c4_mc_12',
      question: 'Cho $\\int_0^1 f(x)dx = 2$ và $\\int_0^4 f(x)dx = 7$. Tính tích phân $\\int_1^4 f(x)dx$.',
      options: [
        { key: 'A', text: '$5$' },
        { key: 'B', text: '$9$' },
        { key: 'C', text: '$-5$' },
        { key: 'D', text: '$14$' }
      ],
      correctKey: 'A',
      explanation: '$\\int_1^4 f(x)dx = \\int_0^4 f(x)dx - \\int_0^1 f(x)dx = 7 - 2 = 5$.'
    },
    {
      id: 'c4_mc_13',
      question: 'Tích phân $\\int_0^{\\pi/2} \\sin x dx$ bằng:',
      options: [
        { key: 'A', text: '$1$' },
        { key: 'B', text: '$0$' },
        { key: 'C', text: '$-1$' },
        { key: 'D', text: '$\\pi/2$' }
      ],
      correctKey: 'A',
      explanation: '$-\\cos x\\Big|_0^{\\pi/2} = -\\cos(\\pi/2) - (-\\cos 0) = 0 + 1 = 1$.'
    },
    {
      id: 'c4_mc_14',
      question: 'Diện tích hình phẳng giới hạn bởi $y = x^3$, $y = 0, x = -1, x = 1$ bằng:',
      options: [
        { key: 'A', text: '$0.5$' },
        { key: 'B', text: '$0$' },
        { key: 'C', text: '$1$' },
        { key: 'D', text: '$0.25$' }
      ],
      correctKey: 'A',
      explanation: '$S = \\int_{-1}^1 |x^3| dx = 2\\int_0^1 x^3 dx = 2 \\times \\frac{1}{4} = 0.5$.'
    },
    {
      id: 'c4_mc_15',
      question: 'Biết $\\int_1^2 \\frac{x+1}{x} dx = a + \\ln b$ với $a, b \\in \\mathbb{Z}$. Tính $a + b$.',
      options: [
        { key: 'A', text: '$3$' },
        { key: 'B', text: '$2$' },
        { key: 'C', text: '$4$' },
        { key: 'D', text: '$5$' }
      ],
      correctKey: 'A',
      explanation: '$\\int_1^2 (1 + 1/x)dx = (x + \\ln x)\\Big|_1^2 = (2 + \\ln 2) - (1 + \\ln 1) = 1 + \\ln 2 \\implies a = 1, b = 2 \\implies a + b = 3$.'
    }
  ],
  tfBank: [
    {
      id: 'c4_tf_01',
      context: 'Cho hàm số $f(x) = x^2 - 2x$ và hình phẳng $(H)$ giới hạn bởi đồ thị $y = f(x)$, trục hoành và hai đường thẳng $x = 0, x = 3$.',
      items: [
        { key: 'a', text: 'Đồ thị cắt trục hoành tại hai điểm $x = 0$ và $x = 2$.', isCorrect: true, explanation: '$x^2 - 2x = 0 \\iff x = 0, x = 2$.' },
        { key: 'b', text: 'Trên đoạn $[0; 2]$, hàm số $f(x) \\le 0$.', isCorrect: true, explanation: 'Trong khoảng hai nghiệm thì trái dấu hệ số a (âm).' },
        { key: 'c', text: 'Diện tích hình phẳng $S = \\int_0^3 (x^2 - 2x)dx$.', isCorrect: false, explanation: 'Phải lấy trị tuyệt đối: $S = \\int_0^3 |x^2 - 2x|dx$.' },
        { key: 'd', text: 'Diện tích hình phẳng $S$ bằng $\\frac{8}{3}$.', isCorrect: true, explanation: '$S = \\int_0^2 -(x^2 - 2x)dx + \\int_2^3 (x^2 - 2x)dx = 4/3 + 4/3 = 8/3$.' }
      ],
      fullExplanation: 'Tính diện tích hình phẳng có đổi dấu trên đoạn lấy tích phân.'
    },
    {
      id: 'c4_tf_02',
      context: 'Cho tích phân $I = \\int_0^1 x e^{x^2} dx$.',
      items: [
        { key: 'a', text: 'Nếu đặt $t = x^2$ thì $dt = 2x dx$.', isCorrect: true, explanation: 'Vi phân $dt = 2xdx$.' },
        { key: 'b', text: 'Đổi cận: $x = 0 \\implies t = 0$ và $x = 1 \\implies t = 1$.', isCorrect: true, explanation: '$0^2 = 0, 1^2 = 1$.' },
        { key: 'c', text: 'Tích phân chuyển thành $I = 2\\int_0^1 e^t dt$.', isCorrect: false, explanation: '$xdx = dt/2$ nên $I = \\frac{1}{2}\\int_0^1 e^t dt$.' },
        { key: 'd', text: 'Giá trị của tích phân là $I = \\frac{e - 1}{2}$.', isCorrect: true, explanation: '$I = \\frac{1}{2}(e - 1)$.' }
      ],
      fullExplanation: 'Phương pháp đổi biến số tích phân.'
    },
    {
      id: 'c4_tf_03',
      context: 'Cho khối tròn xoay sinh bởi hình phẳng giới hạn bởi đường cong $y = x^2$, trục hoành và hai đường thẳng $x = 0, x = 2$ quay quanh trục $Ox$.',
      items: [
        { key: 'a', text: 'Công thức thể tích là $V = \\pi \\int_0^2 x^4 dx$.', isCorrect: true, explanation: '$[f(x)]^2 = (x^2)^2 = x^4$.' },
        { key: 'b', text: 'Nguyên hàm của $x^4$ là $\\frac{x^5}{5}$.', isCorrect: true, explanation: 'Theo công thức lũy thừa.' },
        { key: 'c', text: 'Thể tích khối tròn xoay là $V = \\frac{32\\pi}{5}$.', isCorrect: true, explanation: '$\\pi \\frac{2^5}{5} = \\frac{32\\pi}{5}$.' },
        { key: 'd', text: 'Nếu quay quanh trục $Oy$ thì công thức thể tích cũng giống hệt quay quanh $Ox$.', isCorrect: false, explanation: 'Quay quanh $Oy$ dùng biến $y$ hoặc phương pháp hình trụ.' }
      ],
      fullExplanation: 'Thể tích khối tròn xoay quanh trục hoành.'
    },
    {
      id: 'c4_tf_04',
      context: 'Một bình chứa nước có mặt cắt dạng parabol với phương trình $y = \\frac{1}{2}x^2$ ($0 \\le y \\le 8$, đơn vị dm).',
      items: [
        { key: 'a', text: 'Tại độ cao $y = 8$, bán kính miệng bình là $4\\text{ dm}$.', isCorrect: true, explanation: '$x^2 = 2y = 16 \\implies x = 4$.' },
        { key: 'b', text: 'Thể tích của bình nước được tính theo công thức $V = \\pi \\int_0^8 2y dy$.', isCorrect: true, explanation: 'Quay quanh Oy: $x^2 = 2y$.' },
        { key: 'c', text: 'Thể tích toàn bộ bình nước là $64\\pi\\text{ dm}^3$.', isCorrect: true, explanation: '$\\pi [y^2]_0^8 = 64\\pi$.' },
        { key: 'd', text: 'Khi mực nước cao $4\\text{ dm}$, thể tích nước trong bình bằng một nửa thể tích bình.', isCorrect: false, explanation: 'Tại $y = 4$, $V = \\pi(16) = 16\\pi = 1/4$ thể tích bình.' }
      ],
      fullExplanation: 'Ứng dụng tích phân tính thể tích vật thể thực tế.'
    },
    {
      id: 'c4_tf_05',
      context: 'Cho $\\int_0^1 f(x)dx = 3$ và $\\int_0^1 g(x)dx = -1$.',
      items: [
        { key: 'a', text: '$\\int_0^1 [f(x) - g(x)]dx = 4$.', isCorrect: true, explanation: '$3 - (-1) = 4$.' },
        { key: 'b', text: '$\\int_0^1 [2f(x) + 3g(x)]dx = 3$.', isCorrect: true, explanation: '$2(3) + 3(-1) = 6 - 3 = 3$.' },
        { key: 'c', text: '$\\int_0^1 f(x)g(x)dx = -3$.', isCorrect: false, explanation: 'Tích phân của tích không bằng tích các tích phân.' },
        { key: 'd', text: '$\\int_1^0 f(x)dx = -3$.', isCorrect: true, explanation: 'Đảo cận đổi dấu tích phân.' }
      ],
      fullExplanation: 'Các tính chất cơ bản của tích phân xác định.'
    }
  ],
  saBank: [
    {
      id: 'c4_sa_01',
      question: 'Tính tích phân $\\int_0^2 (3x^2 - 2x + 1)dx$.',
      correctAnswer: '6',
      acceptedAnswers: ['6'],
      explanation: '$(x^3 - x^2 + x)\\Big|_0^2 = 8 - 4 + 2 = 6$.'
    },
    {
      id: 'c4_sa_02',
      question: 'Tính diện tích hình phẳng giới hạn bởi $y = 3x^2, y = 0, x = 1, x = 2$.',
      correctAnswer: '7',
      acceptedAnswers: ['7'],
      explanation: '$S = \\int_1^2 3x^2 dx = x^3\\Big|_1^2 = 8 - 1 = 7$.'
    },
    {
      id: 'c4_sa_03',
      question: 'Cho $\\int_0^3 f(x)dx = 12$. Tính tích phân $\\int_0^1 f(3x)dx$.',
      correctAnswer: '4',
      acceptedAnswers: ['4'],
      explanation: '$\\frac{1}{3}\\int_0^3 f(t)dt = 12 / 3 = 4$.'
    },
    {
      id: 'c4_sa_04',
      question: 'Biết $\\int_0^1 (2x + 1)e^x dx = a e + b$ với $a, b \\in \\mathbb{Z}$. Tính $a + b$.',
      correctAnswer: '2',
      acceptedAnswers: ['2'],
      explanation: 'Từng phần: $[(2x+1)e^x]_0^1 - \\int_0^1 2e^x dx = 3e - 1 - 2(e - 1) = e + 1 \\implies a = 1, b = 1 \\implies a + b = 2$.'
    },
    {
      id: 'c4_sa_05',
      question: 'Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = \\sqrt{2x}, y = 0, x = 3$ quanh $Ox$ (kết quả chia cho $\\pi$, tức là tính $V/\\pi$).',
      correctAnswer: '9',
      acceptedAnswers: ['9'],
      explanation: '$V/\\pi = \\int_0^3 2x dx = x^2\\Big|_0^3 = 9$.'
    }
  ],
  chapterExam: {
    id: 'exam_ch4',
    title: 'Đề Ôn Tập Chương IV - Nguyên Hàm, Tích Phân & Ứng Dụng',
    durationMinutes: 60,
    part1: [
      { id: 'c4_ex_mc1', question: 'Nguyên hàm của $f(x) = e^x + 1$ là:', options: [{ key: 'A', text: '$e^x + x + C$' }, { key: 'B', text: '$e^x + C$' }, { key: 'C', text: '$e^x - x + C$' }, { key: 'D', text: '$x e^x + C$' }], correctKey: 'A', explanation: '$e^x + x + C$.' },
      { id: 'c4_ex_mc2', question: 'Tích phân $\\int_1^2 2x dx$ bằng:', options: [{ key: 'A', text: '$3$' }, { key: 'B', text: '$4$' }, { key: 'C', text: '$2$' }, { key: 'D', text: '$6$' }], correctKey: 'A', explanation: '$x^2\\Big|_1^2 = 4 - 1 = 3$.' },
      { id: 'c4_ex_mc3', question: '$\\int \\sin x dx$ bằng:', options: [{ key: 'A', text: '$-\\cos x + C$' }, { key: 'B', text: '$\\cos x + C$' }, { key: 'C', text: '$\\tan x + C$' }, { key: 'D', text: '$-\\sin x + C$' }], correctKey: 'A', explanation: '$-\\cos x + C$.' },
      { id: 'c4_ex_mc4', question: 'Cho $\\int_0^2 f(x)dx = 3$. Giá trị $\\int_0^2 4f(x)dx$ bằng:', options: [{ key: 'A', text: '$12$' }, { key: 'B', text: '$7$' }, { key: 'C', text: '$1$' }, { key: 'D', text: '$3/4$' }], correctKey: 'A', explanation: '$4 \\times 3 = 12$.' },
      { id: 'c4_ex_mc5', question: 'Diện tích giới hạn bởi $y = x, y = 0, x = 0, x = 4$ là:', options: [{ key: 'A', text: '$8$' }, { key: 'B', text: '$16$' }, { key: 'C', text: '$4$' }, { key: 'D', text: '$2$' }], correctKey: 'A', explanation: '$x^2/2 = 16/2 = 8$.' },
      { id: 'c4_ex_mc6', question: 'Thể tích tròn xoay quanh $Ox$ của $y = 1, x = 0, x = 2$ là:', options: [{ key: 'A', text: '$2\\pi$' }, { key: 'B', text: '$\\pi$' }, { key: 'C', text: '$4\\pi$' }, { key: 'D', text: '$2$' }], correctKey: 'A', explanation: '$\\pi \\int_0^2 1 dx = 2\\pi$.' },
      { id: 'c4_ex_mc7', question: 'Nguyên hàm của $\\frac{1}{x^2}$ là:', options: [{ key: 'A', text: '$-1/x + C$' }, { key: 'B', text: '$1/x + C$' }, { key: 'C', text: '$\\ln x^2 + C$' }, { key: 'D', text: '$-2/x^3 + C$' }], correctKey: 'A', explanation: '$-1/x + C$.' },
      { id: 'c4_ex_mc8', question: 'Tích phân $\\int_0^1 (x+1)^2 dx$ bằng:', options: [{ key: 'A', text: '$7/3$' }, { key: 'B', text: '$8/3$' }, { key: 'C', text: '$2$' }, { key: 'D', text: '$1/3$' }], correctKey: 'A', explanation: '$(x+1)^3/3\\Big|_0^1 = 8/3 - 1/3 = 7/3$.' },
      { id: 'c4_ex_mc9', question: '$\\int_0^1 \\frac{1}{x+1} dx$ bằng:', options: [{ key: 'A', text: '$\\ln 2$' }, { key: 'B', text: '$1$' }, { key: 'C', text: '$\\ln 3$' }, { key: 'D', text: '$2$' }], correctKey: 'A', explanation: '$\\ln 2 - \\ln 1 = \\ln 2$.' },
      { id: 'c4_ex_mc10', question: 'Nếu $F\'(x) = f(x)$ và $F(0) = 1, F(2) = 5$ thì $\\int_0^2 f(x)dx$ bằng:', options: [{ key: 'A', text: '$4$' }, { key: 'B', text: '$6$' }, { key: 'C', text: '$-4$' }, { key: 'D', text: '$5$' }], correctKey: 'A', explanation: '$F(2) - F(0) = 5 - 1 = 4$.' },
      { id: 'c4_ex_mc11', question: 'Một ô tô hãm phanh với gia tốc $a(t) = -4\\text{ m/s}^2$. Vận tốc ban đầu là $20\\text{ m/s}$. Sau bao lâu ô tô dừng hẳn?', options: [{ key: 'A', text: '$5$ giây' }, { key: 'B', text: '$4$ giây' }, { key: 'C', text: '$6$ giây' }, { key: 'D', text: '$10$ giây' }], correctKey: 'A', explanation: '$v(t) = 20 - 4t = 0 \\iff t = 5$ giây.' },
      { id: 'c4_ex_mc12', question: 'Quãng đường ô tô trên đi được từ lúc hãm phanh đến khi dừng hẳn là:', options: [{ key: 'A', text: '$50\\text{ m}$' }, { key: 'B', text: '$100\\text{ m}$' }, { key: 'C', text: '$40\\text{ m}$' }, { key: 'D', text: '$60\\text{ m}$' }], correctKey: 'A', explanation: '$s = \\int_0^5 (20 - 4t)dt = 100 - 50 = 50\\text{ m}$.' }
    ],
    part2: [
      {
        id: 'c4_ex_tf1',
        context: 'Cho hàm số $y = f(x) = x^3 - x$.',
        items: [
          { key: 'a', text: 'Hàm số $f(x)$ là hàm số lẻ.', isCorrect: true, explanation: '$f(-x) = -f(x)$.' },
          { key: 'b', text: 'Tích phân $\\int_{-1}^1 (x^3 - x)dx = 0$.', isCorrect: true, explanation: 'Tích phân hàm lẻ trên miền đối xứng bằng 0.' },
          { key: 'c', text: 'Diện tích hình phẳng giới hạn bởi đồ thị và trục hoành trên $[-1; 1]$ bằng 0.', isCorrect: false, explanation: 'Diện tích luôn dương $S > 0$.' },
          { key: 'd', text: 'Diện tích hình phẳng nói trên bằng $\\frac{1}{2}$.', isCorrect: true, explanation: '$2 \\int_0^1 (x - x^3)dx = 2(1/2 - 1/4) = 1/2$.' }
        ],
        fullExplanation: 'Tích phân hàm lẻ và diện tích.'
      },
      {
        id: 'c4_ex_tf2',
        context: 'Cho tích phân $I = \\int_1^e \\ln x dx$.',
        items: [
          { key: 'a', text: 'Đặt $u = \\ln x, dv = dx \\implies du = \\frac{1}{x}dx, v = x$.', isCorrect: true, explanation: 'Từng phần chuẩn.' },
          { key: 'b', text: '$I = [x\\ln x]_1^e - \\int_1^e x \\frac{1}{x}dx$.', isCorrect: true, explanation: 'Công thức từng phần.' },
          { key: 'c', text: 'Giá trị tích phân $I = 1$.', isCorrect: true, explanation: '$(e - 0) - (e - 1) = 1$.' },
          { key: 'd', text: 'Giá trị tích phân $I = e$.', isCorrect: false, explanation: '$I = 1$.' }
        ],
        fullExplanation: 'Tích phân từng phần của ln x.'
      },
      {
        id: 'c4_ex_tf3',
        context: 'Xét hình phẳng quay quanh trục $Ox$.',
        items: [
          { key: 'a', text: 'Quay hình tròn $x^2 + y^2 \\le R^2$ quanh $Ox$ tạo thành khối cầu thể tích $V = \\frac{4}{3}\\pi R^3$.', isCorrect: true, explanation: 'Công thức thể tích khối cầu.' },
          { key: 'b', text: 'Quay tam giác vuông quanh một cạnh góc vuông tạo thành khối nón.', isCorrect: true, explanation: 'Đúng theo định nghĩa khối nón.' },
          { key: 'c', text: 'Thể tích khối tròn xoay luôn tỷ lệ với $\\pi$.', isCorrect: true, explanation: 'Công thức luôn chứa hằng số pi.' },
          { key: 'd', text: 'Nếu đường cong nằm dưới trục hoành thì thể tích sẽ bị âm.', isCorrect: false, explanation: 'Bình phương $y^2 \\ge 0$ nên thể tích luôn dương.' }
        ],
        fullExplanation: 'Khối tròn xoay trong không gian.'
      },
      {
        id: 'c4_ex_tf4',
        context: 'Một bình chứa nước đang rò rỉ với tốc độ $r(t) = 200 - 4t$ (lít/phút) trong $50$ phút.',
        items: [
          { key: 'a', text: 'Tốc độ rò rỉ giảm dần theo thời gian.', isCorrect: true, explanation: '$r\'(t) = -4 < 0$.' },
          { key: 'b', text: 'Sau $50$ phút, tốc độ rò rỉ bằng $0$.', isCorrect: true, explanation: '$200 - 4(50) = 0$.' },
          { key: 'c', text: 'Tổng lượng nước bị rò rỉ là $5000$ lít.', isCorrect: true, explanation: '$\\int_0^{50} (200 - 4t)dt = 10000 - 5000 = 5000$ lít.' },
          { key: 'd', text: 'Trong 10 phút đầu, lượng nước rò rỉ là $2000$ lít.', isCorrect: false, explanation: '$\\int_0^{10} (200 - 4t)dt = 2000 - 200 = 1800$ lít.' }
        ],
        fullExplanation: 'Mô hình hóa dòng chảy và tích phân.'
      }
    ],
    part3: [
      { id: 'c4_ex_sa1', question: 'Tính $\\int_0^1 (4x^3 + 2x)dx$.', correctAnswer: '2', acceptedAnswers: ['2'], explanation: '$x^4 + x^2\\Big|_0^1 = 2$.' },
      { id: 'c4_ex_sa2', question: 'Tính diện tích hình phẳng giới hạn bởi $y = 2x, y = 0, x = 3$.', correctAnswer: '9', acceptedAnswers: ['9'], explanation: '$\\int_0^3 2x dx = 9$.' },
      { id: 'c4_ex_sa3', question: 'Cho $\\int_0^2 f(x)dx = 8$. Tính $\\int_0^1 f(2x)dx$.', correctAnswer: '4', acceptedAnswers: ['4'], explanation: '$8 / 2 = 4$.' },
      { id: 'c4_ex_sa4', question: 'Tính thể tích khối tròn xoay tạo bởi $y = \\sqrt{x}, y = 0, x = 2$ quanh $Ox$ (chia cho $\\pi$).', correctAnswer: '2', acceptedAnswers: ['2'], explanation: '$x^2/2\\Big|_0^2 = 2$.' },
      { id: 'c4_ex_sa5', question: 'Tính tích phân $\\int_1^4 \\frac{1}{2\\sqrt{x}} dx$.', correctAnswer: '1', acceptedAnswers: ['1'], explanation: '$\\sqrt{x}\\Big|_1^4 = 2 - 1 = 1$.' },
      { id: 'c4_ex_sa6', question: 'Biết $\\int_0^1 (x+2)e^x dx = a e + b$. Tính $a + b$.', correctAnswer: '1', acceptedAnswers: ['1'], explanation: '$2e - 1 \\implies a = 2, b = -1 \\implies a+b = 1$.' }
    ]
  }
};
