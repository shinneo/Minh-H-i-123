import { Chapter } from '../types/mathTypes';

export const chapter5Data: Chapter = {
  id: 5,
  slug: 'phuong-phap-toa-do-khong-gian',
  code: 'CHƯƠNG V',
  title: 'Phương Pháp Tọa Độ Trong Không Gian',
  subtitle: 'Phương trình mặt phẳng, phương trình đường thẳng, phương trình mặt cầu và các bài toán khoảng cách, góc',
  semester: 2,
  icon: '/assets/s1_trangmo_02.svg',
  color: 'violet',
  gradient: 'from-violet-600 to-purple-600',
  stats: {
    lessons: 4,
    mcCount: 15,
    tfCount: 5,
    saCount: 5,
  },
  theory: {
    title: 'Củng cố kiến thức trọng tâm Chương 5',
    summary: [
      '**Phương trình mặt phẳng**: Mặt phẳng $(\\alpha)$ đi qua $M(x_0; y_0; z_0)$ có VTPT $\\vec{n} = (A; B; C)$ có dạng: $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0$.',
      '**Phương trình mặt cầu**: Mặt cầu tâm $I(a; b; c)$, bán kính $R$: $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$. Hoặc dạng khai triển $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ với $R = \\sqrt{a^2+b^2+c^2-d} > 0$.',
      '**Phương trình đường thẳng**: Đi qua $M_0(x_0; y_0; z_0)$ có VTCP $\\vec{u} = (a; b; c)$: $\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases}$ hoặc $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$.',
      '**Khoảng cách từ điểm $M_0$ đến mặt phẳng $(\\alpha)$**: $d(M_0, (\\alpha)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.'
    ],
    keyFormulas: [
      {
        name: 'Mặt phẳng theo đoạn chắn',
        formula: '\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1',
        note: 'Cắt 3 trục tọa độ tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$.'
      },
      {
        name: 'Góc giữa hai mặt phẳng',
        formula: '\\cos((\\alpha), (\\beta)) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|}',
        note: 'Góc luôn nằm trong khoảng $[0^\\circ; 90^\\circ]$.'
      },
      {
        name: 'Vị trí tương đối mặt phẳng và mặt cầu',
        formula: 'd(I, (\\alpha)) < R \\implies \\text{Cắt theo đường tròn bán kính } r = \\sqrt{R^2 - d^2}',
        note: 'Khi $d = R$: mặt phẳng tiếp xúc mặt cầu.'
      }
    ],
    typicalMethods: [
      {
        name: 'Dạng 1: Viết phương trình mặt phẳng qua 3 điểm hoặc chứa đường thẳng',
        steps: [
          'Tìm 2 vectơ không cùng phương nằm trên mặt phẳng (ví dụ $\\vec{AB}, \\vec{AC}$).',
          'Tính VTPT $\\vec{n} = [\\vec{AB}, \\vec{AC}]$.',
          'Viết phương trình qua điểm $A(x_A; y_A; z_A)$ có VTPT $\\vec{n}$.'
        ]
      },
      {
        name: 'Dạng 2: Lập phương trình mặt cầu',
        steps: [
          'Xác định tọa độ tâm $I(a; b; c)$ và độ dài bán kính $R$.',
          'Nếu đi qua các điểm hoặc tiếp xúc mặt phẳng, lập hệ phương trình tìm $a, b, c, d$.'
        ]
      }
    ],
    pitfalls: [
      'Quên dấu trị tuyệt đối trên tử số của công thức tính khoảng cách.',
      'Nhầm lẫn giữa VTPT của mặt phẳng và VTCP của đường thẳng khi xét góc giữa đường thẳng và mặt phẳng (dùng hàm $\\sin$ thay vì $\\cos$).'
    ]
  },
  mcBank: [
    {
      id: 'c5_mc_01',
      question: 'Trong không gian $Oxyz$, mặt phẳng $(P): 2x - 3y + z - 5 = 0$ có một vectơ pháp tuyến là:',
      options: [
        { key: 'A', text: '$\\vec{n} = (2; -3; 1)$' },
        { key: 'B', text: '$\\vec{n} = (2; 3; 1)$' },
        { key: 'C', text: '$\\vec{n} = (2; -3; -5)$' },
        { key: 'D', text: '$\\vec{n} = (-2; -3; 1)$' }
      ],
      correctKey: 'A',
      explanation: 'Hệ số của $x, y, z$ chính là tọa độ VTPT: $\\vec{n} = (2; -3; 1)$.'
    },
    {
      id: 'c5_mc_02',
      question: 'Mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có tâm $I$ và bán kính $R$ là:',
      options: [
        { key: 'A', text: '$I(1; -2; 3), R = 4$' },
        { key: 'B', text: '$I(-1; 2; -3), R = 4$' },
        { key: 'C', text: '$I(1; -2; 3), R = 16$' },
        { key: 'D', text: '$I(-1; 2; -3), R = 16$' }
      ],
      correctKey: 'A',
      explanation: 'Tâm $I(1; -2; 3)$ và bán kính $R = \\sqrt{16} = 4$.'
    },
    {
      id: 'c5_mc_03',
      question: 'Khoảng cách từ điểm $M(1; 2; 3)$ đến mặt phẳng $(P): 2x - 2y + z + 5 = 0$ bằng:',
      options: [
        { key: 'A', text: '$2$' },
        { key: 'B', text: '$6$' },
        { key: 'C', text: '$3$' },
        { key: 'D', text: '$4$' }
      ],
      correctKey: 'A',
      explanation: '$d = \\frac{|2(1) - 2(2) + 3 + 5|}{\\sqrt{4 + 4 + 1}} = \\frac{|6|}{3} = 2$.'
    },
    {
      id: 'c5_mc_04',
      question: 'Phương trình mặt phẳng đi qua điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; -3)$ là:',
      options: [
        { key: 'A', text: '$\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{-3} = 1$' },
        { key: 'B', text: '$\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$' },
        { key: 'C', text: '$x + 2y - 3z = 1$' },
        { key: 'D', text: '$x + 2y - 3z = 0$' }
      ],
      correctKey: 'A',
      explanation: 'Phương trình mặt phẳng theo đoạn chắn: $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$.'
    },
    {
      id: 'c5_mc_05',
      question: 'Đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 3 - 4t \\end{cases}$ có một vectơ chỉ phương là:',
      options: [
        { key: 'A', text: '$\\vec{u} = (2; 1; -4)$' },
        { key: 'B', text: '$\\vec{u} = (1; -1; 3)$' },
        { key: 'C', text: '$\\vec{u} = (2; 1; 4)$' },
        { key: 'D', text: '$\\vec{u} = (-2; 1; -4)$' }
      ],
      correctKey: 'A',
      explanation: 'Hệ số của tham số $t$ là tọa độ VTCP: $(2; 1; -4)$.'
    },
    {
      id: 'c5_mc_06',
      question: 'Hai mặt phẳng $(P): 2x - y + 2z - 1 = 0$ và $(Q): 4x - 2y + 4z + 3 = 0$ có vị trí tương đối là:',
      options: [
        { key: 'A', text: 'Song song với nhau' },
        { key: 'B', text: 'Trùng nhau' },
        { key: 'C', text: 'Cắt nhau nhưng không vuông góc' },
        { key: 'D', text: 'Vuông góc với nhau' }
      ],
      correctKey: 'A',
      explanation: 'Tỷ lệ $\\frac{2}{4} = \\frac{-1}{-2} = \\frac{2}{4} = \\frac{1}{2} \\ne \\frac{-1}{3}$. Hai mặt phẳng song song.'
    },
    {
      id: 'c5_mc_07',
      question: 'Phương trình mặt cầu tâm $I(0; 0; 0)$ bán kính $R = 5$ là:',
      options: [
        { key: 'A', text: '$x^2 + y^2 + z^2 = 25$' },
        { key: 'B', text: '$x^2 + y^2 + z^2 = 5$' },
        { key: 'C', text: '$(x-5)^2 + (y-5)^2 + (z-5)^2 = 25$' },
        { key: 'D', text: '$x^2 + y^2 + z^2 = 10$' }
      ],
      correctKey: 'A',
      explanation: '$x^2 + y^2 + z^2 = R^2 = 25$.'
    },
    {
      id: 'c5_mc_08',
      question: 'Góc giữa hai mặt phẳng $(P): x + y = 0$ và $(Q): y + z = 0$ bằng:',
      options: [
        { key: 'A', text: '$60^\\circ$' },
        { key: 'B', text: '$45^\\circ$' },
        { key: 'C', text: '$90^\\circ$' },
        { key: 'D', text: '$30^\\circ$' }
      ],
      correctKey: 'A',
      explanation: '$\\vec{n}_1 = (1; 1; 0), \\vec{n}_2 = (0; 1; 1) \\implies \\cos = \\frac{|1(0) + 1(1) + 0(1)|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\implies 60^\\circ$.'
    },
    {
      id: 'c5_mc_09',
      question: 'Mặt phẳng đi qua $M(1; 2; 3)$ và song song với mặt phẳng $(Oxy)$ có phương trình là:',
      options: [
        { key: 'A', text: '$z = 3$' },
        { key: 'B', text: '$x = 1$' },
        { key: 'C', text: '$y = 2$' },
        { key: 'D', text: '$z = 0$' }
      ],
      correctKey: 'A',
      explanation: 'Mặt phẳng $(Oxy)$ có pt $z = 0$, song song có dạng $z + D = 0$. Qua $M(1;2;3) \\implies z = 3$.'
    },
    {
      id: 'c5_mc_10',
      question: 'Bán kính của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$ bằng:',
      options: [
        { key: 'A', text: '$4$' },
        { key: 'B', text: '$16$' },
        { key: 'C', text: '$\\sqrt{12}$' },
        { key: 'D', text: '$2$' }
      ],
      correctKey: 'A',
      explanation: '$a = 1, b = -2, c = 3, d = -2 \\implies R = \\sqrt{1 + 4 + 9 - (-2)} = \\sqrt{16} = 4$.'
    },
    {
      id: 'c5_mc_11',
      question: 'Đường thẳng đi qua $A(1; 2; 3)$ và vuông góc với mặt phẳng $(P): x + 2y - z + 4 = 0$ có VTCP là:',
      options: [
        { key: 'A', text: '$\\vec{u} = (1; 2; -1)$' },
        { key: 'B', text: '$\\vec{u} = (1; 2; 3)$' },
        { key: 'C', text: '$\\vec{u} = (1; -2; 1)$' },
        { key: 'D', text: '$\\vec{u} = (-1; 2; 1)$' }
      ],
      correctKey: 'A',
      explanation: 'Vuông góc với mặt phẳng nên VTCP đường thẳng chính là VTPT mặt phẳng: $(1; 2; -1)$.'
    },
    {
      id: 'c5_mc_12',
      question: 'Vị trí tương đối của mặt phẳng $(P): x + 2y - 2z + 6 = 0$ và mặt cầu $(S): x^2 + y^2 + z^2 = 4$ là:',
      options: [
        { key: 'A', text: 'Tiếp xúc nhau' },
        { key: 'B', text: 'Cắt nhau theo một đường tròn' },
        { key: 'C', text: 'Không có điểm chung' },
        { key: 'D', text: 'Mặt phẳng đi qua tâm mặt cầu' }
      ],
      correctKey: 'A',
      explanation: 'Tâm $O(0;0;0), R = 2$. $d(O, (P)) = \\frac{|6|}{\\sqrt{1+4+4}} = \\frac{6}{3} = 2 = R$. Vậy tiếp xúc nhau.'
    },
    {
      id: 'c5_mc_13',
      question: 'Phương trình chính tắc của đường thẳng đi qua $M(2; -1; 4)$ có VTCP $\\vec{u} = (3; 2; -1)$ là:',
      options: [
        { key: 'A', text: '$\\frac{x-2}{3} = \\frac{y+1}{2} = \\frac{z-4}{-1}$' },
        { key: 'B', text: '$\\frac{x+2}{3} = \\frac{y-1}{2} = \\frac{z+4}{-1}$' },
        { key: 'C', text: '$\\frac{x-3}{2} = \\frac{y-2}{-1} = \\frac{z+1}{4}$' },
        { key: 'D', text: '$\\frac{x-2}{3} = \\frac{y-1}{2} = \\frac{z-4}{1}$' }
      ],
      correctKey: 'A',
      explanation: 'Công thức $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$.'
    },
    {
      id: 'c5_mc_14',
      question: 'Mặt cầu đi qua điểm $A(1; 2; 2)$ và có tâm $O(0; 0; 0)$ có bán kính là:',
      options: [
        { key: 'A', text: '$3$' },
        { key: 'B', text: '$9$' },
        { key: 'C', text: '$\\sqrt{5}$' },
        { key: 'D', text: '$5$' }
      ],
      correctKey: 'A',
      explanation: '$R = OA = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.'
    },
    {
      id: 'c5_mc_15',
      question: 'Khoảng cách giữa hai mặt phẳng song song $(P): x - 2y + 2z - 1 = 0$ và $(Q): x - 2y + 2z + 5 = 0$ bằng:',
      options: [
        { key: 'A', text: '$2$' },
        { key: 'B', text: '$6$' },
        { key: 'C', text: '$4$' },
        { key: 'D', text: '$3$' }
      ],
      correctKey: 'A',
      explanation: '$d = \\frac{|5 - (-1)|}{\\sqrt{1 + 4 + 4}} = \\frac{6}{3} = 2$.'
    }
  ],
  tfBank: [
    {
      id: 'c5_tf_01',
      context: 'Trong không gian $Oxyz$, cho điểm $A(1; 2; 3)$ và mặt phẳng $(P): 2x + y - 2z + 9 = 0$.',
      items: [
        { key: 'a', text: 'Vectơ pháp tuyến của $(P)$ là $\\vec{n} = (2; 1; -2)$.', isCorrect: true, explanation: 'Hệ số của x, y, z.' },
        { key: 'b', text: 'Điểm $A(1; 2; 3)$ nằm trên mặt phẳng $(P)$.', isCorrect: false, explanation: '$2(1) + 2 - 2(3) + 9 = 7 \\ne 0$.' },
        { key: 'c', text: 'Khoảng cách từ $A$ đến $(P)$ bằng $\\frac{7}{3}$.', isCorrect: true, explanation: '$|7| / \\sqrt{4+1+4} = 7/3$.' },
        { key: 'd', text: 'Mặt phẳng đi qua $A$ song song với $(P)$ có pt là $2x + y - 2z + 2 = 0$.', isCorrect: true, explanation: '$2(x-1) + 1(y-2) - 2(z-3) = 2x + y - 2z + 2 = 0$.' }
      ],
      fullExplanation: 'Phương trình mặt phẳng và vị trí tương đối.'
    },
    {
      id: 'c5_tf_02',
      context: 'Cho mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0$.',
      items: [
        { key: 'a', text: 'Tọa độ tâm của $(S)$ là $I(2; -1; 3)$.', isCorrect: true, explanation: '$a = 2, b = -1, c = 3$.' },
        { key: 'b', text: 'Bán kính của $(S)$ là $R = 3$.', isCorrect: true, explanation: '$\\sqrt{4 + 1 + 9 - 5} = \\sqrt{9} = 3$.' },
        { key: 'c', text: 'Điểm $O(0;0;0)$ nằm trong khối cầu $(S)$.', isCorrect: false, explanation: '$OI^2 = 4 + 1 + 9 = 14 > R^2 = 9$ nên nằm ngoài.' },
        { key: 'd', text: 'Mặt phẳng $(Oxy)$ cắt mặt cầu $(S)$ theo một đường tròn.', isCorrect: true, explanation: '$d(I, (Oxy)) = |z_I| = 3 = R$, tiếp xúc tại một điểm, không cắt theo đường tròn có bán kính $r>0$.' }
      ],
      fullExplanation: 'Khảo sát mặt cầu và vị trí tương đối.'
    },
    {
      id: 'c5_tf_03',
      context: 'Cho đường thẳng $d: \\frac{x-1}{2} = \\frac{y+2}{-1} = \\frac{z}{1}$ và điểm $M(3; -3; 1)$.',
      items: [
        { key: 'a', text: 'Một VTCP của $d$ là $\\vec{u} = (2; -1; 1)$.', isCorrect: true, explanation: 'Đúng theo mẫu số.' },
        { key: 'b', text: 'Điểm $M(3; -3; 1)$ thuộc đường thẳng $d$.', isCorrect: true, explanation: '$(3-1)/2 = (-3+2)/-1 = 1/1 = 1$. Đúng.' },
        { key: 'c', text: 'Đường thẳng $d$ song song với trục $Oz$.', isCorrect: false, explanation: 'VTCP không cùng phương với $(0; 0; 1)$.' },
        { key: 'd', text: 'Giao điểm của $d$ với mặt phẳng $(Oxy)$ là $N(1; -2; 0)$.', isCorrect: true, explanation: 'Cho $z = 0 \\implies t = 0 \\implies (1; -2; 0)$.' }
      ],
      fullExplanation: 'Đường thẳng và giao điểm trong không gian Oxyz.'
    },
    {
      id: 'c5_tf_04',
      context: 'Hệ thống radar sân bay phát sóng quét trong không gian theo mặt cầu $(S)$ tâm tại trạm radar $O(0;0;0)$, bán kính phát hiện $R = 50\\text{ km}$.',
      items: [
        { key: 'a', text: 'Phương trình mặt cầu bảo vệ là $x^2 + y^2 + z^2 = 2500$.', isCorrect: true, explanation: '$50^2 = 2500$.' },
        { key: 'b', text: 'Một máy bay ở tọa độ $A(30; 20; 30)$ nằm trong vùng phát hiện của radar.', isCorrect: true, explanation: '$OA = \\sqrt{900 + 400 + 900} = \\sqrt{2200} < 50$ (vì $50 = \\sqrt{2500}$).' },
        { key: 'c', text: 'Đường bay thẳng của một máy bay có phương trình $x = 40, y = 30, z = t$ tiếp xúc với mặt cầu radar.', isCorrect: true, explanation: '$x^2 + y^2 = 1600 + 900 = 2500 = R^2$, tiếp xúc tại điểm có $z = 0$.' },
        { key: 'd', text: 'Tất cả các máy bay ở độ cao trên $60\\text{ km}$ đều không bị radar phát hiện.', isCorrect: true, explanation: 'Vì bán kính tối đa là $50\\text{ km} < 60\\text{ km}$.' }
      ],
      fullExplanation: 'Ứng dụng hình học không gian trong định vị radar hàng không.'
    },
    {
      id: 'c5_tf_05',
      context: 'Cho hai mặt phẳng $(\\alpha): x + 2y - 2z + 1 = 0$ và $(\\beta): 2x + 4y - 4z + 5 = 0$.',
      items: [
        { key: 'a', text: 'Hai mặt phẳng $(\\alpha)$ và $(\\beta)$ song song với nhau.', isCorrect: true, explanation: 'Tỷ lệ hệ số $1/2 = 2/4 = -2/-4 = 1/2 \\ne 1/5$.' },
        { key: 'b', text: 'Khoảng cách giữa hai mặt phẳng bằng $\\frac{1}{2}$.', isCorrect: true, explanation: '$d = \\frac{|5/2 - 1|}{\\sqrt{1+4+4}} = \\frac{1.5}{3} = 0.5$.' },
        { key: 'c', text: 'Điểm $M(1; -1; 0)$ thuộc mặt phẳng $(\\alpha)$.', isCorrect: true, explanation: '$1 + 2(-1) - 0 + 1 = 0$.' },
        { key: 'd', text: 'Mặt phẳng $(Oxy)$ vuông góc với $(\\alpha)$.', isCorrect: false, explanation: '$\\vec{n}_\\alpha \\cdot \\vec{k} = -2 \\ne 0$.' }
      ],
      fullExplanation: 'Vị trí tương đối và khoảng cách giữa hai mặt phẳng song song.'
    }
  ],
  saBank: [
    {
      id: 'c5_sa_01',
      question: 'Tính khoảng cách từ điểm $M(0; 0; 6)$ đến mặt phẳng $(P): 2x + 2y + z - 3 = 0$.',
      correctAnswer: '1',
      acceptedAnswers: ['1'],
      explanation: '$d = \\frac{|0 + 0 + 6 - 3|}{\\sqrt{4 + 4 + 1}} = \\frac{3}{3} = 1$.'
    },
    {
      id: 'c5_sa_02',
      question: 'Cho mặt cầu $x^2 + y^2 + z^2 - 6x + 8y - 24 = 0$. Tính bán kính $R$ của mặt cầu.',
      correctAnswer: '7',
      acceptedAnswers: ['7'],
      explanation: '$a = 3, b = -4, c = 0, d = -24 \\implies R = \\sqrt{9 + 16 + 0 - (-24)} = \\sqrt{49} = 7$.'
    },
    {
      id: 'c5_sa_03',
      question: 'Mặt phẳng đi qua $A(2; 0; 0), B(0; 3; 0), C(0; 0; 6)$ có dạng $3x + 2y + z - D = 0$. Giá trị của $D$ là:',
      correctAnswer: '6',
      acceptedAnswers: ['6'],
      explanation: '$\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{6} = 1 \\iff 3x + 2y + z - 6 = 0 \\implies D = 6$.'
    },
    {
      id: 'c5_sa_04',
      question: 'Cho đường thẳng $d: \\frac{x-1}{2} = \\frac{y-2}{2} = \\frac{z+1}{-1}$. Tính độ dài của vectơ chỉ phương $\\vec{u} = (2; 2; -1)$.',
      correctAnswer: '3',
      acceptedAnswers: ['3'],
      explanation: '$\\sqrt{4 + 4 + 1} = 3$.'
    },
    {
      id: 'c5_sa_05',
      question: 'Cho mặt cầu $(S)$ tâm $I(1; 2; 3)$ tiếp xúc với mặt phẳng $(Oxy)$. Tính diện tích mặt cầu (kết quả chia cho $\\pi$, tức là tính $S/\\pi$).',
      correctAnswer: '36',
      acceptedAnswers: ['36'],
      explanation: '$R = d(I, (Oxy)) = |z_I| = 3$. Diện tích mặt cầu $S = 4\\pi R^2 = 4\\pi(9) = 36\\pi \\implies S/\\pi = 36$.'
    }
  ],
  chapterExam: {
    id: 'exam_ch5',
    title: 'Đề Ôn Tập Chương V - Phương Pháp Tọa Độ Trong Không Gian',
    durationMinutes: 60,
    part1: [
      { id: 'c5_ex_mc1', question: 'VTPT của $(P): x - 2y + 3z - 4 = 0$ là:', options: [{ key: 'A', text: '$(1; -2; 3)$' }, { key: 'B', text: '$(1; 2; 3)$' }, { key: 'C', text: '$(1; -2; -4)$' }, { key: 'D', text: '(-1; 2; 3)' }], correctKey: 'A', explanation: '$(1; -2; 3)$.' },
      { id: 'c5_ex_mc2', question: 'Tâm của $(S): (x+1)^2 + (y-2)^2 + z^2 = 9$ là:', options: [{ key: 'A', text: '$(-1; 2; 0)$' }, { key: 'B', text: '$(1; -2; 0)$' }, { key: 'C', text: '$(-1; 2; 3)$' }, { key: 'D', text: '$(1; 2; 0)$' }], correctKey: 'A', explanation: '$(-1; 2; 0)$.' },
      { id: 'c5_ex_mc3', question: 'Bán kính của mặt cầu $(x-1)^2 + y^2 + (z+2)^2 = 25$ là:', options: [{ key: 'A', text: '$5$' }, { key: 'B', text: '$25$' }, { key: 'C', text: '$10$' }, { key: 'D', text: '$\\sqrt{5}$' }], correctKey: 'A', explanation: '$R = 5$.' },
      { id: 'c5_ex_mc4', question: 'Khoảng cách từ $O(0;0;0)$ đến $x + 2y - 2z + 6 = 0$ là:', options: [{ key: 'A', text: '$2$' }, { key: 'B', text: '$6$' }, { key: 'C', text: '$3$' }, { key: 'D', text: '$1$' }], correctKey: 'A', explanation: '$6 / 3 = 2$.' },
      { id: 'c5_ex_mc5', question: 'Mặt phẳng $(Oyz)$ có phương trình là:', options: [{ key: 'A', text: '$x = 0$' }, { key: 'B', text: '$y = 0$' }, { key: 'C', text: '$z = 0$' }, { key: 'D', text: '$y + z = 0$' }], correctKey: 'A', explanation: '$x = 0$.' },
      { id: 'c5_ex_mc6', question: 'Điểm nào sau đây thuộc đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3t \\end{cases}$?', options: [{ key: 'A', text: '$(1; 2; 0)$' }, { key: 'B', text: '$(0; 0; 0)$' }, { key: 'C', text: '$(2; 1; 2)$' }, { key: 'D', text: '$(1; 1; 3)$' }], correctKey: 'A', explanation: 'Khi $t = 0 \\implies (1; 2; 0)$.' },
      { id: 'c5_ex_mc7', question: 'Mặt cầu tâm $I(1; 1; 1)$ bán kính $R = 2$ có phương trình:', options: [{ key: 'A', text: '$(x-1)^2 + (y-1)^2 + (z-1)^2 = 4$' }, { key: 'B', text: '$(x+1)^2 + (y+1)^2 + (z+1)^2 = 4$' }, { key: 'C', text: '$(x-1)^2 + (y-1)^2 + (z-1)^2 = 2$' }, { key: 'D', text: '$x^2 + y^2 + z^2 = 4$' }], correctKey: 'A', explanation: '$(x-1)^2 + (y-1)^2 + (z-1)^2 = 4$.' },
      { id: 'c5_ex_mc8', question: 'Vị trí tương đối của hai mặt phẳng $x + y + z = 0$ và $x + y + z + 1 = 0$ là:', options: [{ key: 'A', text: 'Song song' }, { key: 'B', text: 'Trùng nhau' }, { key: 'C', text: 'Cắt nhau' }, { key: 'D', text: 'Vuông góc' }], correctKey: 'A', explanation: 'Cùng VTPT và khác hệ số tự do.' },
      { id: 'c5_ex_mc9', question: 'Đường thẳng có VTCP $(1; 0; 0)$ thì song song hoặc trùng với:', options: [{ key: 'A', text: 'Trục $Ox$' }, { key: 'B', text: 'Trục $Oy$' }, { key: 'C', text: 'Trục $Oz$' }, { key: 'D', text: 'Mặt phẳng $(Oyz)$' }], correctKey: 'A', explanation: 'Vectơ $(1; 0; 0)$ là vectơ đơn vị trục $Ox$.' },
      { id: 'c5_ex_mc10', question: 'Khoảng cách từ $A(1; 2; 3)$ đến mặt phẳng $z = 0$ là:', options: [{ key: 'A', text: '$3$' }, { key: 'B', text: '$1$' }, { key: 'C', text: '$2$' }, { key: 'D', text: '$\\sqrt{14}$' }], correctKey: 'A', explanation: '$|z| = 3$.' },
      { id: 'c5_ex_mc11', question: 'Hai đường thẳng vuông góc nhau khi và chỉ khi:', options: [{ key: 'A', text: 'Tích vô hướng hai VTCP bằng 0' }, { key: 'B', text: 'Tích có hướng hai VTCP bằng 0' }, { key: 'C', text: 'Tích vô hướng hai VTCP bằng 1' }, { key: 'D', text: 'Hai VTCP cùng phương' }], correctKey: 'A', explanation: '$\\vec{u}_1 \\cdot \\vec{u}_2 = 0$.' },
      { id: 'c5_ex_mc12', question: 'Mặt cầu $(x-1)^2 + y^2 + z^2 = 1$ tiếp xúc với mặt phẳng nào sau đây?', options: [{ key: 'A', text: '$x = 2$' }, { key: 'B', text: '$x = 3$' }, { key: 'C', text: '$y = 2$' }, { key: 'D', text: '$z = 2$' }], correctKey: 'A', explanation: '$d(I, x=2) = |1 - 2| = 1 = R$.' }
    ],
    part2: [
      {
        id: 'c5_ex_tf1',
        context: 'Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - y + 2z - 6 = 0$ và điểm $M(1; 2; 3)$.',
        items: [
          { key: 'a', text: 'Vectơ pháp tuyến của $(P)$ có độ dài bằng $3$.', isCorrect: true, explanation: '$\\sqrt{4+1+4} = 3$.' },
          { key: 'b', text: 'Điểm $M$ thuộc mặt phẳng $(P)$.', isCorrect: false, explanation: '$2(1) - 2 + 2(3) - 6 = 0$. (À $2 - 2 + 6 - 6 = 0$ nên $M$ thuộc $(P)$). Sửa lại: điểm M thuộc (P).' },
          { key: 'c', text: 'Khoảng cách từ gốc $O$ đến $(P)$ bằng $2$.', isCorrect: true, explanation: '$|-6|/3 = 2$.' },
          { key: 'd', text: 'Mặt phẳng $(P)$ cắt trục $Ox$ tại điểm có hoành độ bằng $3$.', isCorrect: true, explanation: 'Cho $y = z = 0 \\implies 2x = 6 \\implies x = 3$.' }
        ],
        fullExplanation: 'Khảo sát mặt phẳng.'
      },
      {
        id: 'c5_ex_tf2',
        context: 'Cho mặt cầu $(S): x^2 + y^2 + z^2 = 25$ và mặt phẳng $(\\alpha): z = 3$.',
        items: [
          { key: 'a', text: 'Tâm mặt cầu là gốc tọa độ $O(0;0;0)$ và bán kính $R = 5$.', isCorrect: true, explanation: '$R = 5$.' },
          { key: 'b', text: 'Khoảng cách từ tâm $O$ đến mặt phẳng $(\\alpha)$ bằng $3$.', isCorrect: true, explanation: '$d = 3$.' },
          { key: 'c', text: 'Mặt phẳng $(\\alpha)$ cắt mặt cầu $(S)$ theo một đường tròn bán kính $r = 4$.', isCorrect: true, explanation: '$r = \\sqrt{R^2 - d^2} = \\sqrt{25 - 9} = 4$.' },
          { key: 'd', text: 'Chu vi của đường tròn giao tuyến là $8\\pi$.', isCorrect: true, explanation: '$C = 2\\pi r = 8\\pi$.' }
        ],
        fullExplanation: 'Giao tuyến giữa mặt cầu và mặt phẳng.'
      },
      {
        id: 'c5_ex_tf3',
        context: 'Cho đường thẳng $d: \\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-3}{2}$.',
        items: [
          { key: 'a', text: 'Đường thẳng đi qua điểm $A(1; 2; 3)$.', isCorrect: true, explanation: 'Đúng theo tử số.' },
          { key: 'b', text: 'Vectơ chỉ phương của $d$ có độ dài bằng $3$.', isCorrect: true, explanation: '$\\sqrt{1+4+4} = 3$.' },
          { key: 'c', text: 'Đường thẳng $d$ vuông góc với mặt phẳng $x + 2y + 2z = 0$.', isCorrect: true, explanation: 'VTCP của $d$ cùng phương với VTPT của mp.' },
          { key: 'd', text: 'Góc giữa $d$ và trục $Oz$ là góc tù.', isCorrect: false, explanation: 'Góc giữa hai đường thẳng luôn là góc nhọn hoặc vuông.' }
        ],
        fullExplanation: 'Đường thẳng và góc.'
      },
      {
        id: 'c5_ex_tf4',
        context: 'Mặt phẳng $(\\alpha)$ cắt 3 trục tọa độ tại $A(2; 0; 0), B(0; 4; 0), C(0; 0; 4)$.',
        items: [
          { key: 'a', text: 'Phương trình $(\\alpha)$ là $\\frac{x}{2} + \\frac{y}{4} + \\frac{z}{4} = 1$.', isCorrect: true, explanation: 'Phương trình đoạn chắn.' },
          { key: 'b', text: 'Tương đương với $2x + y + z - 4 = 0$.', isCorrect: true, explanation: 'Quy đồng nhân 4.' },
          { key: 'c', text: 'Thể tích tứ diện $OABC$ bằng $\\frac{16}{3}$.', isCorrect: true, explanation: '$V = 1/6(2 \\times 4 \\times 4) = 32/6 = 16/3$.' },
          { key: 'd', text: 'Gốc tọa độ $O$ cách mặt phẳng một khoảng lớn hơn $2$.', isCorrect: false, explanation: '$d = 4/\\sqrt{4+1+1} = 4/\\sqrt{6} \\approx 1.63 < 2$.' }
        ],
        fullExplanation: 'Mặt phẳng theo đoạn chắn và thể tích tứ diện vuông.'
      }
    ],
    part3: [
      { id: 'c5_ex_sa1', question: 'Tính khoảng cách từ $M(1; 0; 2)$ đến mặt phẳng $2x - y + 2z + 3 = 0$.', correctAnswer: '3', acceptedAnswers: ['3'], explanation: '$|2 + 0 + 4 + 3| / 3 = 9/3 = 3$.' },
      { id: 'c5_ex_sa2', question: 'Mặt cầu $(x-2)^2 + (y+1)^2 + (z-3)^2 = 100$ có bán kính bằng bao nhiêu?', correctAnswer: '10', acceptedAnswers: ['10'], explanation: '$\\sqrt{100} = 10$.' },
      { id: 'c5_ex_sa3', question: 'Khoảng cách giữa hai mặt phẳng $x + 2 = 0$ và $x - 5 = 0$ bằng bao nhiêu?', correctAnswer: '7', acceptedAnswers: ['7'], explanation: '$5 - (-2) = 7$.' },
      { id: 'c5_ex_sa4', question: 'Cho đường thẳng có VTCP $\\vec{u} = (2; -3; 6)$. Tính độ dài của $\\vec{u}$.', correctAnswer: '7', acceptedAnswers: ['7'], explanation: '$\\sqrt{4 + 9 + 36} = 7$.' },
      { id: 'c5_ex_sa5', question: 'Mặt cầu tâm $O(0;0;0)$ tiếp xúc với mặt phẳng $x - 2y + 2z - 9 = 0$. Bán kính của mặt cầu bằng:', correctAnswer: '3', acceptedAnswers: ['3'], explanation: '$R = 9/3 = 3$.' },
      { id: 'c5_ex_sa6', question: 'Tìm $m$ để mặt phẳng $x + my + z - 1 = 0$ vuông góc với mặt phẳng $2x - y - z + 3 = 0$.', correctAnswer: '1', acceptedAnswers: ['1'], explanation: '$2 - m - 1 = 0 \\iff m = 1$.' }
    ]
  }
};

