import { Chapter } from '../types/mathTypes';

export const chapter1Data: Chapter = {
  id: 1,
  slug: 'ung-dung-dao-ham',
  code: 'CHƯƠNG I',
  title: 'Ứng Dụng Đạo Hàm Khảo Sát Hàm Số',
  subtitle: 'Tính đơn điệu, cực trị, giá trị lớn nhất - nhỏ nhất, đường tiệm cận và đồ thị hàm số',
  semester: 1,
  icon: '/assets/s1_trangmo_02.svg',
  color: 'indigo',
  gradient: 'from-indigo-600 to-blue-500',
  stats: {
    lessons: 5,
    mcCount: 15,
    tfCount: 5,
    saCount: 5,
  },
  theory: {
    title: 'Củng cố kiến thức trọng tâm Chương 1',
    summary: [
      '**Tính đơn điệu**: Hàm số $y = f(x)$ đồng biến trên $(a; b) \\iff f\'(x) \\ge 0, \\forall x \\in (a;b)$ (dấu bằng xảy ra tại hữu hạn điểm).',
      '**Cực trị**: Nếu $f\'(x)$ đổi dấu từ dương sang âm qua $x_0$ thì $x_0$ là điểm cực đại; từ âm sang dương thì $x_0$ là điểm cực tiểu.',
      '**Giá trị lớn nhất - nhỏ nhất**: Trên đoạn $[a; b]$, tính $f(a), f(b)$ và $f(x_i)$ tại các nghiệm $f\'(x_i) = 0$; $\\max, \\min$ là số lớn nhất/nhỏ nhất.',
      '**Đường tiệm cận**: Đường tiệm cận đứng $x = x_0$ khi $\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty$. Đường tiệm cận ngang $y = y_0$ khi $\\lim_{x \\to \\pm\\infty} f(x) = y_0$. Đường tiệm cận xiên $y = ax + b$ ($a \\ne 0$) khi $\\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0$.'
    ],
    keyFormulas: [
      {
        name: 'Quy tắc xét dấu đạo hàm cấp 1',
        formula: 'f\'(x) > 0 \\implies f(x) \\text{ đồng biến}; \\quad f\'(x) < 0 \\implies f(x) \\text{ nghịch biến}',
        note: 'Dấu bằng chỉ được xảy ra tại một số hữu hạn điểm rời rạc.'
      },
      {
        name: 'Điều kiện cực trị cấp 2',
        formula: 'f\'(x_0) = 0, \\ f\'\'(x_0) < 0 \\implies \\text{Cực đại}; \\quad f\'(x_0) = 0, \\ f\'\'(x_0) > 0 \\implies \\text{Cực tiểu}',
        note: 'Áp dụng hiệu quả với hàm lượng giác và đa thức.'
      },
      {
        name: 'Tiệm cận xiên hàm phân thức bậc 2 trên bậc 1',
        formula: 'y = \\frac{ax^2+bx+c}{px+q} = Ax + B + \\frac{R}{px+q} \\implies y = Ax + B \\text{ là TCX}',
        note: 'Chia đa thức tử cho mẫu để xác định nhanh hệ số A, B.'
      },
      {
        name: 'Tâm đối xứng đồ thị bậc ba',
        formula: 'f\'\'(x_0) = 0 \\implies I(x_0; f(x_0)) \\text{ là tâm đối xứng và là điểm uốn}',
        note: 'Mọi đường thẳng qua I cắt đồ thị tại 2 điểm đối xứng nhau.'
      }
    ],
    typicalMethods: [
      {
        name: 'Dạng 1: Tìm khoảng đơn điệu và cực trị',
        steps: [
          'Bước 1: Tìm tập xác định $D$ của hàm số.',
          'Bước 2: Tính $f\'(x)$, giải phương trình $f\'(x) = 0$ hoặc tìm các điểm $x$ làm $f\'(x)$ không xác định.',
          'Bước 3: Lập bảng biến thiên và kết luận các khoảng tăng/giảm, điểm cực trị.'
        ]
      },
      {
        name: 'Dạng 2: Tìm GTLN, GTNN trên đoạn $[a; b]$',
        steps: [
          'Bước 1: Tính đạo hàm $y\' = f\'(x)$.',
          'Bước 2: Tìm các nghiệm $x_1, x_2, \\dots \\in [a; b]$ của phương trình $f\'(x) = 0$.',
          'Bước 3: Tính các giá trị $f(a), f(b), f(x_1), f(x_2), \\dots$',
          'Bước 4: So sánh và rút ra $M = \\max_{[a;b]} f(x)$, $m = \\min_{[a;b]} f(x)$.'
        ]
      }
    ],
    pitfalls: [
      'Nhầm lẫn giữa "Điểm cực trị của hàm số" ($x_0$) và "Cực trị/Giá trị cực trị của hàm số" ($y_0 = f(x_0)$) và "Điểm cực trị của đồ thị" ($M(x_0; y_0)$).',
      'Kết luận khoảng đồng biến nghịch biến dùng kí hiệu $\\cup$ hoặc dấu phẩy gộp sai (phải ghi rõ "và" hoặc từng khoảng rời nhau).',
      'Quên xét điều kiện mẫu số khi tìm tiệm cận đứng, tiệm cận ngang.'
    ]
  },
  mcBank: [
    {
      id: 'c1_mc_01',
      question: 'Cho hàm số $y = f(x)$ có bảng xét dấu đạo hàm như sau: $f\'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$, $f\'(x) < 0$ trên $(-1; 2)$. Hàm số đã cho đồng biến trên khoảng nào?',
      options: [
        { key: 'A', text: '$(-\\infty; -1)$' },
        { key: 'B', text: '$(-1; 2)$' },
        { key: 'C', text: '$(-\\infty; 2)$' },
        { key: 'D', text: '$(-1; +\\infty)$' }
      ],
      correctKey: 'A',
      explanation: 'Đạo hàm $f\'(x) > 0$ trên các khoảng $(-\\infty; -1)$ và $(2; +\\infty)$, do đó hàm số đồng biến trên mỗi khoảng đó. Đáp án A đúng.'
    },
    {
      id: 'c1_mc_02',
      question: 'Điểm cực đại của hàm số $y = x^3 - 3x + 2$ là:',
      options: [
        { key: 'A', text: '$x = 1$' },
        { key: 'B', text: '$x = -1$' },
        { key: 'C', text: '$y = 4$' },
        { key: 'D', text: '$y = 0$' }
      ],
      correctKey: 'B',
      explanation: 'Ta có $y\' = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Vì $y\'\' = 6x$, tại $x = -1$ có $y\'\'(-1) = -6 < 0$ nên $x = -1$ là điểm cực đại của hàm số.'
    },
    {
      id: 'c1_mc_03',
      question: 'Giá trị nhỏ nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng:',
      options: [
        { key: 'A', text: '$2$' },
        { key: 'B', text: '$3$' },
        { key: 'C', text: '$11$' },
        { key: 'D', text: '$1$' }
      ],
      correctKey: 'A',
      explanation: 'Ta có $f\'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\implies x = 0$ hoặc $x = 1$ (thuộc $[0; 2]$). $f(0) = 3$, $f(1) = 2$, $f(2) = 11$. Vậy $\\min_{[0;2]} f(x) = 2$ tại $x = 1$.'
    },
    {
      id: 'c1_mc_04',
      question: 'Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x - 1}{x + 2}$ có phương trình là:',
      options: [
        { key: 'A', text: '$x = -2$' },
        { key: 'B', text: '$x = 2$' },
        { key: 'C', text: '$y = 2$' },
        { key: 'D', text: '$y = -2$' }
      ],
      correctKey: 'A',
      explanation: 'Mẫu số triệt tiêu tại $x = -2$ và tử số tại $-2$ bằng $-5 \\ne 0$. Do đó $\\lim_{x \\to -2^\\pm} y = \\pm\\infty$, phương trình tiệm cận đứng là $x = -2$.'
    },
    {
      id: 'c1_mc_05',
      question: 'Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 3x + 1}{x - 1}$ có phương trình là:',
      options: [
        { key: 'A', text: '$y = x - 2$' },
        { key: 'B', text: '$y = x + 2$' },
        { key: 'C', text: '$y = x - 1$' },
        { key: 'D', text: '$y = 2x - 1$' }
      ],
      correctKey: 'A',
      explanation: 'Thực hiện phép chia đa thức: $\\frac{x^2 - 3x + 1}{x - 1} = x - 2 - \\frac{1}{x - 1}$. Vì $\\lim_{x \\to \\pm\\infty} \\left(-\\frac{1}{x-1}\\right) = 0$, tiệm cận xiên là $y = x - 2$.'
    },
    {
      id: 'c1_mc_06',
      question: 'Hàm số nào sau đây đồng biến trên khoảng $(-\\infty; +\\infty)$?',
      options: [
        { key: 'A', text: '$y = x^3 + 3x - 1$' },
        { key: 'B', text: '$y = x^4 + 2x^2$' },
        { key: 'C', text: '$y = \\frac{x+1}{x-2}$' },
        { key: 'D', text: '$y = x^3 - 3x$' }
      ],
      correctKey: 'A',
      explanation: 'Với $y = x^3 + 3x - 1$, ta có $y\' = 3x^2 + 3 > 0, \\forall x \\in \\mathbb{R}$. Vậy hàm số đồng biến trên $\\mathbb{R}$.'
    },
    {
      id: 'c1_mc_07',
      question: 'Đồ thị hàm số $y = \\frac{2x+1}{x-1}$ có tâm đối xứng là điểm nào sau đây?',
      options: [
        { key: 'A', text: '$I(1; 2)$' },
        { key: 'B', text: '$I(-1; 2)$' },
        { key: 'C', text: '$I(2; 1)$' },
        { key: 'D', text: '$I(1; -2)$' }
      ],
      correctKey: 'A',
      explanation: 'Tâm đối xứng của hàm phân thức bậc nhất trên bậc nhất $y = \\frac{ax+b}{cx+d}$ là giao điểm của 2 đường tiệm cận: TC đứng $x = 1$, TC ngang $y = 2$. Do đó tâm đối xứng là $I(1; 2)$.'
    },
    {
      id: 'c1_mc_08',
      question: 'Số điểm cực trị của hàm số $y = -x^4 + 2x^2 + 5$ là:',
      options: [
        { key: 'A', text: '$3$' },
        { key: 'B', text: '$1$' },
        { key: 'C', text: '$2$' },
        { key: 'D', text: '$0$' }
      ],
      correctKey: 'A',
      explanation: 'Hàm trùng phương có $a = -1$, $b = 2 \\implies ab = -2 < 0$. Do $ab < 0$, đồ thị hàm số có đúng 3 điểm cực trị.'
    },
    {
      id: 'c1_mc_09',
      question: 'Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{x+1}{x^2 - 4}$ là:',
      options: [
        { key: 'A', text: '$3$' },
        { key: 'B', text: '$2$' },
        { key: 'C', text: '$1$' },
        { key: 'D', text: '$4$' }
      ],
      correctKey: 'A',
      explanation: 'Mẫu $x^2 - 4 = 0 \\iff x = \\pm 2$ (cả 2 nghiệm đều không làm tử triệt tiêu) $\\implies 2$ TC đứng: $x = 2, x = -2$. Bậc tử bé hơn bậc mẫu nên $\\lim_{x \\to \\pm\\infty} y = 0 \\implies 1$ TC ngang: $y = 0$. Tổng cộng có 3 đường tiệm cận.'
    },
    {
      id: 'c1_mc_10',
      question: 'Hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f\'(x) = x(x-1)^2(x+2)^3$. Số điểm cực trị của hàm số đã cho là:',
      options: [
        { key: 'A', text: '$2$' },
        { key: 'B', text: '$3$' },
        { key: 'C', text: '$1$' },
        { key: 'D', text: '$0$' }
      ],
      correctKey: 'A',
      explanation: 'Đạo hàm $f\'(x) = 0$ tại $x = 0$ (bậc 1), $x = 1$ (bậc 2 - không đổi dấu), $x = -2$ (bậc 3 - đổi dấu). Do đó $f\'(x)$ chỉ đổi dấu qua 2 nghiệm $x = 0$ và $x = -2$. Vậy hàm số có 2 điểm cực trị.'
    },
    {
      id: 'c1_mc_11',
      question: 'Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x$ đạt cực đại tại $x = 1$.',
      options: [
        { key: 'A', text: '$m = 2$' },
        { key: 'B', text: '$m = 0$' },
        { key: 'C', text: '$m = 1$' },
        { key: 'D', text: '$m = -1$' }
      ],
      correctKey: 'A',
      explanation: '$y\' = 3x^2 - 6mx + 3(m^2 - 1)$. Đạt cực trị tại $x = 1 \\implies y\'(1) = 3 - 6m + 3m^2 - 3 = 3m^2 - 6m = 0 \\implies m = 0$ hoặc $m = 2$. Với $y\'\' = 6x - 6m$: Tại $x = 1$, $y\'\'(1) = 6 - 6m$. Để đạt cực đại thì $y\'\'(1) < 0 \\iff 6 - 6m < 0 \\iff m > 1$. Vậy chọn $m = 2$.'
    },
    {
      id: 'c1_mc_12',
      question: 'Cho hàm số $y = \\frac{x-2}{x+1}$. Mệnh đề nào sau đây đúng?',
      options: [
        { key: 'A', text: 'Hàm số đồng biến trên mỗi khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$' },
        { key: 'B', text: 'Hàm số nghịch biến trên mỗi khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$' },
        { key: 'C', text: 'Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$' },
        { key: 'D', text: 'Hàm số đồng biến trên $(-\\infty; +\\infty)$' }
      ],
      correctKey: 'A',
      explanation: '$y\' = \\frac{1\\cdot 1 - (-2)\\cdot 1}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\ne -1$. Hàm số đồng biến trên từng khoảng xác định $(-\\infty; -1)$ và $(-1; +\\infty)$. (Lưu ý: Không viết đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$).'
    },
    {
      id: 'c1_mc_13',
      question: 'GTLN của hàm số $y = x + \\frac{4}{x}$ trên đoạn $[1; 3]$ là:',
      options: [
        { key: 'A', text: '$5$' },
        { key: 'B', text: '$4$' },
        { key: 'C', text: '$\\frac{13}{3}$' },
        { key: 'D', text: '$\\frac{9}{2}$' }
      ],
      correctKey: 'A',
      explanation: '$y\' = 1 - \\frac{4}{x^2} = 0 \\implies x = 2 \\in [1; 3]$. Ta tính $y(1) = 5$, $y(2) = 4$, $y(3) = 3 + 4/3 = 13/3 \\approx 4.33$. Vậy $\\max = 5$ tại $x = 1$.'
    },
    {
      id: 'c1_mc_14',
      question: 'Đồ thị của hàm số $y = \\frac{x^2 - 4}{x - 2}$ có bao nhiêu đường tiệm cận đứng?',
      options: [
        { key: 'A', text: '$0$' },
        { key: 'B', text: '$1$' },
        { key: 'C', text: '$2$' },
        { key: 'D', text: '$3$' }
      ],
      correctKey: 'A',
      explanation: 'Ta có $\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2$ với $x \\ne 2$. Khi $x \\to 2$, $\\lim_{x \\to 2} y = 4$ (hữu hạn). Do đó đồ thị không có đường tiệm cận đứng nào.'
    },
    {
      id: 'c1_mc_15',
      question: 'Hình chữ nhật có chu vi bằng $20\\text{ cm}$. Diện tích lớn nhất của hình chữ nhật đó là:',
      options: [
        { key: 'A', text: '$25\\text{ cm}^2$' },
        { key: 'B', text: '$24\\text{ cm}^2$' },
        { key: 'C', text: '$20\\text{ cm}^2$' },
        { key: 'D', text: '$16\\text{ cm}^2$' }
      ],
      correctKey: 'A',
      explanation: 'Nửa chu vi $x + y = 10 \\implies y = 10 - x$. Diện tích $S(x) = x(10 - x) = -x^2 + 10x$. Đạt cực đại tại $x = 5 \\implies S_{\\max} = 25\\text{ cm}^2$ (khi hình là hình vuông cạnh $5\\text{ cm}$).'
    }
  ],
  tfBank: [
    {
      id: 'c1_tf_01',
      context: 'Cho hàm số $y = f(x) = \\frac{x^2 - 2x + 4}{x - 1}$. Xét tính đúng sai của các khẳng định sau:',
      items: [
        {
          key: 'a',
          text: 'Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.',
          isCorrect: true,
          explanation: 'Mẫu số $x - 1 \\ne 0 \\iff x \\ne 1$, do đó $D = \\mathbb{R} \\setminus \\{1\\}$.'
        },
        {
          key: 'b',
          text: 'Đồ thị hàm số có đường tiệm cận đứng là $x = 1$.',
          isCorrect: true,
          explanation: 'Khi $x \\to 1^\\pm$, tử số tiến tới $1 - 2 + 4 = 3 \\ne 0$, mẫu số tiến tới $0$, nên $\\lim_{x \\to 1^\\pm} f(x) = \\pm\\infty$. Vậy $x = 1$ là TC đứng.'
        },
        {
          key: 'c',
          text: 'Đồ thị hàm số có đường tiệm cận xiên là $y = x + 1$.',
          isCorrect: false,
          explanation: 'Chia tử cho mẫu: $\\frac{x^2 - 2x + 4}{x - 1} = x - 1 + \\frac{3}{x - 1}$. Vậy tiệm cận xiên là $y = x - 1$, không phải $y = x + 1$.'
        },
        {
          key: 'd',
          text: 'Hàm số đạt cực tiểu tại $x = 3$ với giá trị cực tiểu bằng $7$.',
          isCorrect: true,
          explanation: '$f\'(x) = 1 - \\frac{3}{(x-1)^2} = 0 \\iff (x-1)^2 = 3 \\implies x = 1 + \\sqrt{3}$ hoặc tính $f\'(x) = \\frac{x^2 - 2x - 2}{(x-1)^2}$. Tại $x = 3$, $f(3) = \\frac{9 - 6 + 4}{2} = 3.5$. Ý này sai.'
        }
      ],
      fullExplanation: 'Phân tích chi tiết: Biểu diễn hàm số dạng $y = x - 1 + \\frac{3}{x-1}$. TXĐ $D = \\mathbb{R} \\setminus \\{1\\}$. TC đứng $x = 1$, TC xiên $y = x - 1$. Nghiệm đạo hàm là $x = 1 \\pm \\sqrt{3}$.'
    },
    {
      id: 'c1_tf_02',
      context: 'Cho hàm số $y = f(x) = x^3 - 3x^2 + 2$. Xét tính đúng sai của các khẳng định sau:',
      items: [
        {
          key: 'a',
          text: 'Hàm số đồng biến trên các khoảng $(-\\infty; 0)$ và $(2; +\\infty)$.',
          isCorrect: true,
          explanation: '$y\' = 3x^2 - 6x = 3x(x - 2) > 0 \\iff x < 0$ hoặc $x > 2$. Khẳng định đúng.'
        },
        {
          key: 'b',
          text: 'Hàm số có điểm cực đại là $x = 0$ và giá trị cực đại bằng $2$.',
          isCorrect: true,
          explanation: 'Qua $x = 0$, $y\'$ đổi dấu từ $(+)$ sang $(-)$ nên $x = 0$ là điểm cực đại và $y(0) = 2$.'
        },
        {
          key: 'c',
          text: 'Điểm uốn của đồ thị hàm số là $I(1; 0)$ và $I$ đồng thời là tâm đối xứng của đồ thị.',
          isCorrect: true,
          explanation: '$y\'\' = 6x - 6 = 0 \\iff x = 1 \\implies y(1) = 1 - 3 + 2 = 0$. Điểm uốn $I(1; 0)$ là tâm đối xứng.'
        },
        {
          key: 'd',
          text: 'Giá trị nhỏ nhất của hàm số trên đoạn $[-1; 3]$ bằng $-2$.',
          isCorrect: true,
          explanation: '$f(-1) = -2$, $f(0) = 2$, $f(2) = -2$, $f(3) = 2$. Vậy $\\min_{[-1;3]} f(x) = -2$ tại $x = -1$ và $x = 2$.'
        }
      ],
      fullExplanation: 'Tất cả 4 ý a, b, c, d của câu hỏi này đều chính xác theo khảo sát hàm bậc ba chuẩn.'
    },
    {
      id: 'c1_tf_03',
      context: 'Cho hàm số $y = \\frac{2x - 3}{x + 1}$ có đồ thị $(C)$.',
      items: [
        {
          key: 'a',
          text: 'Hàm số luôn đồng biến trên từng khoảng xác định.',
          isCorrect: true,
          explanation: '$y\' = \\frac{2(1) - (-3)(1)}{(x+1)^2} = \\frac{5}{(x+1)^2} > 0, \\forall x \\ne -1$. Đúng.'
        },
        {
          key: 'b',
          text: 'Đồ thị $(C)$ có hai đường tiệm cận cắt nhau tại điểm $I(-1; 2)$.',
          isCorrect: true,
          explanation: 'TC đứng $x = -1$, TC ngang $y = 2$. Giao điểm là $I(-1; 2)$. Đúng.'
        },
        {
          key: 'c',
          text: 'Giao điểm của $(C)$ với trục hoành là $M(0; -3)$.',
          isCorrect: false,
          explanation: 'Trục hoành có $y = 0 \\implies 2x - 3 = 0 \\implies x = 1.5$. Giao với trục tung mới là $(0; -3)$.'
        },
        {
          key: 'd',
          text: 'Khoảng cách từ gốc tọa độ $O$ đến tiệm cận ngang bằng $2$.',
          isCorrect: true,
          explanation: 'Phương trình TC ngang $y - 2 = 0$, khoảng cách từ $O(0;0)$ là $|0 - 2| = 2$.'
        }
      ],
      fullExplanation: 'Đồ thị hàm nhất biến có tiệm cận đứng $x = -1$, tiệm cận ngang $y = 2$, đồng biến trên $(-\\infty; -1)$ và $(-1; +\\infty)$.'
    },
    {
      id: 'c1_tf_04',
      context: 'Một công ty sản xuất một loại sản phẩm với hàm tổng chi phí $C(x) = x^3 - 30x^2 + 500x + 1000$ (triệu đồng), trong đó $x$ là số lượng sản phẩm ($x \\in [5; 25]$).',
      items: [
        {
          key: 'a',
          text: 'Chi phí cố định (khi chưa sản xuất sản phẩm nào) là $1000$ triệu đồng.',
          isCorrect: true,
          explanation: 'Khi $x = 0$, $C(0) = 1000$ triệu đồng.'
        },
        {
          key: 'b',
          text: 'Hàm chi phí biên là $C\'(x) = 3x^2 - 60x + 500$.',
          isCorrect: true,
          explanation: 'Lấy đạo hàm bậc nhất của $C(x)$ ta được $C\'(x) = 3x^2 - 60x + 500$.'
        },
        {
          key: 'c',
          text: 'Chi phí biên đạt giá trị nhỏ nhất khi sản xuất $x = 10$ sản phẩm.',
          isCorrect: true,
          explanation: '$C\'\'(x) = 6x - 60 = 0 \\iff x = 10$. Đạo hàm cấp 2 dương nên $x = 10$ là điểm cực tiểu của chi phí biên.'
        },
        {
          key: 'd',
          text: 'Chi phí biên nhỏ nhất đạt được là $100$ triệu đồng.',
          isCorrect: false,
          explanation: '$C\'(10) = 3(100) - 60(10) + 500 = 300 - 600 + 500 = 200$ triệu đồng, không phải $100$.'
        }
      ],
      fullExplanation: 'Ứng dụng đạo hàm trong bài toán kinh tế: hàm chi phí biên $C\'(x)$ đạt GTNN tại đỉnh parabol $x = -\\frac{b}{2a} = 10$, giá trị nhỏ nhất là $200$.'
    },
    {
      id: 'c1_tf_05',
      context: 'Cho hàm số $y = f(x)$ có đạo hàm $f\'(x) = (x-1)(x-2)^2(x+3)$.',
      items: [
        {
          key: 'a',
          text: 'Phương trình $f\'(x) = 0$ có đúng 3 nghiệm thực phân biệt.',
          isCorrect: true,
          explanation: 'Nghiệm là $x = 1, x = 2, x = -3$ (3 nghiệm thực phân biệt).'
        },
        {
          key: 'b',
          text: 'Hàm số $y = f(x)$ có 3 điểm cực trị.',
          isCorrect: false,
          explanation: '$x = 2$ là nghiệm bội chẵn nên qua $x = 2$ thì $f\'(x)$ không đổi dấu. Do đó chỉ có 2 điểm cực trị ($x = 1$ và $x = -3$).'
        },
        {
          key: 'c',
          text: 'Hàm số nghịch biến trên khoảng $(-3; 1)$.',
          isCorrect: true,
          explanation: 'Với $x \\in (-3; 1)$, $x-1 < 0$, $(x-2)^2 > 0$, $x+3 > 0 \\implies f\'(x) < 0$. Hàm số nghịch biến.'
        },
        {
          key: 'd',
          text: 'Hàm số đạt cực tiểu tại điểm $x = 1$.',
          isCorrect: true,
          explanation: 'Tại $x = 1$, $f\'(x)$ đổi dấu từ âm sang dương nên $x = 1$ là điểm cực tiểu.'
        }
      ],
      fullExplanation: 'Nghiệm bội chẵn không làm đổi dấu đạo hàm nên không sinh ra cực trị.'
    }
  ],
  saBank: [
    {
      id: 'c1_sa_01',
      question: 'Tìm hoành độ điểm cực đại của đồ thị hàm số $y = -x^3 + 3x + 1$.',
      correctAnswer: '1',
      acceptedAnswers: ['1', 'x=1'],
      explanation: '$y\' = -3x^2 + 3 = 0 \\iff x = \\pm 1$. Vì $y\'\' = -6x$, tại $x = 1$ có $y\'\'(1) = -6 < 0$ nên $x = 1$ là hoành độ điểm cực đại.'
    },
    {
      id: 'c1_sa_02',
      question: 'Tính giá trị lớn nhất của hàm số $y = x^4 - 4x^2 + 5$ trên đoạn $[0; 3]$.',
      correctAnswer: '50',
      acceptedAnswers: ['50'],
      explanation: '$y\' = 4x^3 - 8x = 0 \\implies x = 0$ hoặc $x = \\sqrt{2}$. Giá trị: $y(0) = 5$, $y(\\sqrt{2}) = 1$, $y(3) = 3^4 - 4(9) + 5 = 81 - 36 + 5 = 50$. Vậy $\\max = 50$.'
    },
    {
      id: 'c1_sa_03',
      question: 'Đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 1}$ có đường tiệm cận xiên là $y = ax + b$. Tính giá trị của $a + b$.',
      correctAnswer: '1',
      acceptedAnswers: ['1', 'a+b=1'],
      explanation: 'Ta có $\\frac{2x^2 - 3x + 5}{x - 1} = 2x - 1 + \\frac{4}{x - 1}$. Đường tiệm cận xiên là $y = 2x - 1$. Vậy $a = 2, b = -1 \\implies a + b = 2 + (-1) = 1$.'
    },
    {
      id: 'c1_sa_04',
      question: 'Một người nông dân muốn rào một khu đất hình chữ nhật giáp bờ sông thẳng (bờ sông không cần rào). Tổng chiều dài lưới thép có sẵn là $120\\text{ m}$. Hỏi diện tích lớn nhất người đó có thể rào được là bao nhiêu mét vuông?',
      correctAnswer: '1800',
      acceptedAnswers: ['1800', '1800 m2'],
      explanation: 'Gọi chiều rộng vuông góc bờ sông là $x$ ($x > 0$), chiều dài song song bờ sông là $120 - 2x$. Diện tích $S(x) = x(120 - 2x) = -2x^2 + 120x$. Đạt cực đại tại $x = 30$, $S_{\\max} = 30 \\times 60 = 1800\\text{ m}^2$.'
    },
    {
      id: 'c1_sa_05',
      question: 'Cho hàm số $y = \\frac{x-1}{x+2}$ có đồ thị $(C)$. Gọi $I$ là giao điểm hai tiệm cận của $(C)$. Tính khoảng cách từ $I$ đến gốc tọa độ $O(0;0)$. (Làm tròn đến hàng phần mười nếu cần hoặc viết dưới dạng căn thức $\\sqrt{5} \\approx 2.2$). Nhập giá trị làm tròn 1 chữ số thập phân.',
      correctAnswer: '2.2',
      acceptedAnswers: ['2.2', 'sqrt(5)', 'căn 5'],
      explanation: 'TC đứng $x = -2$, TC ngang $y = 1 \\implies I(-2; 1)$. Khoảng cách $OI = \\sqrt{(-2)^2 + 1^2} = \\sqrt{5} \\approx 2.24 \\approx 2.2$.'
    }
  ],
  chapterExam: {
    id: 'exam_ch1',
    title: 'Đề Ôn Tập Chương I - Ứng Dụng Đạo Hàm Khảo Sát Hàm Số',
    durationMinutes: 60,
    part1: [
      {
        id: 'c1_ex_mc1',
        question: 'Cho hàm số $y = f(x)$ có đạo hàm $f\'(x) = x^2 - 4x + 3$. Khoảng nghịch biến của hàm số là:',
        options: [
          { key: 'A', text: '$(1; 3)$' },
          { key: 'B', text: '$(-\\infty; 1)$' },
          { key: 'C', text: '$(3; +\\infty)$' },
          { key: 'D', text: '$(-\\infty; 3)$' }
        ],
        correctKey: 'A',
        explanation: '$f\'(x) < 0 \\iff 1 < x < 3$. Hàm số nghịch biến trên $(1; 3)$.'
      },
      {
        id: 'c1_ex_mc2',
        question: 'Điểm cực tiểu của hàm số $y = x^3 - 3x^2 + 4$ là:',
        options: [
          { key: 'A', text: '$x = 2$' },
          { key: 'B', text: '$x = 0$' },
          { key: 'C', text: '$y = 0$' },
          { key: 'D', text: '$y = 4$' }
        ],
        correctKey: 'A',
        explanation: '$y\' = 3x^2 - 6x = 0 \\iff x = 0$ hoặc $x = 2$. $y\'\' = 6x - 6 \\implies y\'\'(2) = 6 > 0$ nên $x = 2$ là điểm cực tiểu.'
      },
      {
        id: 'c1_ex_mc3',
        question: 'Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là:',
        options: [
          { key: 'A', text: '$y = 3$' },
          { key: 'B', text: '$x = -2$' },
          { key: 'C', text: '$y = -1/2$' },
          { key: 'D', text: '$x = 3$' }
        ],
        correctKey: 'A',
        explanation: '$\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = 3 \\implies y = 3$ là tiệm cận ngang.'
      },
      {
        id: 'c1_ex_mc4',
        question: 'Giá trị lớn nhất của hàm số $f(x) = -x^4 + 2x^2 + 1$ trên đoạn $[0; 2]$ bằng:',
        options: [
          { key: 'A', text: '$2$' },
          { key: 'B', text: '$1$' },
          { key: 'C', text: '$-7$' },
          { key: 'D', text: '$3$' }
        ],
        correctKey: 'A',
        explanation: '$f\'(x) = -4x^3 + 4x = 0 \\iff x = 0$ hoặc $x = 1$. $f(0) = 1, f(1) = 2, f(2) = -7$. Vậy $\\max = 2$.'
      },
      {
        id: 'c1_ex_mc5',
        question: 'Đồ thị hàm số $y = \\frac{x^2 - 2x + 3}{x - 1}$ có tiệm cận xiên là đường thẳng:',
        options: [
          { key: 'A', text: '$y = x - 1$' },
          { key: 'B', text: '$y = x + 1$' },
          { key: 'C', text: '$y = x$' },
          { key: 'D', text: '$y = 2x - 1$' }
        ],
        correctKey: 'A',
        explanation: 'Chia tử cho mẫu: $y = x - 1 + \\frac{2}{x - 1}$. Tiệm cận xiên là $y = x - 1$.'
      },
      {
        id: 'c1_ex_mc6',
        question: 'Số giao điểm của đồ thị hàm số $y = x^3 - 3x$ với trục hoành là:',
        options: [
          { key: 'A', text: '$3$' },
          { key: 'B', text: '$2$' },
          { key: 'C', text: '$1$' },
          { key: 'D', text: '$0$' }
        ],
        correctKey: 'A',
        explanation: '$x^3 - 3x = 0 \\iff x(x^2 - 3) = 0 \\iff x = 0, x = \\pm \\sqrt{3}$. Có 3 giao điểm.'
      },
      {
        id: 'c1_ex_mc7',
        question: 'Tâm đối xứng của đồ thị hàm số $y = x^3 - 3x^2 + 1$ là:',
        options: [
          { key: 'A', text: '$I(1; -1)$' },
          { key: 'B', text: '$I(1; 1)$' },
          { key: 'C', text: '$I(-1; -3)$' },
          { key: 'D', text: '$I(0; 1)$' }
        ],
        correctKey: 'A',
        explanation: '$y\'\' = 6x - 6 = 0 \\iff x = 1 \\implies y(1) = 1 - 3 + 1 = -1$. Tâm đối xứng là $I(1; -1)$.'
      },
      {
        id: 'c1_ex_mc8',
        question: 'Cho hàm số $y = \\frac{mx - 2}{x + m - 3}$. Tìm tất cả giá trị $m$ để tiệm cận đứng đi qua điểm $A(2; 5)$.',
        options: [
          { key: 'A', text: '$m = 1$' },
          { key: 'B', text: '$m = -1$' },
          { key: 'C', text: '$m = 2$' },
          { key: 'D', text: '$m = 3$' }
        ],
        correctKey: 'A',
        explanation: 'Tiệm cận đứng là $x = -(m - 3) = 3 - m$. Đi qua điểm $A(2; 5) \\implies 3 - m = 2 \\iff m = 1$.'
      },
      {
        id: 'c1_ex_mc9',
        question: 'Hàm số $y = x + \\sqrt{4 - x^2}$ có tập xác định là:',
        options: [
          { key: 'A', text: '$[-2; 2]$' },
          { key: 'B', text: '$(-\\infty; 2]$' },
          { key: 'C', text: '$(-2; 2)$' },
          { key: 'D', text: '$[0; 2]$' }
        ],
        correctKey: 'A',
        explanation: 'Điều kiện: $4 - x^2 \\ge 0 \\iff -2 \\le x \\le 2$.'
      },
      {
        id: 'c1_ex_mc10',
        question: 'Điểm cực đại của đồ thị hàm số $y = x^3 - 3x^2$ là:',
        options: [
          { key: 'A', text: '$(0; 0)$' },
          { key: 'B', text: '$(2; -4)$' },
          { key: 'C', text: '$(0; 2)$' },
          { key: 'D', text: '$(2; 0)$' }
        ],
        correctKey: 'A',
        explanation: '$y\' = 3x^2 - 6x = 0 \\implies x = 0$ (cực đại, $y = 0$) và $x = 2$ (cực tiểu, $y = -4$). Điểm cực đại của đồ thị là $(0; 0)$.'
      },
      {
        id: 'c1_ex_mc11',
        question: 'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ có hai cực trị tại $x = -1$ và $x = 1$. Mệnh đề nào sau đây đúng?',
        options: [
          { key: 'A', text: '$f\'(1) = 0$' },
          { key: 'B', text: '$f(1) = 0$' },
          { key: 'C', text: '$f\'(0) = 0$' },
          { key: 'D', text: '$f(-1) = 0$' }
        ],
        correctKey: 'A',
        explanation: 'Vì hàm số có cực trị tại $x = 1$ nên đạo hàm $f\'(1) = 0$.'
      },
      {
        id: 'c1_ex_mc12',
        question: 'Khoảng cách giữa hai điểm cực trị của đồ thị hàm số $y = x^3 - 3x + 1$ bằng:',
        options: [
          { key: 'A', text: '$2\\sqrt{5}$' },
          { key: 'B', text: '$4$' },
          { key: 'C', text: '$2$' },
          { key: 'D', text: '$\\sqrt{5}$' }
        ],
        correctKey: 'A',
        explanation: 'Hai điểm cực trị: $A(-1; 3)$ và $B(1; -1)$. $AB = \\sqrt{(1 - (-1))^2 + (-1 - 3)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$.'
      }
    ],
    part2: [
      {
        id: 'c1_ex_tf1',
        context: 'Cho hàm số $y = f(x) = \\frac{2x - 1}{x + 1}$. Xét tính đúng sai của các khẳng định sau:',
        items: [
          { key: 'a', text: 'Hàm số đồng biến trên từng khoảng xác định.', isCorrect: true, explanation: '$y\' = 3/(x+1)^2 > 0, \\forall x \\ne -1$.' },
          { key: 'b', text: 'Đường tiệm cận ngang có phương trình $y = 2$.', isCorrect: true, explanation: '$\\lim_{x \\to \\pm\\infty} y = 2$.' },
          { key: 'c', text: 'Đường tiệm cận đứng có phương trình $x = 1$.', isCorrect: false, explanation: 'Mẫu $x + 1 = 0 \\iff x = -1$, nên TC đứng là $x = -1$.' },
          { key: 'd', text: 'Giao điểm của hai đường tiệm cận là $I(-1; 2)$.', isCorrect: true, explanation: 'Giao điểm của $x = -1$ và $y = 2$ là $I(-1; 2)$.' }
        ],
        fullExplanation: 'Khảo sát hàm phân thức hữu tỉ bậc nhất trên bậc nhất.'
      },
      {
        id: 'c1_ex_tf2',
        context: 'Cho hàm số $y = x^4 - 2x^2 - 3$. Xét tính đúng sai của các khẳng định sau:',
        items: [
          { key: 'a', text: 'Đồ thị hàm số có 3 điểm cực trị tạo thành một tam giác cân.', isCorrect: true, explanation: '$ab = -2 < 0 \\implies$ có 3 cực trị đối xứng qua trục tung nên tạo thành tam giác cân.' },
          { key: 'b', text: 'Hàm số có giá trị cực đại bằng $-3$.', isCorrect: true, explanation: 'Điểm cực đại $x = 0 \\implies y(0) = -3$.' },
          { key: 'c', text: 'Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng $-4$.', isCorrect: true, explanation: '$y(\\pm 1) = 1 - 2 - 3 = -4$.' },
          { key: 'd', text: 'Đồ thị hàm số cắt trục hoành tại 4 điểm phân biệt.', isCorrect: false, explanation: '$x^4 - 2x^2 - 3 = 0 \\iff (x^2 - 3)(x^2 + 1) = 0 \\iff x = \\pm\\sqrt{3}$. Chỉ cắt tại 2 điểm.' }
        ],
        fullExplanation: 'Hàm trùng phương có $x^2 + 1 > 0$ nên chỉ có 2 nghiệm thực.'
      },
      {
        id: 'c1_ex_tf3',
        context: 'Cho hàm số $y = f(x) = \\frac{x^2 + 2x - 2}{x - 1}$.',
        items: [
          { key: 'a', text: 'Đồ thị có tiệm cận xiên là $y = x + 3$.', isCorrect: true, explanation: 'Chia tử cho mẫu: $y = x + 3 + \\frac{1}{x - 1}$.' },
          { key: 'b', text: 'Đồ thị có tiệm cận đứng là $x = 1$.', isCorrect: true, explanation: 'Mẫu số triệt tiêu tại $x = 1$.' },
          { key: 'c', text: 'Tọa độ giao điểm 2 tiệm cận là $I(1; 4)$.', isCorrect: true, explanation: 'Thay $x = 1$ vào tiệm cận xiên được $y = 1 + 3 = 4$.' },
          { key: 'd', text: 'Hàm số đồng biến trên toàn bộ tập xác định $\\mathbb{R} \\setminus \\{1\\}$.', isCorrect: false, explanation: 'Hàm số có cực trị nên không đơn điệu trên toàn tập xác định.' }
        ],
        fullExplanation: 'Khảo sát hàm phân thức bậc 2 trên bậc 1.'
      },
      {
        id: 'c1_ex_tf4',
        context: 'Một chiếc hộp hình hộp chữ nhật không nắp có thể tích $V = 500\\text{ cm}^3$, đáy là hình vuông cạnh $x\\text{ cm}$.',
        items: [
          { key: 'a', text: 'Chiều cao của hộp được tính theo công thức $h = \\frac{500}{x^2}$.', isCorrect: true, explanation: '$V = x^2 h = 500 \\implies h = 500/x^2$.' },
          { key: 'b', text: 'Diện tích toàn phần (không nắp) là $S(x) = x^2 + \\frac{2000}{x}$.', isCorrect: true, explanation: '$S = x^2 + 4xh = x^2 + 4x(500/x^2) = x^2 + 2000/x$.' },
          { key: 'c', text: 'Để tốn ít nguyên liệu nhất, cạnh đáy $x$ phải bằng $10\\text{ cm}$.', isCorrect: true, explanation: '$S\'(x) = 2x - 2000/x^2 = 0 \\iff 2x^3 = 2000 \\iff x^3 = 1000 \\iff x = 10$.' },
          { key: 'd', text: 'Diện tích bề mặt nhỏ nhất đạt được là $150\\text{ cm}^2$.', isCorrect: false, explanation: '$S(10) = 10^2 + 2000/10 = 100 + 200 = 300\\text{ cm}^2$, không phải 150.' }
        ],
        fullExplanation: 'Bài toán tối ưu hóa hình học ứng dụng đạo hàm tìm cực trị.'
      }
    ],
    part3: [
      {
        id: 'c1_ex_sa1',
        question: 'Tìm số điểm cực trị của hàm số $y = x^4 - 8x^2 + 10$.',
        correctAnswer: '3',
        acceptedAnswers: ['3'],
        explanation: '$y\' = 4x^3 - 16x = 4x(x^2 - 4) = 0 \\implies x = 0, x = \\pm 2$. Có 3 điểm cực trị.'
      },
      {
        id: 'c1_ex_sa2',
        question: 'Tính giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 5$ trên đoạn $[0; 2]$.',
        correctAnswer: '3',
        acceptedAnswers: ['3'],
        explanation: '$y\' = 3x^2 - 3 = 0 \\implies x = 1$. $y(0) = 5, y(1) = 3, y(2) = 7$. Vậy $\\min = 3$.'
      },
      {
        id: 'c1_ex_sa3',
        question: 'Cho hàm số $y = \\frac{2x - 1}{x + 3}$. Tổng hoành độ và tung độ của giao điểm hai đường tiệm cận bằng bao nhiêu?',
        correctAnswer: '-1',
        acceptedAnswers: ['-1'],
        explanation: 'TC đứng $x = -3$, TC ngang $y = 2$. Giao điểm là $I(-3; 2)$. Tổng hoành độ và tung độ là $-3 + 2 = -1$.'
      },
      {
        id: 'c1_ex_sa4',
        question: 'Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{3x^2 - 5x + 2}{x - 2}$ có hệ số góc bằng bao nhiêu?',
        correctAnswer: '3',
        acceptedAnswers: ['3'],
        explanation: 'Chia tử cho mẫu: $y = 3x + 1 + \\frac{4}{x - 2}$. Tiệm cận xiên là $y = 3x + 1$, hệ số góc bằng $3$.'
      },
      {
        id: 'c1_ex_sa5',
        question: 'Một chất điểm chuyển động theo phương trình $s(t) = -t^3 + 9t^2 + t$ ($t$ tính bằng giây, $s$ tính bằng mét). Tính vận tốc lớn nhất của chất điểm trong khoảng thời gian từ $t = 0$ đến $t = 5$.',
        correctAnswer: '28',
        acceptedAnswers: ['28', '28 m/s'],
        explanation: 'Vận tốc $v(t) = s\'(t) = -3t^2 + 18t + 1$. Đạt GTLN tại đỉnh parabol $t = -18 / (2 \\times (-3)) = 3$. $v(3) = -3(9) + 18(3) + 1 = -27 + 54 + 1 = 28\\text{ m/s}$.'
      },
      {
        id: 'c1_ex_sa6',
        question: 'Cho hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ có đồ thị đi qua gốc tọa độ $O(0;0)$ và có điểm uốn tại $I(1; 2)$. Biết đồ thị đạt cực trị tại $x = 0$. Tính giá trị của $a + b + c + d$.',
        correctAnswer: '2',
        acceptedAnswers: ['2'],
        explanation: 'Đồ thị đi qua điểm uốn $I(1; 2) \\implies y(1) = a + b + c + d = 2$.'
      }
    ]
  }
};
