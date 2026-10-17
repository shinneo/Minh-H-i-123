import { Chapter } from '../types/mathTypes';

export const chapter2Data: Chapter = {
  id: 2,
  slug: 'toa-do-vecto-khong-gian',
  code: 'CHƯƠNG II',
  title: 'Tọa Độ Của Vectơ Trong Không Gian',
  subtitle: 'Vectơ không gian, hệ trục tọa độ Oxyz, tọa độ điểm và các phép toán vectơ',
  semester: 1,
  icon: '/assets/s1_trangmo_02.svg',
  color: 'emerald',
  gradient: 'from-emerald-600 to-teal-500',
  stats: {
    lessons: 4,
    mcCount: 15,
    tfCount: 5,
    saCount: 5,
  },
  theory: {
    title: 'Củng cố kiến thức trọng tâm Chương 2',
    summary: [
      '**Hệ tọa độ $Oxyz$**: Gồm 3 trục đôi một vuông góc $Ox, Oy, Oz$ với các vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$.',
      '**Tọa độ điểm và vectơ**: $\\vec{u} = (x; y; z) \\iff \\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$. Điểm $M(x; y; z) \\iff \\vec{OM} = (x; y; z)$.',
      '**Tích vô hướng**: $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2 = |\\vec{u}| |\\vec{v}| \\cos(\\vec{u}, \\vec{v})$.',
      '**Độ dài vectơ & Khoảng cách**: $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$, $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.'
    ],
    keyFormulas: [
      {
        name: 'Tích có hướng của hai vectơ',
        formula: '[\\vec{u}, \\vec{v}] = \\left( \\begin{vmatrix} y_1 & z_1 \\\\ y_2 & z_2 \\end{vmatrix}; \\begin{vmatrix} z_1 & x_1 \\\\ z_2 & x_2 \\end{vmatrix}; \\begin{vmatrix} x_1 & y_1 \\\\ x_2 & y_2 \\end{vmatrix} \\right)',
        note: 'Vectơ $[\\vec{u}, \\vec{v}]$ vuông góc với cả $\\vec{u}$ và $\\vec{v}$.'
      },
      {
        name: 'Góc giữa hai vectơ',
        formula: '\\cos(\\vec{u}, \\vec{v}) = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2+y_1^2+z_1^2} \\cdot \\sqrt{x_2^2+y_2^2+z_2^2}}',
        note: '\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0.'
      },
      {
        name: 'Tọa độ trung điểm và trọng tâm',
        formula: 'M = \\frac{A+B}{2}, \\quad G = \\frac{A+B+C}{3}',
        note: 'Cộng tọa độ tương ứng rồi chia cho số điểm.'
      }
    ],
    typicalMethods: [
      {
        name: 'Dạng 1: Tìm tọa độ điểm, trung điểm, trọng tâm, đỉnh thứ tư hình bình hành',
        steps: [
          'Dùng công thức $\\vec{AB} = \\vec{DC} \\iff B - A = C - D \\implies D = A + C - B$.',
          'Tìm trọng tâm tam giác hoặc trọng tâm tứ diện $G = \\frac{A+B+C+D}{4}$.'
        ]
      },
      {
        name: 'Dạng 2: Ứng dụng tích có hướng tính diện tích và thể tích',
        steps: [
          'Diện tích tam giác $S_{ABC} = \\frac{1}{2} |[\\vec{AB}, \\vec{AC}]|$.',
          'Thể tích tứ diện $V_{ABCD} = \\frac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$.'
        ]
      }
    ],
    pitfalls: [
      'Quên dấu trừ ở định thức tọa độ $y$ khi tính tích có hướng.',
      'Nhầm lẫn giữa góc giữa hai vectơ (từ $0^\\circ$ đến $180^\\circ$) và góc giữa hai đường thẳng (từ $0^\\circ$ đến $90^\\circ$).'
    ]
  },
  mcBank: [
    {
      id: 'c2_mc_01',
      question: 'Trong không gian $Oxyz$, cho $\\vec{a} = 2\\vec{i} - 3\\vec{j} + 5\\vec{k}$. Tọa độ của vectơ $\\vec{a}$ là:',
      options: [
        { key: 'A', text: '$(2; -3; 5)$' },
        { key: 'B', text: '$(2; 3; 5)$' },
        { key: 'C', text: '$(-2; 3; -5)$' },
        { key: 'D', text: '$(5; -3; 2)$' }
      ],
      correctKey: 'A',
      explanation: '$\\vec{a} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\implies \\vec{a} = (2; -3; 5)$.'
    },
    {
      id: 'c2_mc_02',
      question: 'Cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 5)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:',
      options: [
        { key: 'A', text: '$(2; 1; 2)$' },
        { key: 'B', text: '$(4; 2; 4)$' },
        { key: 'C', text: '$(2; -2; 6)$' },
        { key: 'D', text: '$(1; -1; 3)$' }
      ],
      correctKey: 'A',
      explanation: '$x_M = (1+3)/2 = 2$, $y_M = (2+0)/2 = 1$, $z_M = (-1+5)/2 = 2$. Vậy $M(2; 1; 2)$.'
    },
    {
      id: 'c2_mc_03',
      question: 'Độ dài của vectơ $\\vec{u} = (2; -1; -2)$ bằng:',
      options: [
        { key: 'A', text: '$3$' },
        { key: 'B', text: '$9$' },
        { key: 'C', text: '$\\sqrt{5}$' },
        { key: 'D', text: '$\\sqrt{7}$' }
      ],
      correctKey: 'A',
      explanation: '$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + (-2)^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$.'
    },
    {
      id: 'c2_mc_04',
      question: 'Tích vô hướng của hai vectơ $\\vec{u} = (1; 2; -3)$ và $\\vec{v} = (4; -1; 2)$ bằng:',
      options: [
        { key: 'A', text: '$-4$' },
        { key: 'B', text: '$4$' },
        { key: 'C', text: '$-8$' },
        { key: 'D', text: '$2$' }
      ],
      correctKey: 'A',
      explanation: '$\\vec{u} \\cdot \\vec{v} = 1(4) + 2(-1) + (-3)(2) = 4 - 2 - 6 = -4$.'
    },
    {
      id: 'c2_mc_05',
      question: 'Góc giữa hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$ bằng:',
      options: [
        { key: 'A', text: '$60^\\circ$' },
        { key: 'B', text: '$45^\\circ$' },
        { key: 'C', text: '$90^\\circ$' },
        { key: 'D', text: '$120^\\circ$' }
      ],
      correctKey: 'A',
      explanation: '$\\cos(\\vec{a}, \\vec{b}) = \\frac{1(0) + 0(1) + 1(1)}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies \\text{góc} = 60^\\circ$.'
    },
    {
      id: 'c2_mc_06',
      question: 'Hình chiếu vuông góc của điểm $M(2; -3; 5)$ lên mặt phẳng $(Oxy)$ có tọa độ là:',
      options: [
        { key: 'A', text: '$(2; -3; 0)$' },
        { key: 'B', text: '$(0; 0; 5)$' },
        { key: 'C', text: '$(2; 0; 5)$' },
        { key: 'D', text: '$(0; -3; 5)$' }
      ],
      correctKey: 'A',
      explanation: 'Chiếu lên $(Oxy)$ thì giữ nguyên $x, y$ và cho $z = 0 \\implies (2; -3; 0)$.'
    },
    {
      id: 'c2_mc_07',
      question: 'Trong không gian $Oxyz$, cho $A(1; 1; 0), B(0; 2; 1), C(1; 0; 2)$. Trọng tâm $G$ của tam giác $ABC$ là:',
      options: [
        { key: 'A', text: '$\\left(\\frac{2}{3}; 1; 1\\right)$' },
        { key: 'B', text: '$(2; 3; 3)$' },
        { key: 'C', text: '$\\left(1; \\frac{2}{3}; 1\\right)$' },
        { key: 'D', text: '$(0; 1; 1)$' }
      ],
      correctKey: 'A',
      explanation: '$x_G = (1+0+1)/3 = 2/3$, $y_G = (1+2+0)/3 = 1$, $z_G = (0+1+2)/3 = 1$.'
    },
    {
      id: 'c2_mc_08',
      question: 'Tìm $m$ để hai vectơ $\\vec{u} = (2; m; 1)$ và $\\vec{v} = (1; -2; 4)$ vuông góc với nhau.',
      options: [
        { key: 'A', text: '$m = 3$' },
        { key: 'B', text: '$m = -3$' },
        { key: 'C', text: '$m = 2$' },
        { key: 'D', text: '$m = -2$' }
      ],
      correctKey: 'A',
      explanation: '$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 2(1) - 2m + 4 = 6 - 2m = 0 \\iff m = 3$.'
    },
    {
      id: 'c2_mc_09',
      question: 'Cho hình bình hành $ABCD$ có $A(1; 0; 1), B(2; 1; 2), C(1; 3; 1)$. Tọa độ đỉnh $D$ là:',
      options: [
        { key: 'A', text: '$(0; 2; 0)$' },
        { key: 'B', text: '$(2; 2; 2)$' },
        { key: 'C', text: '$(0; 4; 0)$' },
        { key: 'D', text: '(-1; 2; -1)' }
      ],
      correctKey: 'A',
      explanation: 'Ta có $D = A + C - B = (1+1-2; 0+3-1; 1+1-2) = (0; 2; 0)$.'
    },
    {
      id: 'c2_mc_10',
      question: 'Tích có hướng $[\\vec{i}, \\vec{j}]$ bằng vectơ nào sau đây?',
      options: [
        { key: 'A', text: '$\\vec{k}$' },
        { key: 'B', text: '$-\\vec{k}$' },
        { key: 'C', text: '$\\vec{0}$' },
        { key: 'D', text: '$\\vec{i}$' }
      ],
      correctKey: 'A',
      explanation: 'Theo tính chất hệ trục tọa độ thuận, $[\\vec{i}, \\vec{j}] = \\vec{k}$.'
    },
    {
      id: 'c2_mc_11',
      question: 'Khoảng cách từ điểm $M(1; -2; 3)$ đến trục $Oz$ bằng:',
      options: [
        { key: 'A', text: '$\\sqrt{5}$' },
        { key: 'B', text: '$3$' },
        { key: 'C', text: '$\\sqrt{13}$' },
        { key: 'D', text: '$\\sqrt{14}$' }
      ],
      correctKey: 'A',
      explanation: 'Khoảng cách đến trục $Oz$ là $d = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + (-2)^2} = \\sqrt{5}$.'
    },
    {
      id: 'c2_mc_12',
      question: 'Cho hai vectơ $\\vec{u} = (1; 2; 3)$ và $\\vec{v} = (2; 4; 6)$. Khẳng định nào sau đây đúng?',
      options: [
        { key: 'A', text: '$\\vec{u}$ và $\\vec{v}$ cùng phương' },
        { key: 'B', text: '$\\vec{u}$ và $\\vec{v}$ vuông góc' },
        { key: 'C', text: '$\\vec{u} + \\vec{v} = \\vec{0}$' },
        { key: 'D', text: '$|\\vec{u}| = |\\vec{v}|$' }
      ],
      correctKey: 'A',
      explanation: '$\\vec{v} = 2\\vec{u}$ nên hai vectơ cùng hướng và cùng phương.'
    },
    {
      id: 'c2_mc_13',
      question: 'Cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Thể tích khối tứ diện $OABC$ bằng:',
      options: [
        { key: 'A', text: '$1$' },
        { key: 'B', text: '$6$' },
        { key: 'C', text: '$2$' },
        { key: 'D', text: '$3$' }
      ],
      correctKey: 'A',
      explanation: 'Khối tứ diện có 3 cạnh đôi một vuông góc $OA, OB, OC \\implies V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} \\times 1 \\times 2 \\times 3 = 1$.'
    },
    {
      id: 'c2_mc_14',
      question: 'Điểm đối xứng của $P(1; 2; 3)$ qua gốc tọa độ $O$ là:',
      options: [
        { key: 'A', text: '$(-1; -2; -3)$' },
        { key: 'B', text: '$(1; 2; -3)$' },
        { key: 'C', text: '$(-1; 2; 3)$' },
        { key: 'D', text: '$(1; -2; 3)$' }
      ],
      correctKey: 'A',
      explanation: 'Đối xứng qua gốc $O$ đổi dấu cả 3 tọa độ: $(-1; -2; -3)$.'
    },
    {
      id: 'c2_mc_15',
      question: 'Một chất điểm chịu tác dụng của hai lực $\\vec{F}_1 = (20; 30; 0)$ và $\\vec{F}_2 = (10; -10; 40)$ (đơn vị Newton). Độ lớn hợp lực tác dụng lên chất điểm xấp xỉ bằng:',
      options: [
        { key: 'A', text: '$53.9\\text{ N}$' },
        { key: 'B', text: '$60.0\\text{ N}$' },
        { key: 'C', text: '$45.2\\text{ N}$' },
        { key: 'D', text: '$70.5\\text{ N}$' }
      ],
      correctKey: 'A',
      explanation: '$\\vec{F} = \\vec{F}_1 + \\vec{F}_2 = (30; 20; 40) \\implies |\\vec{F}| = \\sqrt{900 + 400 + 1600} = \\sqrt{2900} \\approx 53.85\\text{ N}$.'
    }
  ],
  tfBank: [
    {
      id: 'c2_tf_01',
      context: 'Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$.',
      items: [
        { key: 'a', text: 'Tọa độ vectơ $\\vec{AB} = (1; -3; 4)$.', isCorrect: true, explanation: '$\\vec{AB} = (2-1; -1-2; 3-(-1)) = (1; -3; 4)$.' },
        { key: 'b', text: 'Độ dài đoạn thẳng $AB = \\sqrt{26}$.', isCorrect: true, explanation: '$AB = \\sqrt{1^2 + (-3)^2 + 4^2} = \\sqrt{26}$.' },
        { key: 'c', text: 'Tọa độ trọng tâm $G$ của tam giác $ABC$ là $G(-1; 8; 7)$.', isCorrect: false, explanation: '$G = ((1+2-4)/3; (2-1+7)/3; (-1+3+5)/3) = (-1/3; 8/3; 7/3)$.' },
        { key: 'd', text: 'Tam giác $ABC$ vuông tại $A$.', isCorrect: true, explanation: '$\\vec{AC} = (-5; 5; 6) \\implies \\vec{AB} \\cdot \\vec{AC} = 1(-5) - 3(5) + 4(6) = -5 - 15 + 24 = 4 \\ne 0$. Sai.' }
      ],
      fullExplanation: 'Kiểm tra tọa độ các đỉnh tam giác, tính độ dài và kiểm tra tính vuông góc.'
    },
    {
      id: 'c2_tf_02',
      context: 'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$ có $A$ trùng với gốc tọa độ $O(0;0;0)$, các đỉnh $B(3; 0; 0), D(0; 4; 0), A\'(0; 0; 5)$.',
      items: [
        { key: 'a', text: 'Tọa độ đỉnh $C$ là $(3; 4; 0)$.', isCorrect: true, explanation: '$C$ nằm trên mặt phẳng đáy $(Oxy)$, $x_C = 3, y_C = 4, z_C = 0$.' },
        { key: 'b', text: 'Tọa độ đỉnh $C\'$ là $(3; 4; 5)$.', isCorrect: true, explanation: '$C\' = C + \\vec{AA\'} = (3; 4; 5)$.' },
        { key: 'c', text: 'Độ dài đường chéo $AC\' = 5\\sqrt{2}$.', isCorrect: true, explanation: '$AC\' = \\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$.' },
        { key: 'd', text: 'Thể tích hình hộp chữ nhật bằng $60$.', isCorrect: true, explanation: '$V = a \\times b \\times c = 3 \\times 4 \\times 5 = 60$.' }
      ],
      fullExplanation: 'Hình hộp chữ nhật gắn hệ trục tọa độ chuẩn.'
    },
    {
      id: 'c2_tf_03',
      context: 'Cho hai vectơ $\\vec{u} = (1; -2; 2)$ và $\\vec{v} = (2; 1; -2)$.',
      items: [
        { key: 'a', text: '$|\\vec{u}| = |\\vec{v}| = 3$.', isCorrect: true, explanation: '$\\sqrt{1+4+4} = 3$ và $\\sqrt{4+1+4} = 3$.' },
        { key: 'b', text: '$\\vec{u} \\cdot \\vec{v} = -4$.', isCorrect: true, explanation: '$1(2) - 2(1) + 2(-2) = 2 - 2 - 4 = -4$.' },
        { key: 'c', text: '$\\cos(\\vec{u}, \\vec{v}) = -\\frac{4}{9}$.', isCorrect: true, explanation: '$\\cos = -4 / (3 \\times 3) = -4/9$.' },
        { key: 'd', text: 'Góc giữa $\\vec{u}$ và $\\vec{v}$ là một góc nhọn.', isCorrect: false, explanation: 'Vì $\\cos < 0$ nên góc giữa hai vectơ là góc tù.' }
      ],
      fullExplanation: 'Tích vô hướng và góc giữa hai vectơ.'
    },
    {
      id: 'c2_tf_04',
      context: 'Cho ba vectơ $\\vec{a} = (1; 1; 1), \\vec{b} = (1; 2; 0), \\vec{c} = (2; 1; 3)$.',
      items: [
        { key: 'a', text: 'Tích có hướng $[\\vec{a}, \\vec{b}] = (-2; 1; 1)$.', isCorrect: true, explanation: '$[\\vec{a}, \\vec{b}] = (1(0)-1(2); 1(1)-1(0); 1(2)-1(1)) = (-2; 1; 1)$.' },
        { key: 'b', text: '$[\\vec{a}, \\vec{b}] \\cdot \\vec{c} = 0$.', isCorrect: true, explanation: '$-2(2) + 1(1) + 1(3) = -4 + 1 + 3 = 0$.' },
        { key: 'c', text: 'Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng.', isCorrect: true, explanation: 'Tích hỗn tạp $[\\vec{a}, \\vec{b}] \\cdot \\vec{c} = 0 \\iff$ đồng phẳng.' },
        { key: 'd', text: '$\\vec{a}$ vuông góc với $\\vec{b}$.', isCorrect: false, explanation: '$\\vec{a} \\cdot \\vec{b} = 1 + 2 + 0 = 3 \\ne 0$.' }
      ],
      fullExplanation: 'Tích có hướng và tính đồng phẳng của ba vectơ.'
    },
    {
      id: 'c2_tf_05',
      context: 'Một chiếc máy bay không người lái (drone) cất cánh từ điểm $O(0;0;0)$ bay thẳng đều đến vị trí $A(300; 400; 1200)$ sau 13 giây (khoảng cách tính bằng mét).',
      items: [
        { key: 'a', text: 'Độ cao của drone khi đến điểm $A$ là $1200\\text{ m}$.', isCorrect: true, explanation: 'Tung độ trục $Oz$ là cao độ $= 1200\\text{ m}$.' },
        { key: 'b', text: 'Quãng đường drone đã bay được là $1300\\text{ m}$.', isCorrect: true, explanation: '$OA = \\sqrt{300^2 + 400^2 + 1200^2} = \\sqrt{250000 + 1440000} = \\sqrt{1690000} = 1300\\text{ m}$.' },
        { key: 'c', text: 'Tốc độ trung bình của drone là $100\\text{ m/s}$.', isCorrect: true, explanation: '$v = 1300 / 13 = 100\\text{ m/s} = 360\\text{ km/h}$.' },
        { key: 'd', text: 'Sau 6.5 giây, drone ở vị trí có cao độ $500\\text{ m}$.', isCorrect: false, explanation: 'Sau một nửa thời gian, cao độ là $1200 / 2 = 600\\text{ m}$, không phải 500m.' }
      ],
      fullExplanation: 'Bài toán mô hình hóa thực tế chuyển động không gian ba chiều Oxyz.'
    }
  ],
  saBank: [
    {
      id: 'c2_sa_01',
      question: 'Tính khoảng cách giữa hai điểm $A(1; 3; -2)$ và $B(4; -1; -2)$.',
      correctAnswer: '5',
      acceptedAnswers: ['5'],
      explanation: '$AB = \\sqrt{(4-1)^2 + (-1-3)^2 + (-2 - (-2))^2} = \\sqrt{3^2 + (-4)^2 + 0} = 5$.'
    },
    {
      id: 'c2_sa_02',
      question: 'Cho tam giác $ABC$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 2)$. Tính diện tích tam giác $ABC$ (làm tròn đến hàng phần mười).',
      correctAnswer: '2.4',
      acceptedAnswers: ['2.4', 'sqrt(6)', 'căn 6'],
      explanation: '$\\vec{AB} = (-1; 2; 0), \\vec{AC} = (-1; 0; 2) \\implies [\\vec{AB}, \\vec{AC}] = (4; 2; 2) \\implies S = \\frac{1}{2}\\sqrt{16+4+4} = \\frac{\\sqrt{24}}{2} = \\sqrt{6} \\approx 2.45 \\approx 2.4$.'
    },
    {
      id: 'c2_sa_03',
      question: 'Tìm $m$ để vectơ $\\vec{u} = (m; 2; -1)$ có độ dài bằng $3$. (Nhập nghiệm dương).',
      correctAnswer: '2',
      acceptedAnswers: ['2'],
      explanation: '$|\\vec{u}|^2 = m^2 + 4 + 1 = 9 \\implies m^2 = 4 \\implies m = 2$.'
    },
    {
      id: 'c2_sa_04',
      question: 'Cho hai vectơ $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (3; 2; 1)$. Tính giá trị của $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b})$.',
      correctAnswer: '0',
      acceptedAnswers: ['0'],
      explanation: '$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2$. Vì $|\\vec{a}|^2 = 1+4+9=14$ và $|\\vec{b}|^2 = 9+4+1=14$, hiệu bằng $0$.'
    },
    {
      id: 'c2_sa_05',
      question: 'Một chất điểm nằm cân bằng dưới tác dụng của 3 lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. Biết $\\vec{F}_1 = (10; -5; 20)$ và $\\vec{F}_2 = (-4; 12; -8)$ (đơn vị Newton). Tính tổng hoành độ, tung độ và cao độ của lực $\\vec{F}_3$.',
      correctAnswer: '-25',
      acceptedAnswers: ['-25'],
      explanation: '$\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) = -(6; 7; 12) = (-6; -7; -12)$. Tổng tọa độ là $-6 - 7 - 12 = -25$.'
    }
  ],
  chapterExam: {
    id: 'exam_ch2',
    title: 'Đề Ôn Tập Chương II - Tọa Độ Của Vectơ Trong Không Gian',
    durationMinutes: 60,
    part1: [
      {
        id: 'c2_ex_mc1',
        question: 'Trong không gian $Oxyz$, cho $\\vec{u} = -\\vec{i} + 2\\vec{k}$. Tọa độ của $\\vec{u}$ là:',
        options: [
          { key: 'A', text: '$(-1; 0; 2)$' },
          { key: 'B', text: '$(-1; 2; 0)$' },
          { key: 'C', text: '$(0; -1; 2)$' },
          { key: 'D', text: '$(1; 0; -2)$' }
        ],
        correctKey: 'A',
        explanation: 'Khuyết $\\vec{j}$ nên tung độ $y = 0 \\implies (-1; 0; 2)$.'
      },
      {
        id: 'c2_ex_mc2',
        question: 'Khoảng cách giữa hai điểm $M(1; -1; 2)$ và $N(3; 1; 1)$ là:',
        options: [
          { key: 'A', text: '$3$' },
          { key: 'B', text: '$9$' },
          { key: 'C', text: '$\\sqrt{5}$' },
          { key: 'D', text: '$\\sqrt{17}$' }
        ],
        correctKey: 'A',
        explanation: '$MN = \\sqrt{(3-1)^2 + (1 - (-1))^2 + (1-2)^2} = \\sqrt{4 + 4 + 1} = 3$.'
      },
      {
        id: 'c2_ex_mc3',
        question: 'Góc giữa hai trục tọa độ $Ox$ và $Oz$ bằng:',
        options: [
          { key: 'A', text: '$90^\\circ$' },
          { key: 'B', text: '$0^\\circ$' },
          { key: 'C', text: '$180^\\circ$' },
          { key: 'D', text: '$45^\\circ$' }
        ],
        correctKey: 'A',
        explanation: 'Ba trục $Ox, Oy, Oz$ đôi một vuông góc nên góc bằng $90^\\circ$.'
      },
      {
        id: 'c2_ex_mc4',
        question: 'Tích vô hướng $\\vec{i} \\cdot \\vec{k}$ bằng:',
        options: [
          { key: 'A', text: '$0$' },
          { key: 'B', text: '$1$' },
          { key: 'C', text: '$-1$' },
          { key: 'D', text: '$\\vec{j}$' }
        ],
        correctKey: 'A',
        explanation: 'Vì $\\vec{i} \\perp \\vec{k}$ nên tích vô hướng bằng $0$.'
      },
      {
        id: 'c2_ex_mc5',
        question: 'Tọa độ trung điểm của đoạn thẳng nối $P(0; 2; 4)$ và $Q(6; -4; 0)$ là:',
        options: [
          { key: 'A', text: '$(3; -1; 2)$' },
          { key: 'B', text: '$(6; -2; 4)$' },
          { key: 'C', text: '$(3; -2; 2)$' },
          { key: 'D', text: '$(3; 1; 2)$' }
        ],
        correctKey: 'A',
        explanation: '$((0+6)/2; (2-4)/2; (4+0)/2) = (3; -1; 2)$.'
      },
      {
        id: 'c2_ex_mc6',
        question: 'Vectơ nào sau đây cùng phương với $\\vec{a} = (2; -4; 6)$?',
        options: [
          { key: 'A', text: '$\\vec{b} = (-1; 2; -3)$' },
          { key: 'B', text: '$\\vec{b} = (1; 2; 3)$' },
          { key: 'C', text: '$\\vec{b} = (2; 4; 6)$' },
          { key: 'D', text: '$\\vec{b} = (-2; -4; -6)$' }
        ],
        correctKey: 'A',
        explanation: '$\\vec{b} = -\\frac{1}{2}\\vec{a} = (-1; 2; -3)$ cùng phương.'
      },
      {
        id: 'c2_ex_mc7',
        question: 'Độ dài đoạn thẳng $OA$ với $A(-2; 3; -6)$ bằng:',
        options: [
          { key: 'A', text: '$7$' },
          { key: 'B', text: '$\\sqrt{49}$' },
          { key: 'C', text: '$5$' },
          { key: 'D', text: '$9$' }
        ],
        correctKey: 'A',
        explanation: '$OA = \\sqrt{(-2)^2 + 3^2 + (-6)^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.'
      },
      {
        id: 'c2_ex_mc8',
        question: 'Cho hai vectơ $\\vec{u} = (1; 0; 2)$ và $\\vec{v} = (0; 3; 1)$. Tọa độ của $2\\vec{u} - \\vec{v}$ là:',
        options: [
          { key: 'A', text: '$(2; -3; 3)$' },
          { key: 'B', text: '$(2; 3; 5)$' },
          { key: 'C', text: '$(1; -3; 1)$' },
          { key: 'D', text: '$(2; -3; 5)$' }
        ],
        correctKey: 'A',
        explanation: '$2(1; 0; 2) - (0; 3; 1) = (2; 0; 4) - (0; 3; 1) = (2; -3; 3)$.'
      },
      {
        id: 'c2_ex_mc9',
        question: 'Cho $A(1; 2; 3), B(2; 1; 1)$. Tọa độ vectơ $\\vec{BA}$ là:',
        options: [
          { key: 'A', text: '$(-1; 1; 2)$' },
          { key: 'B', text: '$(1; -1; -2)$' },
          { key: 'C', text: '$(3; 3; 4)$' },
          { key: 'D', text: '$(-1; -1; -2)$' }
        ],
        correctKey: 'A',
        explanation: '$\\vec{BA} = A - B = (1-2; 2-1; 3-1) = (-1; 1; 2)$.'
      },
      {
        id: 'c2_ex_mc10',
        question: 'Hình chiếu của điểm $A(3; 4; -5)$ lên trục $Oy$ là:',
        options: [
          { key: 'A', text: '$(0; 4; 0)$' },
          { key: 'B', text: '$(3; 0; 0)$' },
          { key: 'C', text: '$(0; 0; -5)$' },
          { key: 'D', text: '$(3; 4; 0)$' }
        ],
        correctKey: 'A',
        explanation: 'Chiếu lên trục $Oy$ thì $x = z = 0 \\implies (0; 4; 0)$.'
      },
      {
        id: 'c2_ex_mc11',
        question: 'Giá trị $\\cos$ của góc giữa hai vectơ $\\vec{u} = (2; 1; 0)$ và $\\vec{v} = (1; 2; 0)$ bằng:',
        options: [
          { key: 'A', text: '$\\frac{4}{5}$' },
          { key: 'B', text: '$\\frac{3}{5}$' },
          { key: 'C', text: '$1$' },
          { key: 'D', text: '$0$' }
        ],
        correctKey: 'A',
        explanation: '$\\vec{u} \\cdot \\vec{v} = 2(1) + 1(2) = 4$. Độ dài: $\\sqrt{5} \\times \\sqrt{5} = 5$. Vậy $\\cos = 4/5$.'
      },
      {
        id: 'c2_ex_mc12',
        question: 'Cho ba điểm $A, B, C$ phân biệt. Điều kiện cần và đủ để ba điểm $A, B, C$ thẳng hàng là:',
        options: [
          { key: 'A', text: 'Tồn tại số $k$ sao cho $\\vec{AB} = k\\vec{AC}$' },
          { key: 'B', text: '$\\vec{AB} \\cdot \\vec{AC} = 0$' },
          { key: 'C', text: '$AB + BC = AC$' },
          { key: 'D', text: '$\\vec{AB} = \\vec{AC}$' }
        ],
        correctKey: 'A',
        explanation: 'Ba điểm thẳng hàng khi và chỉ khi hai vectơ cùng gốc cùng phương.'
      }
    ],
    part2: [
      {
        id: 'c2_ex_tf1',
        context: 'Trong không gian $Oxyz$, cho 4 điểm $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$.',
        items: [
          { key: 'a', text: 'Tam giác $ABC$ là tam giác đều.', isCorrect: true, explanation: '$AB = BC = CA = \\sqrt{2}$.' },
          { key: 'b', text: 'Tọa độ trọng tâm $G$ của tứ diện $ABCD$ là $\\left(\\frac{1}{2}; \\frac{1}{2}; \\frac{1}{2}\\right)$.', isCorrect: true, explanation: '$G = (1+0+0+1)/4 = 1/2$.' },
          { key: 'c', text: 'Vectơ $\\vec{OD} = \\vec{OA} + \\vec{OB} + \\vec{OC}$.', isCorrect: true, explanation: '$\\vec{OD} = (1; 1; 1) = (1;0;0) + (0;1;0) + (0;0;1)$.' },
          { key: 'd', text: 'Thể tích khối tứ diện $ABCD$ bằng $\\frac{1}{3}$.', isCorrect: false, explanation: '$V = 1/3$ là sai (tính tích hỗn tạp cho ra $V = 1/3$, kiểm tra $V = 1/6 |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}| = 1/3$).' }
        ],
        fullExplanation: 'Khối tứ diện đều và trọng tâm.'
      },
      {
        id: 'c2_ex_tf2',
        context: 'Cho $\\vec{u} = (2; -1; 2)$ và $\\vec{v} = (1; 2; -2)$.',
        items: [
          { key: 'a', text: '$|\\vec{u}| = 3$.', isCorrect: true, explanation: '$\\sqrt{4+1+4} = 3$.' },
          { key: 'b', text: '$\\vec{u} \\cdot \\vec{v} = -4$.', isCorrect: true, explanation: '$2(1) - 1(2) + 2(-2) = -4$.' },
          { key: 'c', text: '$[\\vec{u}, \\vec{v}] = (-2; 6; 5)$.', isCorrect: true, explanation: 'Định thức: $2 - 4 = -2, 2 - (-4) = 6, 4 - (-1) = 5$.' },
          { key: 'd', text: 'Góc giữa hai vectơ là góc nhọn.', isCorrect: false, explanation: '$\\cos < 0$ nên là góc tù.' }
        ],
        fullExplanation: 'Tính toán cơ bản vectơ.'
      },
      {
        id: 'c2_ex_tf3',
        context: 'Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Gắn hệ trục $Oxyz$ với $A$ là gốc $O$, tia $AB$ là $Ox$, $AD$ là $Oy$, $AS$ là $Oz$.',
        items: [
          { key: 'a', text: 'Tọa độ điểm $B$ là $(a; 0; 0)$ và $D$ là $(0; a; 0)$.', isCorrect: true, explanation: 'Chuẩn theo cách đặt hệ trục.' },
          { key: 'b', text: 'Tọa độ điểm $C$ là $(a; a; 0)$.', isCorrect: true, explanation: '$C$ có $x=a, y=a, z=0$.' },
          { key: 'c', text: 'Tọa độ điểm $S$ là $(0; 0; a)$.', isCorrect: true, explanation: '$S$ nằm trên trục $Oz$.' },
          { key: 'd', text: 'Độ dài cạnh $SC = a\\sqrt{2}$.', isCorrect: false, explanation: '$SC = \\sqrt{a^2 + a^2 + a^2} = a\\sqrt{3}$.' }
        ],
        fullExplanation: 'Phương pháp gắn hệ tọa độ giải bài toán hình không gian.'
      },
      {
        id: 'c2_ex_tf4',
        context: 'Một chiếc lều chữ A được dựng trong không gian ba chiều với các đỉnh cột chống tại $A(0; 0; 0), B(4; 0; 0), C(4; 6; 0), D(0; 6; 0)$ và đỉnh nóc lều $S(2; 3; 2.5)$.',
        items: [
          { key: 'a', text: 'Mặt phẳng đáy lều $(ABCD)$ nằm trên mặt phẳng tọa độ $(Oxy)$.', isCorrect: true, explanation: 'Các điểm đều có cao độ $z = 0$.' },
          { key: 'b', text: 'Diện tích mặt đáy lều là $24\\text{ m}^2$.', isCorrect: true, explanation: '$S = 4 \\times 6 = 24$.' },
          { key: 'c', text: 'Chiều cao của nóc lều so với mặt đất là $2.5\\text{ m}$.', isCorrect: true, explanation: 'Cao độ $z_S = 2.5$.' },
          { key: 'd', text: 'Hình chiếu của nóc lều $S$ xuống mặt đất trùng với tâm của đáy $ABCD$.', isCorrect: false, explanation: 'Tâm đáy là $((0+4)/2; (0+6)/2; 0) = (2; 3; 0)$. Hình chiếu của $S$ đúng là $(2; 3; 0)$.' }
        ],
        fullExplanation: 'Mô hình hóa hình học không gian kiến trúc.'
      }
    ],
    part3: [
      {
        id: 'c2_ex_sa1',
        question: 'Độ dài của vectơ $\\vec{u} = (3; -4; 12)$ bằng bao nhiêu?',
        correctAnswer: '13',
        acceptedAnswers: ['13'],
        explanation: '$\\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.'
      },
      {
        id: 'c2_ex_sa2',
        question: 'Tìm $m$ để hai vectơ $\\vec{a} = (m; 1; 2)$ và $\\vec{b} = (2; -4; 1)$ vuông góc với nhau.',
        correctAnswer: '1',
        acceptedAnswers: ['1'],
        explanation: '$2m - 4 + 2 = 0 \\iff 2m = 2 \\iff m = 1$.'
      },
      {
        id: 'c2_ex_sa3',
        question: 'Cho tam giác $ABC$ có $A(2; 1; 3), B(4; 3; 5)$. Tọa độ trung điểm $M$ của $AB$ có tổng $x_M + y_M + z_M$ bằng bao nhiêu?',
        correctAnswer: '9',
        acceptedAnswers: ['9'],
        explanation: '$M(3; 2; 4) \\implies 3 + 2 + 4 = 9$.'
      },
      {
        id: 'c2_ex_sa4',
        question: 'Cho hình hộp chữ nhật có 3 kích thước là $2, 3, 6$. Độ dài đường chéo của hình hộp chữ nhật đó bằng bao nhiêu?',
        correctAnswer: '7',
        acceptedAnswers: ['7'],
        explanation: '$\\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.'
      },
      {
        id: 'c2_ex_sa5',
        question: 'Trong không gian $Oxyz$, cho $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Tính thể tích khối tứ diện $OABC$.',
        correctAnswer: '1',
        acceptedAnswers: ['1'],
        explanation: '$V = \\frac{1}{6} \\times 1 \\times 2 \\times 3 = 1$.'
      },
      {
        id: 'c2_ex_sa6',
        question: 'Cho hai lực $\\vec{F}_1 = (10; 20; 0)$ và $\\vec{F}_2 = (20; -20; 0)$ cùng tác dụng vào một vật. Tính độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ (đơn vị Newton).',
        correctAnswer: '30',
        acceptedAnswers: ['30', '30 N'],
        explanation: '$\\vec{F} = (30; 0; 0) \\implies |\\vec{F}| = 30\\text{ N}$.'
      }
    ]
  }
};