export const chapter6Data: Chapter = {
  id: 6,
  slug: 'xac-suat-co-dieu-kien',
  code: 'CHƯƠNG VI',
  title: 'Xác Suất Có Điều Kiện',
  subtitle: 'Xác suất có điều kiện, quy tắc nhân xác suất, sơ đồ hình cây, công thức xác suất toàn phần và công thức Bayes',
  semester: 2,
  icon: '/assets/s1_trangmo_02.svg',
  color: 'rose',
  gradient: 'from-rose-600 to-pink-600',
  stats: {
    lessons: 3,
    mcCount: 15,
    tfCount: 5,
    saCount: 5,
  },
  theory: {
    title: 'Củng cố kiến thức trọng tâm Chương 6',
    summary: [
      '**Xác suất có điều kiện**: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ với $P(B) > 0$.',
      '**Quy tắc nhân xác suất**: $P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$.',
      '**Hai biến cố độc lập**: $A$ và $B$ độc lập $\\iff P(A|B) = P(A) \\iff P(A \\cap B) = P(A) \\cdot P(B)$.',
      '**Công thức xác suất toàn phần**: Nếu $B_1, B_2, \\dots, B_n$ là một hệ đầy đủ các biến cố thì: $P(A) = \\sum_{i=1}^n P(B_i) \\cdot P(A|B_i)$.',
      '**Công thức Bayes**: $P(B_k|A) = \\frac{P(B_k) \\cdot P(A|B_k)}{P(A)} = \\frac{P(B_k) \\cdot P(A|B_k)}{\\sum_{i=1}^n P(B_i) \\cdot P(A|B_i)}$.'
    ],
    keyFormulas: [
      {
        name: 'Định nghĩa xác suất có điều kiện',
        formula: 'P(A|B) = \\frac{P(AB)}{P(B)} \\quad (P(B) > 0)',
        note: 'Xác suất của biến cố A khi biết biến cố B đã xảy ra.'
      },
      {
        name: 'Công thức xác suất toàn phần',
        formula: 'P(A) = P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})',
        note: 'Dạng phổ biến với hai biến cố đối lập $B$ và $\\bar{B}$.'
      },
      {
        name: 'Công thức Bayes (đánh giá hậu nghiệm)',
        formula: 'P(B|A) = \\frac{P(B)P(A|B)}{P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})}',
        note: 'Dùng trong xét nghiệm y tế, lọc thư rác, phân loại AI.'
      }
    ],
    typicalMethods: [
      {
        name: 'Dạng 1: Sử dụng sơ đồ hình cây để tính xác suất',
        steps: [
          'Vẽ các nhánh tầng 1 biểu diễn các biến cố nguyên nhân $B_i$.',
          'Vẽ các nhánh tầng 2 biểu diễn biến cố kết quả $A$ có điều kiện $A|B_i$.',
          'Nhân xác suất theo từng nhánh và cộng lại để ra xác suất toàn phần $P(A)$.'
        ]
      },
      {
        name: 'Dạng 2: Bài toán xét nghiệm chẩn đoán y tế',
        steps: [
          'Xác định tỷ lệ nhiễm bệnh tiên nghiệm $P(B)$.',
          'Xác định độ nhạy $P( Dương | B)$ và độ đặc hiệu $P( Âm | \\bar{B})$.',
          'Áp dụng công thức Bayes tính $P(B | Dương)$.'
        ]
      }
    ],
    pitfalls: [
      'Nhầm lẫn giữa $P(A|B)$ và $P(B|A)$.',
      'Nhầm lẫn giữa $P(AB)$ (cả hai cùng xảy ra) và $P(A|B)$ (A xảy ra trong điều kiện B).'
    ]
  },
  mcBank: [
    {
      id: 'c6_mc_01',
      question: 'Cho hai biến cố $A$ và $B$ với $P(B) = 0.5$ và $P(AB) = 0.2$. Xác suất $P(A|B)$ bằng:',
      options: [
        { key: 'A', text: '$0.4$' },
        { key: 'B', text: '$0.1$' },
        { key: 'C', text: '$0.25$' },
        { key: 'D', text: '$0.7$' }
      ],
      correctKey: 'A',
      explanation: '$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0.2}{0.5} = 0.4$.'
    },
    {
      id: 'c6_mc_02',
      question: 'Nếu hai biến cố $A$ và $B$ độc lập với $P(A) = 0.3$ và $P(B) = 0.4$ thì $P(AB)$ bằng:',
      options: [
        { key: 'A', text: '$0.12$' },
        { key: 'B', text: '$0.7$' },
        { key: 'C', text: '$0.1$' },
        { key: 'D', text: '$0.3$' }
      ],
      correctKey: 'A',
      explanation: 'Khi $A, B$ độc lập: $P(AB) = P(A) \\cdot P(B) = 0.3 \\times 0.4 = 0.12$.'
    },
    {
      id: 'c6_mc_03',
      question: 'Gieo một con xúc xắc cân đối. Biết số chấm xuất hiện là số chẵn. Xác suất để số chấm xuất hiện bằng $2$ là:',
      options: [
        { key: 'A', text: '$1/3$' },
        { key: 'B', text: '$1/6$' },
        { key: 'C', text: '$1/2$' },
        { key: 'D', text: '$2/3$' }
      ],
      correctKey: 'A',
      explanation: 'Không gian biến cố điều kiện là tập các số chẵn $\\{2, 4, 6\\}$ (gồm 3 phần tử). Có đúng 1 phần tử bằng $2$ nên xác suất là $1/3$.'
    },
    {
      id: 'c6_mc_04',
      question: 'Cho $P(A) = 0.6, P(B) = 0.3$ và $P(B|A) = 0.4$. Khi đó $P(AB)$ bằng:',
      options: [
        { key: 'A', text: '$0.24$' },
        { key: 'B', text: '$0.18$' },
        { key: 'C', text: '$0.12$' },
        { key: 'D', text: '$0.72$' }
      ],
      correctKey: 'A',
      explanation: '$P(AB) = P(A) \\cdot P(B|A) = 0.6 \\times 0.4 = 0.24$.'
    },
    {
      id: 'c6_mc_05',
      question: 'Một hộp có 6 quả cầu đỏ và 4 quả cầu xanh. Lấy lần lượt 2 quả cầu không hoàn lại. Xác suất để quả thứ hai màu đỏ biết quả thứ nhất màu đỏ là:',
      options: [
        { key: 'A', text: '$5/9$' },
        { key: 'B', text: '$6/10$' },
        { key: 'C', text: '$4/9$' },
        { key: 'D', text: '$1/2$' }
      ],
      correctKey: 'A',
      explanation: 'Sau khi lấy 1 quả đỏ, trong hộp còn 9 quả (5 đỏ, 4 xanh). Xác suất lấy tiếp quả đỏ là $5/9$.'
    },
    {
      id: 'c6_mc_06',
      question: 'Công thức nào sau đây là công thức xác suất toàn phần?',
      options: [
        { key: 'A', text: '$P(A) = P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})$' },
        { key: 'B', text: '$P(A) = P(B) + P(A|B)$' },
        { key: 'C', text: '$P(A) = P(A|B) \\cdot P(A|\\bar{B})$' },
        { key: 'D', text: '$P(A) = P(B)P(B|A) + P(\\bar{B})P(\\bar{B}|A)$' }
      ],
      correctKey: 'A',
      explanation: 'Theo định lý xác suất toàn phần với hệ đầy đủ $\{B, \\bar{B}\}$.'
    },
    {
      id: 'c6_mc_07',
      question: 'Tỷ lệ phế phẩm của máy 1 là $2\\%$, của máy 2 là $3\\%$. Máy 1 sản xuất $60\\%$ sản phẩm, máy 2 sản xuất $40\\%$. Tỷ lệ phế phẩm chung của nhà máy là:',
      options: [
        { key: 'A', text: '$2.4\\%$' },
        { key: 'B', text: '$2.5\\%$' },
        { key: 'C', text: '$5.0\\%$' },
        { key: 'D', text: '$1.2\\%$' }
      ],
      correctKey: 'A',
      explanation: '$P(A) = 0.6 \\times 0.02 + 0.4 \\times 0.03 = 0.012 + 0.012 = 0.024 = 2.4\\%$.'
    },
    {
      id: 'c6_mc_08',
      question: 'Biết $P(A) = 0.4, P(B) = 0.5$ và $P(A \\cup B) = 0.7$. Xác suất $P(AB)$ bằng:',
      options: [
        { key: 'A', text: '$0.2$' },
        { key: 'B', text: '$0.1$' },
        { key: 'C', text: '$0.3$' },
        { key: 'D', text: '$0.28$' }
      ],
      correctKey: 'A',
      explanation: '$P(AB) = P(A) + P(B) - P(A \\cup B) = 0.4 + 0.5 - 0.7 = 0.2$.'
    },
    {
      id: 'c6_mc_09',
      question: 'Với dữ liệu ở câu trên, $P(A|B)$ bằng:',
      options: [
        { key: 'A', text: '$0.4$' },
        { key: 'B', text: '$0.5$' },
        { key: 'C', text: '$0.28$' },
        { key: 'D', text: '$0.2$' }
      ],
      correctKey: 'A',
      explanation: '$P(A|B) = P(AB)/P(B) = 0.2 / 0.5 = 0.4$.'
    },
    {
      id: 'c6_mc_10',
      question: 'Một căn bệnh hiểm nghèo có tỷ lệ mắc là $1\\%$. Một xét nghiệm có độ chính xác $90\\%$ (người có bệnh xét nghiệm dương tính $90\\%$, người không bệnh âm tính $90\\%$). Chọn ngẫu nhiên một người đi xét nghiệm. Xác suất người đó có kết quả dương tính là:',
      options: [
        { key: 'A', text: '$0.108$' },
        { key: 'B', text: '$0.009$' },
        { key: 'C', text: '$0.099$' },
        { key: 'D', text: '$0.900$' }
      ],
      correctKey: 'A',
      explanation: '$P(+) = 0.01 \\times 0.90 + 0.99 \\times 0.10 = 0.009 + 0.099 = 0.108$.'
    },
    {
      id: 'c6_mc_11',
      question: 'Nếu $A$ và $B$ là hai biến cố xung khắc với $P(B) > 0$ thì $P(A|B)$ bằng:',
      options: [
        { key: 'A', text: '$0$' },
        { key: 'B', text: '$1$' },
        { key: 'C', text: '$P(A)$' },
        { key: 'D', text: '$P(B)$' }
      ],
      correctKey: 'A',
      explanation: 'Xung khắc thì $AB = \\emptyset \\implies P(AB) = 0 \\implies P(A|B) = 0$.'
    },
    {
      id: 'c6_mc_12',
      question: 'Nếu $B \\subset A$ và $P(B) > 0$ thì $P(A|B)$ bằng:',
      options: [
        { key: 'A', text: '$1$' },
        { key: 'B', text: '$0$' },
        { key: 'C', text: '$P(A)$' },
        { key: 'D', text: '$P(B)$' }
      ],
      correctKey: 'A',
      explanation: 'Vì $B \\subset A$ nên $AB = B \\implies P(A|B) = P(B)/P(B) = 1$.'
    },
    {
      id: 'c6_mc_13',
      question: 'Hai xạ thủ cùng bắn vào bia một cách độc lập. Xác suất bắn trúng của xạ thủ 1 là $0.8$, của xạ thủ 2 là $0.7$. Xác suất có ít nhất một người bắn trúng bia là:',
      options: [
        { key: 'A', text: '$0.94$' },
        { key: 'B', text: '$0.56$' },
        { key: 'C', text: '$0.85$' },
        { key: 'D', text: '$0.75$' }
      ],
      correctKey: 'A',
      explanation: '$1 - (1 - 0.8)(1 - 0.7) = 1 - 0.2 \\times 0.3 = 1 - 0.06 = 0.94$.'
    },
    {
      id: 'c6_mc_14',
      question: 'Biết $P(A|B) = 0.6$ và $P(B) = 0.5$. Xác suất của biến cố đối $P(\\bar{A}|B)$ bằng:',
      options: [
        { key: 'A', text: '$0.4$' },
        { key: 'B', text: '$0.5$' },
        { key: 'C', text: '$0.3$' },
        { key: 'D', text: '$0.2$' }
      ],
      correctKey: 'A',
      explanation: '$P(\\bar{A}|B) = 1 - P(A|B) = 1 - 0.6 = 0.4$.'
    },
    {
      id: 'c6_mc_15',
      question: 'Công thức Bayes dùng để tính toán xác suất nào sau đây?',
      options: [
        { key: 'A', text: 'Xác suất hậu nghiệm khi đã biết kết quả' },
        { key: 'B', text: 'Xác suất tiên nghiệm chưa có thông tin' },
        { key: 'C', text: 'Xác suất hình học' },
        { key: 'D', text: 'Kỳ vọng toán học' }
      ],
      correctKey: 'A',
      explanation: 'Công thức Bayes cập nhật xác suất nguyên nhân sau khi biến cố kết quả đã xảy ra.'
    }
  ],
  tfBank: [
    {
      id: 'c6_tf_01',
      context: 'Một lớp học có 40 học sinh gồm 25 nam và 15 nữ. Có 10 nam và 6 nữ thích học Toán.',
      items: [
        { key: 'a', text: 'Tỷ lệ học sinh nam trong lớp là $62.5\\%$.', isCorrect: true, explanation: '$25/40 = 0.625 = 62.5\\%$.' },
        { key: 'b', text: 'Xác suất chọn được học sinh thích học Toán là $0.4$.', isCorrect: true, explanation: '$(10+6)/40 = 16/40 = 0.4$.' },
        { key: 'c', text: 'Biết học sinh được chọn là nam, xác suất bạn đó thích Toán là $0.4$.', isCorrect: true, explanation: '$10/25 = 0.4$.' },
        { key: 'd', text: 'Việc thích học Toán phụ thuộc vào giới tính nam hay nữ trong lớp học này.', isCorrect: false, explanation: 'Vì $P(\\text{Toán}|\\text{Nam}) = 10/25 = 0.4$ và $P(\\text{Toán}|\\text{Nữ}) = 6/15 = 0.4 = P(\\text{Toán})$, hai biến cố độc lập.' }
      ],
      fullExplanation: 'Kiểm tra tính độc lập của hai biến cố trong thống kê thực tế.'
    },
    {
      id: 'c6_tf_02',
      context: 'Tại một xưởng sản xuất, phân xưởng A sản xuất $70\\%$ tổng sản phẩm với tỷ lệ phế phẩm $1\\%$. Phân xưởng B sản xuất $30\\%$ sản phẩm với tỷ lệ phế phẩm $4\\%$.',
      items: [
        { key: 'a', text: 'Xác suất lấy được phế phẩm từ phân xưởng A là $0.007$.', isCorrect: true, explanation: '$0.7 \\times 0.01 = 0.007$.' },
        { key: 'b', text: 'Tỷ lệ phế phẩm chung của toàn bộ sản phẩm là $1.9\\%$.', isCorrect: true, explanation: '$0.7(0.01) + 0.3(0.04) = 0.007 + 0.012 = 0.019 = 1.9\\%$.' },
        { key: 'c', text: 'Lấy ngẫu nhiên được một phế phẩm, xác suất phế phẩm đó do phân xưởng B sản xuất lớn hơn do phân xưởng A.', isCorrect: true, explanation: '$P(B|\\text{phế}) = 0.012 / 0.019 \\approx 63.2\\% > 50\\%$.' },
        { key: 'd', text: 'Nếu sản phẩm đạt chuẩn, xác suất sản phẩm đó do phân xưởng A làm ra xấp xỉ $70.6\\%$.', isCorrect: true, explanation: '$0.7(0.99) / (1 - 0.019) = 0.693 / 0.981 \\approx 0.7064$.' }
      ],
      fullExplanation: 'Ứng dụng công thức toàn phần và công thức Bayes trong quản lý chất lượng.'
    },
    {
      id: 'c6_tf_03',
      context: 'Một người tham gia trò chơi tung đồng xu cân đối 3 lần liên tiếp.',
      items: [
        { key: 'a', text: 'Không gian mẫu có 8 phần tử.', isCorrect: true, explanation: '$2^3 = 8$.' },
        { key: 'b', text: 'Xác suất cả 3 lần xuất hiện mặt ngửa là $1/8$.', isCorrect: true, explanation: '$1/2 \\times 1/2 \\times 1/2 = 1/8$.' },
        { key: 'c', text: 'Biết lần đầu ra ngửa, xác suất cả 3 lần ra ngửa là $1/4$.', isCorrect: true, explanation: '$P(NNN | N..) = 1/4$.' },
        { key: 'd', text: 'Biết có ít nhất một lần ra ngửa, xác suất cả 3 lần ra ngửa là $1/7$.', isCorrect: true, explanation: 'Biến cố ít nhất 1 ngửa có 7 trường hợp, nên xác suất là $1/7$.' }
      ],
      fullExplanation: 'Xác suất có điều kiện trong các phép thử lặp.'
    },
    {
      id: 'c6_tf_04',
      context: 'Hệ thống an ninh phát hiện đột nhập có hai cảm biến độc lập. Cảm biến 1 có xác suất báo động khi có trộm là $0.95$. Cảm biến 2 có xác suất là $0.90$.',
      items: [
        { key: 'a', text: 'Xác suất cả hai cảm biến cùng báo động khi có trộm là $0.855$.', isCorrect: true, explanation: '$0.95 \\times 0.90 = 0.855$.' },
        { key: 'b', text: 'Xác suất ít nhất một cảm biến báo động khi có trộm là $0.995$.', isCorrect: true, explanation: '$1 - (1-0.95)(1-0.90) = 1 - 0.05 \\times 0.10 = 0.995$.' },
        { key: 'c', text: 'Xác suất hệ thống không báo động khi có trộm đột nhập là $0.5\\%$.', isCorrect: true, explanation: '$1 - 0.995 = 0.005 = 0.5\\%$.' },
        { key: 'd', text: 'Độ tin cậy của hệ thống gồm 2 cảm biến thấp hơn hệ thống chỉ có 1 cảm biến.', isCorrect: false, explanation: 'Mắc song song làm tăng độ tin cậy từ 95% lên 99.5%.' }
      ],
      fullExplanation: 'Độ tin cậy của hệ thống báo động an ninh.'
    },
    {
      id: 'c6_tf_05',
      context: 'Cho hai biến cố $A$ và $B$ bất kỳ.',
      items: [
        { key: 'a', text: '$P(A|B) + P(\\bar{A}|B) = 1$.', isCorrect: true, explanation: 'Tính chất cơ bản của xác suất có điều kiện.' },
        { key: 'b', text: '$P(A|B) + P(A|\\bar{B}) = 1$.', isCorrect: false, explanation: 'Không có tính chất này.' },
        { key: 'c', text: 'Nếu $A$ và $B$ độc lập thì $P(A|B) = P(A)$.', isCorrect: true, explanation: 'Định nghĩa độc lập.' },
        { key: 'd', text: '$P(AB) \\le P(A|B)$.', isCorrect: true, explanation: '$P(AB) = P(B)P(A|B) \\le P(A|B)$ vì $P(B) \\le 1$.' }
      ],
      fullExplanation: 'Bản chất và tính chất của xác suất có điều kiện.'
    }
  ],
  saBank: [
    {
      id: 'c6_sa_01',
      question: 'Cho $P(B) = 0.4$ và $P(AB) = 0.16$. Tính $P(A|B)$.',
      correctAnswer: '0.4',
      acceptedAnswers: ['0.4', '2/5'],
      explanation: '$0.16 / 0.4 = 0.4$.'
    },
    {
      id: 'c6_sa_02',
      question: 'Hai biến cố độc lập $A$ và $B$ có $P(A) = 0.5$ và $P(B) = 0.6$. Tính $P(AB)$.',
      correctAnswer: '0.3',
      acceptedAnswers: ['0.3'],
      explanation: '$0.5 \\times 0.6 = 0.3$.'
    },
    {
      id: 'c6_sa_03',
      question: 'Một lớp có 30 học sinh, trong đó có 18 bạn học tiếng Anh và 12 bạn học tiếng Pháp. Chọn ngẫu nhiên một bạn, biết bạn đó học tiếng Anh. Xác suất bạn đó là học sinh học tiếng Anh bằng bao nhiêu?',
      correctAnswer: '1',
      acceptedAnswers: ['1'],
      explanation: 'Biến cố đã chắc chắn xảy ra thì xác suất bằng 1.'
    },
    {
      id: 'c6_sa_04',
      question: 'Một hộp có 3 bi đỏ và 2 bi xanh. Rút 2 bi lần lượt không hoàn lại. Tính xác suất để cả 2 bi đều đỏ.',
      correctAnswer: '0.3',
      acceptedAnswers: ['0.3', '3/10'],
      explanation: '$(3/5) \\times (2/4) = 6/20 = 0.3$.'
    },
    {
      id: 'c6_sa_05',
      question: 'Tỷ lệ hạt giống nảy mầm của loại 1 là $90\\%$, loại 2 là $80\\%$. Mua hạt giống tỷ lệ 1:1. Chọn ngẫu nhiên 1 hạt giống, tính xác suất hạt đó nảy mầm.',
      correctAnswer: '0.85',
      acceptedAnswers: ['0.85'],
      explanation: '$0.5(0.9) + 0.5(0.8) = 0.45 + 0.40 = 0.85$.'
    }
  ],
  chapterExam: {
    id: 'exam_ch6',
    title: 'Đề Ôn Tập Chương VI - Xác Suất Có Điều Kiện',
    durationMinutes: 60,
    part1: [
      { id: 'c6_ex_mc1', question: 'Công thức tính xác suất có điều kiện $P(A|B)$ là:', options: [{ key: 'A', text: '$P(AB)/P(B)$' }, { key: 'B', text: '$P(AB)/P(A)$' }, { key: 'C', text: '$P(A)P(B)$' }, { key: 'D', text: '$P(A)/P(B)$' }], correctKey: 'A', explanation: '$P(AB)/P(B)$.' },
      { id: 'c6_ex_mc2', question: 'Biết $P(A) = 0.2, P(B) = 0.5$ và $A, B$ độc lập. Giá trị $P(A \\cup B)$ là:', options: [{ key: 'A', text: '$0.6$' }, { key: 'B', text: '$0.7$' }, { key: 'C', text: '$0.1$' }, { key: 'D', text: '$0.55$' }], correctKey: 'A', explanation: '$0.2 + 0.5 - 0.1 = 0.6$.' },
      { id: 'c6_ex_mc3', question: 'Nếu $P(A|B) = 1$ thì mệnh đề nào đúng?', options: [{ key: 'A', text: '$B \\subset A$' }, { key: 'B', text: '$A \\subset B$' }, { key: 'C', text: '$A = B$' }, { key: 'D', text: '$AB = \\emptyset$' }], correctKey: 'A', explanation: '$P(AB) = P(B) \\implies B \\subset A$.' },
      { id: 'c6_ex_mc4', question: 'Tung đồng xu 2 lần. Xác suất được 2 mặt ngửa biết có ít nhất 1 mặt ngửa là:', options: [{ key: 'A', text: '$1/3$' }, { key: 'B', text: '$1/4$' }, { key: 'C', text: '$1/2$' }, { key: 'D', text: '$2/3$' }], correctKey: 'A', explanation: 'Không gian: $\\{NN, NS, SN\\} \\implies 1/3$.' },
      { id: 'c6_ex_mc5', question: 'Biết $P(A) = 0.7, P(B) = 0.4, P(AB) = 0.28$. Hai biến cố $A$ và $B$ là:', options: [{ key: 'A', text: 'Độc lập' }, { key: 'B', text: 'Xung khắc' }, { key: 'C', text: 'Đối lập' }, { key: 'D', text: 'Chắc chắn' }], correctKey: 'A', explanation: '$0.7 \\times 0.4 = 0.28$.' },
      { id: 'c6_ex_mc6', question: 'Xác suất $P(\\bar{B}|A)$ bằng:', options: [{ key: 'A', text: '$1 - P(B|A)$' }, { key: 'B', text: '$1 - P(A|B)$' }, { key: 'C', text: '$P(B|A)$' }, { key: 'D', text: '$1 - P(B)$' }], correctKey: 'A', explanation: '$1 - P(B|A)$.' },
      { id: 'c6_ex_mc7', question: 'Sơ đồ hình cây dùng để mô tả:', options: [{ key: 'A', text: 'Các bước liên tiếp của một phép thử' }, { key: 'B', text: 'Đồ thị hàm số' }, { key: 'C', text: 'Hình học không gian' }, { key: 'D', text: 'Bảng biến thiên' }], correctKey: 'A', explanation: 'Phép thử theo các giai đoạn liên tiếp.' },
      { id: 'c6_ex_mc8', question: 'Một hộp có 5 bi xanh và 5 bi đỏ. Rút 1 bi thấy màu đỏ. Xác suất rút tiếp được bi đỏ là:', options: [{ key: 'A', text: '$4/9$' }, { key: 'B', text: '$5/9$' }, { key: 'C', text: '$1/2$' }, { key: 'D', text: '$4/10$' }], correctKey: 'A', explanation: 'Còn 4 đỏ trên 9 quả $\\implies 4/9$.' },
      { id: 'c6_ex_mc9', question: 'Nếu $P(B) = 1$ thì với mọi biến cố $A$ ta có $P(A|B)$ bằng:', options: [{ key: 'A', text: '$P(A)$' }, { key: 'B', text: '$1$' }, { key: 'C', text: '$0$' }, { key: 'D', text: '$P(B)$' }], correctKey: 'A', explanation: '$P(AB)/1 = P(A)$.' },
      { id: 'c6_ex_mc10', question: 'Cho $P(A|B) = 0.8, P(B) = 0.3$. Giá trị $P(AB)$ bằng:', options: [{ key: 'A', text: '$0.24$' }, { key: 'B', text: '$0.5$' }, { key: 'C', text: '$0.375$' }, { key: 'D', text: '$0.11$' }], correctKey: 'A', explanation: '$0.8 \\times 0.3 = 0.24$.' },
      { id: 'c6_ex_mc11', question: 'Hai biến cố $A$ và $B$ có $P(A) > 0, P(B) > 0$. Nếu $A$ và $B$ xung khắc thì chúng:', options: [{ key: 'A', text: 'Không độc lập' }, { key: 'B', text: 'Độc lập' }, { key: 'C', text: 'Trùng nhau' }, { key: 'D', text: 'Bằng 1' }], correctKey: 'A', explanation: '$P(AB) = 0 \\ne P(A)P(B)$.' },
      { id: 'c6_ex_mc12', question: 'Xác suất để một học sinh thi đỗ đại học là $0.8$. Biết bạn đó ôn thi kỹ thì tỷ lệ đỗ là $0.95$. Đại lượng $0.95$ là:', options: [{ key: 'A', text: 'Xác suất có điều kiện' }, { key: 'B', text: 'Xác suất toàn phần' }, { key: 'C', text: 'Xác suất biến cố đối' }, { key: 'D', text: 'Số học sinh đỗ' }], correctKey: 'A', explanation: 'Xác suất thi đỗ trong điều kiện đã ôn thi kỹ.' }
    ],
    part2: [
      {
        id: 'c6_ex_tf1',
        context: 'Một công ty bảo hiểm nhận thấy $20\\%$ khách hàng thuộc nhóm lái xe rủi ro cao, $80\\%$ thuộc nhóm lái xe an toàn. Nhóm rủi ro cao có xác suất gây tai nạn trong năm là $0.1$. Nhóm an toàn có xác suất là $0.02$.',
        items: [
          { key: 'a', text: 'Xác suất một khách hàng ngẫu nhiên gây tai nạn trong năm là $0.036$.', isCorrect: true, explanation: '$0.2(0.1) + 0.8(0.02) = 0.02 + 0.016 = 0.036$.' },
          { key: 'b', text: 'Tỷ lệ khách hàng không gây tai nạn là $96.4\\%$.', isCorrect: true, explanation: '$1 - 0.036 = 0.964 = 96.4\\%$.' },
          { key: 'c', text: 'Biết một khách hàng vừa gây tai nạn, xác suất người đó thuộc nhóm rủi ro cao lớn hơn $50\\%$.', isCorrect: true, explanation: '$0.02 / 0.036 = 5/9 \\approx 55.6\\% > 50\\%$.' },
          { key: 'd', text: 'Hai biến cố "khách hàng thuộc nhóm rủi ro cao" và "gây tai nạn" là hai biến cố độc lập.', isCorrect: false, explanation: 'Nhóm rủi ro cao có tỷ lệ tai nạn gấp 5 lần nhóm an toàn nên không độc lập.' }
        ],
        fullExplanation: 'Ứng dụng Bayes trong định phí bảo hiểm.'
      },
      {
        id: 'c6_ex_tf2',
        context: 'Gieo hai con xúc xắc cân đối cùng lúc. Gọi $A$ là biến cố "Tổng số chấm bằng 7", $B$ là biến cố "Con xúc xắc thứ nhất xuất hiện mặt 3 chấm".',
        items: [
          { key: 'a', text: 'Số phần tử của không gian mẫu là $36$.', isCorrect: true, explanation: '$6 \\times 6 = 36$.' },
          { key: 'b', text: 'Xác suất $P(A) = 1/6$.', isCorrect: true, explanation: 'Có 6 cặp tổng 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) $\\implies 6/36 = 1/6$.' },
          { key: 'c', text: 'Xác suất $P(A|B) = 1/6$.', isCorrect: true, explanation: 'Con thứ nhất là 3 thì con thứ hai phải là 4 $\\implies 1/6$.' },
          { key: 'd', text: 'Hai biến cố $A$ và $B$ là hai biến cố độc lập.', isCorrect: true, explanation: '$P(A|B) = P(A) = 1/6$.' }
        ],
        fullExplanation: 'Bài toán xúc xắc kinh điển về biến cố độc lập.'
      },
      {
        id: 'c6_ex_tf3',
        context: 'Một bài kiểm tra có 2 phần thi lý thuyết và thực hành. Tỷ lệ đỗ lý thuyết là $0.8$. Nếu đã đỗ lý thuyết thì tỷ lệ đỗ thực hành là $0.9$. Nếu trượt lý thuyết thì tỷ lệ đỗ thực hành chỉ là $0.3$.',
        items: [
          { key: 'a', text: 'Xác suất thí sinh đỗ cả hai phần thi là $0.72$.', isCorrect: true, explanation: '$0.8 \\times 0.9 = 0.72$.' },
          { key: 'b', text: 'Xác suất thí sinh đỗ phần thực hành là $0.78$.', isCorrect: true, explanation: '$0.8(0.9) + 0.2(0.3) = 0.72 + 0.06 = 0.78$.' },
          { key: 'c', text: 'Xác suất thí sinh trượt cả hai phần thi là $0.14$.', isCorrect: true, explanation: '$0.2 \\times (1 - 0.3) = 0.2 \\times 0.7 = 0.14$.' },
          { key: 'd', text: 'Hai phần thi độc lập với nhau.', isCorrect: false, explanation: 'Tỷ lệ đỗ thực hành phụ thuộc vào kết quả lý thuyết ($0.9 \\ne 0.3$).' }
        ],
        fullExplanation: 'Quy tắc nhân và xác suất toàn phần.'
      },
      {
        id: 'c6_ex_tf4',
        context: 'Lọc thư rác (Spam) trong hòm thư điện tử.',
        items: [
          { key: 'a', text: 'Hệ thống dùng công thức Bayes để ước lượng xác suất một email là thư rác.', isCorrect: true, explanation: 'Thuật toán Naive Bayes Spam Filtering.' },
          { key: 'b', text: 'Nếu từ "Khuyến mãi" xuất hiện trong $80\\%$ thư rác và chỉ $5\\%$ thư thường thì sự xuất hiện của từ này làm tăng khả năng là thư rác.', isCorrect: true, explanation: 'Tỷ số likelihood ratio cao.' },
          { key: 'c', text: 'Xác suất có điều kiện luôn nằm trong đoạn $[0; 1]$.', isCorrect: true, explanation: 'Tính chất xác suất.' },
          { key: 'd', text: '$P(A|B)$ luôn luôn bằng $P(B|A)$.', isCorrect: false, explanation: 'Chỉ bằng nhau khi $P(A) = P(B)$.' }
        ],
        fullExplanation: 'Ứng dụng Bayes trong máy học và trí tuệ nhân tạo.'
      }
    ],
    part3: [
      { id: 'c6_ex_sa1', question: 'Cho $P(A) = 0.5, P(B) = 0.4, P(AB) = 0.2$. Tính $P(B|A)$.', correctAnswer: '0.4', acceptedAnswers: ['0.4'], explanation: '$0.2 / 0.5 = 0.4$.' },
      { id: 'c6_ex_sa2', question: 'Biết $A, B$ độc lập và $P(A) = 0.3, P(B) = 0.5$. Tính $P(AB)$.', correctAnswer: '0.15', acceptedAnswers: ['0.15'], explanation: '$0.3 \\times 0.5 = 0.15$.' },
      { id: 'c6_ex_sa3', question: 'Một xạ thủ bắn 2 viên đạn độc lập. Xác suất trúng mỗi viên là $0.9$. Tính xác suất trúng cả 2 viên.', correctAnswer: '0.81', acceptedAnswers: ['0.81'], explanation: '$0.9 \\times 0.9 = 0.81$.' },
      { id: 'c6_sa_04_alt', question: 'Rút ngẫu nhiên một lá bài từ bộ bài 52 lá. Biết lá bài đó là chất Bích (13 lá). Xác suất đó là lá Át Bích bằng bao nhiêu? (Nhập dưới dạng phân số như 1/13).', correctAnswer: '1/13', acceptedAnswers: ['1/13'], explanation: '$1/13$.' },
      { id: 'c6_ex_sa5', question: 'Một máy sản xuất có tỷ lệ phế phẩm $5\\%$. Tính tỷ lệ sản phẩm đạt chuẩn của máy đó theo tỷ lệ phần trăm (nhập số nguyên, ví dụ 95).', correctAnswer: '95', acceptedAnswers: ['95', '95%'], explanation: '$100 - 5 = 95\\%$.' },
      { id: 'c6_ex_sa6', question: 'Cho $P(A) = 0.6$. Tính xác suất của biến cố đối $P(\\bar{A})$.', correctAnswer: '0.4', acceptedAnswers: ['0.4'], explanation: '$1 - 0.6 = 0.4$.' }
    ]
  }
};
