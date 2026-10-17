import { Chapter } from '../types/mathTypes';

export const chapter3Data: Chapter = {
  id: 3,
  slug: 'so-dac-trung-do-phan-tan',
  code: 'CHƯƠNG III',
  title: 'Số Đặc Trưng Đo Mức Độ Phân Tán',
  subtitle: 'Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn cho mẫu ghép nhóm',
  semester: 1,
  icon: '/assets/s1_trangmo_02.svg',
  color: 'amber',
  gradient: 'from-amber-500 to-orange-500',
  stats: {
    lessons: 3,
    mcCount: 15,
    tfCount: 5,
    saCount: 5,
  },
  theory: {
    title: 'Củng cố kiến thức trọng tâm Chương 3',
    summary: [
      '**Mẫu số liệu ghép nhóm**: Chia miền giá trị thành các khoảng nửa khoảng $[a_i; a_{i+1})$ với tần số $m_i$.',
      '**Giá trị đại diện**: $c_i = \\frac{a_i + a_{i+1}}{2}$.',
      '**Số trung bình**: $\\bar{x} = \\frac{\\sum m_i c_i}{n}$ với $n = \\sum m_i$.',
      '**Khoảng biến thiên**: $R = a_k - a_1$ (hiệu giữa đầu mút trên của nhóm cuối và đầu mút dưới của nhóm đầu).',
      '**Phương sai & Độ lệch chuẩn**: $s^2 = \\frac{1}{n} \\sum m_i (c_i - \\bar{x})^2 = \\frac{1}{n}\\sum m_i c_i^2 - \\bar{x}^2$, độ lệch chuẩn $s = \\sqrt{s^2}$.'
    ],
    keyFormulas: [
      {
        name: 'Công thức khoảng tứ phân vị',
        formula: '\\Delta_Q = Q_3 - Q_1',
        note: 'Đo mức độ phân tán của 50% số liệu chính giữa.'
      },
      {
        name: 'Phương sai mẫu ghép nhóm',
        formula: 's^2 = \\frac{1}{n}\\sum_{i=1}^k m_i c_i^2 - \\bar{x}^2',
        note: 'Công thức tính nhanh khi dùng máy tính cầm tay.'
      },
      {
        name: 'Độ lệch chuẩn',
        formula: 's = \\sqrt{s^2}',
        note: 'Cùng đơn vị đo với số liệu ban đầu.'
      }
    ],
    typicalMethods: [
      {
        name: 'Dạng 1: Xác định giá trị đại diện và tính số trung bình',
        steps: [
          'Lập bảng tính giá trị đại diện $c_i = (a_i + a_{i+1})/2$.',
          'Tính tổng $m_i c_i$ và chia cho cỡ mẫu $n$.'
        ]
      },
      {
        name: 'Dạng 2: Tính phương sai và độ lệch chuẩn',
        steps: [
          'Tính $c_i^2$ và tổng $\\sum m_i c_i^2$.',
          'Áp dụng $s^2 = \\frac{1}{n}\\sum m_i c_i^2 - \\bar{x}^2$, rồi lấy căn bậc hai ra $s$.'
        ]
      }
    ],
    pitfalls: [
      'Quên tính giá trị đại diện mà lấy đầu mút khoảng để tính.',
      'Nhầm lẫn giữa phương sai mẫu $s^2$ và độ lệch chuẩn $s$.'
    ]
  },
  mcBank: [
    {
      id: 'c3_mc_01',
      question: 'Giá trị đại diện của nhóm số liệu $[20; 30)$ là:',
      options: [
        { key: 'A', text: '$25$' },
        { key: 'B', text: '$20$' },
        { key: 'C', text: '$30$' },
        { key: 'D', text: '$50$' }
      ],
      correctKey: 'A',
      explanation: '$c = (20 + 30)/2 = 25$.'
    },
    {
      id: 'c3_mc_02',
      question: 'Khoảng biến thiên của mẫu số liệu ghép nhóm gồm các nhóm $[10; 20), [20; 30), [30; 40), [40; 50)$ là:',
      options: [
        { key: 'A', text: '$40$' },
        { key: 'B', text: '$50$' },
        { key: 'C', text: '$10$' },
        { key: 'D', text: '$30$' }
      ],
      correctKey: 'A',
      explanation: '$R = 50 - 10 = 40$.'
    },
    {
      id: 'c3_mc_03',
      question: 'Nếu phương sai của một mẫu số liệu bằng $16$ thì độ lệch chuẩn của mẫu số liệu đó bằng:',
      options: [
        { key: 'A', text: '$4$' },
        { key: 'B', text: '$256$' },
        { key: 'C', text: '$8$' },
        { key: 'D', text: '$2$' }
      ],
      correctKey: 'A',
      explanation: '$s = \\sqrt{s^2} = \\sqrt{16} = 4$.'
    },
    {
      id: 'c3_mc_04',
      question: 'Khoảng tứ phân vị $\\Delta_Q$ được tính theo công thức nào sau đây?',
      options: [
        { key: 'A', text: '$\\Delta_Q = Q_3 - Q_1$' },
        { key: 'B', text: '$\\Delta_Q = Q_3 - Q_2$' },
        { key: 'C', text: '$\\Delta_Q = Q_2 - Q_1$' },
        { key: 'D', text: '$\\Delta_Q = \\frac{Q_3 - Q_1}{2}$' }
      ],
      correctKey: 'A',
      explanation: 'Theo định nghĩa, khoảng tứ phân vị bằng $Q_3 - Q_1$.'
    },
    {
      id: 'c3_mc_05',
      question: 'Số đo nào sau đây KHÔNG PHẢI là số đặc trưng đo mức độ phân tán?',
      options: [
        { key: 'A', text: 'Số trung bình' },
        { key: 'B', text: 'Khoảng biến thiên' },
        { key: 'C', text: 'Độ lệch chuẩn' },
        { key: 'D', text: 'Phương sai' }
      ],
      correctKey: 'A',
      explanation: 'Số trung bình là số đặc trưng đo xu thế trung tâm.'
    },
    {
      id: 'c3_mc_06',
      question: 'Độ lệch chuẩn càng lớn chứng tỏ:',
      options: [
        { key: 'A', text: 'Mức độ phân tán của các số liệu xung quanh số trung bình càng lớn' },
        { key: 'B', text: 'Số trung bình càng lớn' },
        { key: 'C', text: 'Các số liệu càng tập trung quanh số trung bình' },
        { key: 'D', text: 'Cỡ mẫu càng lớn' }
      ],
      correctKey: 'A',
      explanation: 'Độ lệch chuẩn đo độ tản mát, càng lớn thì số liệu càng phân tán.'
    },
    {
      id: 'c3_mc_07',
      question: 'Cho bảng phân bố tần số ghép nhóm với cỡ mẫu $n = 40$. Nhóm $[40; 50)$ có tần số $12$. Tần suất của nhóm này là:',
      options: [
        { key: 'A', text: '$30\\%$' },
        { key: 'B', text: '$12\\%$' },
        { key: 'C', text: '$25\\%$' },
        { key: 'D', text: '$40\\%$' }
      ],
      correctKey: 'A',
      explanation: '$f = 12/40 = 0.3 = 30\\%$.'
    },
    {
      id: 'c3_mc_08',
      question: 'Nếu tất cả các giá trị trong mẫu số liệu đều được nhân thêm $2$ thì độ lệch chuẩn mới sẽ:',
      options: [
        { key: 'A', text: 'Tăng gấp $2$ lần' },
        { key: 'B', text: 'Tăng gấp $4$ lần' },
        { key: 'C', text: 'Không đổi' },
        { key: 'D', text: 'Tăng thêm $2$ đơn vị' }
      ],
      correctKey: 'A',
      explanation: '$s_{new} = |k| s_{old} = 2 s_{old}$.'
    },
    {
      id: 'c3_mc_09',
      question: 'Nếu cộng thêm $5$ vào mọi giá trị trong mẫu số liệu thì phương sai của mẫu mới sẽ:',
      options: [
        { key: 'A', text: 'Không thay đổi' },
        { key: 'B', text: 'Tăng thêm $5$' },
        { key: 'C', text: 'Tăng thêm $25$' },
        { key: 'D', text: 'Tăng gấp $5$ lần' }
      ],
      correctKey: 'A',
      explanation: 'Tịnh tiến một hằng số không làm thay đổi khoảng cách giữa các số liệu nên phương sai không đổi.'
    },
    {
      id: 'c3_mc_10',
      question: 'Để so sánh độ ổn định năng suất của 2 giống lúa có cùng năng suất trung bình, người ta dùng:',
      options: [
        { key: 'A', text: 'Độ lệch chuẩn hoặc phương sai' },
        { key: 'B', text: 'Số trung bình' },
        { key: 'C', text: 'Trung vị' },
        { key: 'D', text: 'Mốt' }
      ],
      correctKey: 'A',
      explanation: 'Độ lệch chuẩn càng nhỏ thì độ ổn định càng cao.'
    },
    {
      id: 'c3_mc_11',
      question: 'Biết $Q_1 = 15$ và $Q_3 = 28$. Khoảng tứ phân vị bằng:',
      options: [
        { key: 'A', text: '$13$' },
        { key: 'B', text: '$43$' },
        { key: 'C', text: '$6.5$' },
        { key: 'D', text: '$21.5$' }
      ],
      correctKey: 'A',
      explanation: '$\\Delta_Q = 28 - 15 = 13$.'
    },
    {
      id: 'c3_mc_12',
      question: 'Nhóm $[a; b)$ có độ dài khoảng bằng:',
      options: [
        { key: 'A', text: '$b - a$' },
        { key: 'B', text: '$a + b$' },
        { key: 'C', text: '$(a + b)/2$' },
        { key: 'D', text: '$b - a + 1$' }
      ],
      correctKey: 'A',
      explanation: 'Độ dài nhóm là $b - a$.'
    },
    {
      id: 'c3_mc_13',
      question: 'Mẫu số liệu ghép nhóm gồm 3 nhóm có giá trị đại diện lần lượt là $10, 20, 30$ với tần số tương ứng $2, 5, 3$. Số trung bình là:',
      options: [
        { key: 'A', text: '$21$' },
        { key: 'B', text: '$20$' },
        { key: 'C', text: '$22$' },
        { key: 'D', text: '$19$' }
      ],
      correctKey: 'A',
      explanation: '$\\bar{x} = (10 \\times 2 + 20 \\times 5 + 30 \\times 3) / 10 = (20 + 100 + 90)/10 = 210/10 = 21$.'
    },
    {
      id: 'c3_mc_14',
      question: 'Đơn vị của phương sai so với đơn vị của mẫu số liệu gốc là:',
      options: [
        { key: 'A', text: 'Bình phương đơn vị của mẫu gốc' },
        { key: 'B', text: 'Cùng đơn vị' },
        { key: 'C', text: 'Không có đơn vị' },
        { key: 'D', text: 'Căn bậc hai đơn vị' }
      ],
      correctKey: 'A',
      explanation: 'Do tính bằng bình phương độ lệch nên phương sai có đơn vị là bình phương.'
    },
    {
      id: 'c3_mc_15',
      question: 'Khi phân tích chất lượng sản phẩm của hai máy A và B, máy A có $s = 0.5$ và máy B có $s = 1.2$. Kết luận nào đúng?',
      options: [
        { key: 'A', text: 'Máy A sản xuất ổn định và đồng đều hơn máy B' },
        { key: 'B', text: 'Máy B sản xuất đồng đều hơn máy A' },
        { key: 'C', text: 'Hai máy có chất lượng tương đương' },
        { key: 'D', text: 'Máy B sản xuất ra nhiều sản phẩm hơn' }
      ],
      correctKey: 'A',
      explanation: 'Độ lệch chuẩn của máy A nhỏ hơn ($0.5 < 1.2$) nên mức độ phân tán thấp hơn, đồng đều hơn.'
    }
  ],
  tfBank: [
    {
      id: 'c3_tf_01',
      context: 'Khảo sát chiều cao của 50 học sinh lớp 12 thu được kết quả: $[150; 160)$ có 10 em; $[160; 170)$ có 25 em; $[170; 180)$ có 15 em.',
      items: [
        { key: 'a', text: 'Giá trị đại diện của nhóm $[160; 170)$ là $165\\text{ cm}$.', isCorrect: true, explanation: '$(160+170)/2 = 165$.' },
        { key: 'b', text: 'Khoảng biến thiên của mẫu số liệu là $30\\text{ cm}$.', isCorrect: true, explanation: '$180 - 150 = 30$.' },
        { key: 'c', text: 'Chiều cao trung bình của học sinh là $166\\text{ cm}$.', isCorrect: true, explanation: '$\\bar{x} = (155 \\times 10 + 165 \\times 25 + 175 \\times 15)/50 = (1550 + 4125 + 2625)/50 = 8300/50 = 166\\text{ cm}$.' },
        { key: 'd', text: 'Nhóm chứa trung vị là nhóm $[150; 160)$.', isCorrect: false, explanation: '$n/2 = 25$, thuộc nhóm $[160; 170)$.' }
      ],
      fullExplanation: 'Thống kê chiều cao học sinh lớp 12 với mẫu ghép nhóm.'
    },
    {
      id: 'c3_tf_02',
      context: 'Cho mẫu số liệu ghép nhóm có $s^2 = 25$ và $Q_1 = 12, Q_3 = 24$.',
      items: [
        { key: 'a', text: 'Độ lệch chuẩn của mẫu số liệu là $s = 5$.', isCorrect: true, explanation: '$\\sqrt{25} = 5$.' },
        { key: 'b', text: 'Khoảng tứ phân vị $\\Delta_Q = 12$.', isCorrect: true, explanation: '$24 - 12 = 12$.' },
        { key: 'c', text: 'Khoảng biến thiên luôn nhỏ hơn khoảng tứ phân vị.', isCorrect: false, explanation: 'Khoảng biến thiên $R$ luôn lớn hơn hoặc bằng $\\Delta_Q$.' },
        { key: 'd', text: 'Nếu các số liệu đều tăng $10\\%$ thì độ lệch chuẩn tăng $10\\%$.', isCorrect: true, explanation: '$s_{new} = 1.1 \\times 5 = 5.5$.' }
      ],
      fullExplanation: 'Mối liên hệ giữa các đại lượng đo độ phân tán.'
    },
    {
      id: 'c3_tf_03',
      context: 'Xét mẫu số liệu ghép nhóm gồm hai nhóm $[0; 10)$ có tần số $4$ và $[10; 20)$ có tần số $6$.',
      items: [
        { key: 'a', text: 'Cỡ mẫu là $n = 10$.', isCorrect: true, explanation: '$4 + 6 = 10$.' },
        { key: 'b', text: 'Số trung bình của mẫu là $\\bar{x} = 11$.', isCorrect: true, explanation: '$(5 \\times 4 + 15 \\times 6)/10 = (20 + 90)/10 = 11$.' },
        { key: 'c', text: 'Phương sai của mẫu bằng $24$.', isCorrect: true, explanation: '$s^2 = (4(5-11)^2 + 6(15-11)^2)/10 = (4(36) + 6(16))/10 = (144 + 96)/10 = 24$.' },
        { key: 'd', text: 'Độ lệch chuẩn bằng $6$.', isCorrect: false, explanation: '$s = \\sqrt{24} \\approx 4.899 \\ne 6$.' }
      ],
      fullExplanation: 'Tính toán trực tiếp phương sai và độ lệch chuẩn.'
    },
    {
      id: 'c3_tf_04',
      context: 'Bảng thống kê thời gian ôn thi môn Toán (giờ/tuần) của hai lớp 12A và 12B có cùng số học sinh.',
      items: [
        { key: 'a', text: 'Nếu hai lớp có cùng trung bình nhưng lớp 12A có độ lệch chuẩn nhỏ hơn thì thời gian học của lớp 12A đồng đều hơn.', isCorrect: true, explanation: 'Độ lệch chuẩn nhỏ hơn thể hiện độ đồng đều cao hơn.' },
        { key: 'b', text: 'Độ lệch chuẩn luôn là một số không âm.', isCorrect: true, explanation: 'Theo định nghĩa, $s = \\sqrt{s^2} \\ge 0$.' },
        { key: 'c', text: 'Nếu tất cả các bạn trong lớp đều học đúng 15 giờ thì độ lệch chuẩn bằng 0.', isCorrect: true, explanation: 'Mọi giá trị bằng nhau thì $s = 0$.' },
        { key: 'd', text: 'Khoảng tứ phân vị bị ảnh hưởng nặng nề bởi các giá trị ngoại lệ bất thường.', isCorrect: false, explanation: 'Khoảng tứ phân vị rất bền vững và ít bị ảnh hưởng bởi giá trị ngoại lệ.' }
      ],
      fullExplanation: 'Ý nghĩa thực tiễn và tính chất của các số đặc trưng.'
    },
    {
      id: 'c3_tf_05',
      context: 'Thời gian đi từ nhà đến trường của học sinh được ghi nhận: $[5; 15)$ có 8 bạn, $[15; 25)$ có 12 bạn.',
      items: [
        { key: 'a', text: 'Tổng số học sinh được khảo sát là 20.', isCorrect: true, explanation: '$8 + 12 = 20$.' },
        { key: 'b', text: 'Giá trị đại diện của nhóm $[5; 15)$ là 10 phút.', isCorrect: true, explanation: '$(5+15)/2 = 10$.' },
        { key: 'c', text: 'Thời gian trung bình đi đến trường là 16 phút.', isCorrect: true, explanation: '$(10 \\times 8 + 20 \\times 12)/20 = (80 + 240)/20 = 16$.' },
        { key: 'd', text: 'Khoảng biến thiên là 10 phút.', isCorrect: false, explanation: 'Khoảng biến thiên $R = 25 - 5 = 20$ phút.' }
      ],
      fullExplanation: 'Khảo sát thời gian đi học của học sinh.'
    }
  ],
  saBank: [
    {
      id: 'c3_sa_01',
      question: 'Tính giá trị đại diện của nhóm $[45; 65)$.',
      correctAnswer: '55',
      acceptedAnswers: ['55'],
      explanation: '$(45 + 65) / 2 = 55$.'
    },
    {
      id: 'c3_sa_02',
      question: 'Một mẫu số liệu có phương sai $s^2 = 81$. Tính độ lệch chuẩn $s$.',
      correctAnswer: '9',
      acceptedAnswers: ['9'],
      explanation: '$s = \\sqrt{81} = 9$.'
    },
    {
      id: 'c3_sa_03',
      question: 'Cho mẫu ghép nhóm gồm $[10; 20)$ tần số $2$ và $[20; 30)$ tần số $8$. Tính số trung bình $\\bar{x}$.',
      correctAnswer: '23',
      acceptedAnswers: ['23'],
      explanation: '$\\bar{x} = (15 \\times 2 + 25 \\times 8)/10 = (30 + 200)/10 = 23$.'
    },
    {
      id: 'c3_sa_04',
      question: 'Biết $Q_1 = 34.5$ và $Q_3 = 52.5$. Tính khoảng tứ phân vị $\\Delta_Q$.',
      correctAnswer: '18',
      acceptedAnswers: ['18'],
      explanation: '$\\Delta_Q = 52.5 - 34.5 = 18$.'
    },
    {
      id: 'c3_sa_05',
      question: 'Tìm khoảng biến thiên của mẫu ghép nhóm có nhóm đầu là $[0; 15)$ và nhóm cuối là $[60; 75)$.',
      correctAnswer: '75',
      acceptedAnswers: ['75'],
      explanation: '$R = 75 - 0 = 75$.'
    }
  ],
  chapterExam: {
    id: 'exam_ch3',
    title: 'Đề Ôn Tập Chương III - Số Đặc Trưng Đo Mức Độ Phân Tán',
    durationMinutes: 60,
    part1: [
      {
        id: 'c3_ex_mc1',
        question: 'Giá trị đại diện của nhóm $[10; 14)$ là:',
        options: [{ key: 'A', text: '$12$' }, { key: 'B', text: '$11$' }, { key: 'C', text: '$13$' }, { key: 'D', text: '$24$' }],
        correctKey: 'A',
        explanation: '$(10+14)/2 = 12$.'
      },
      {
        id: 'c3_ex_mc2',
        question: 'Mẫu gồm các nhóm $[1; 5), [5; 9), [9; 13)$. Khoảng biến thiên là:',
        options: [{ key: 'A', text: '$12$' }, { key: 'B', text: '$13$' }, { key: 'C', text: '$8$' }, { key: 'D', text: '$4$' }],
        correctKey: 'A',
        explanation: '$13 - 1 = 12$.'
      },
      {
        id: 'c3_ex_mc3',
        question: 'Nếu phương sai bằng $49$ thì độ lệch chuẩn bằng:',
        options: [{ key: 'A', text: '$7$' }, { key: 'B', text: '$14$' }, { key: 'C', text: '$2401$' }, { key: 'D', text: '$3.5$' }],
        correctKey: 'A',
        explanation: '$\\sqrt{49} = 7$.'
      },
      {
        id: 'c3_ex_mc4',
        question: 'Công thức khoảng tứ phân vị là:',
        options: [{ key: 'A', text: '$Q_3 - Q_1$' }, { key: 'B', text: '$Q_3 + Q_1$' }, { key: 'C', text: '$Q_2 - Q_1$' }, { key: 'D', text: '$Q_3 - Q_2$' }],
        correctKey: 'A',
        explanation: '$Q_3 - Q_1$.'
      },
      {
        id: 'c3_ex_mc5',
        question: 'Độ lệch chuẩn $s = 0$ khi và chỉ khi:',
        options: [{ key: 'A', text: 'Tất cả các số liệu trong mẫu bằng nhau' }, { key: 'B', text: 'Cỡ mẫu bằng 0' }, { key: 'C', text: 'Số trung bình bằng 0' }, { key: 'D', text: 'Phương sai bằng 1' }],
        correctKey: 'A',
        explanation: 'Khi tất cả giá trị đều bằng nhau thì không có sự phân tán.'
      },
      {
        id: 'c3_ex_mc6',
        question: 'Cho bảng nhóm $[0; 4)$ có tần số $3$, $[4; 8)$ có tần số $7$. Số trung bình là:',
        options: [{ key: 'A', text: '$4.8$' }, { key: 'B', text: '$5.0$' }, { key: 'C', text: '$4.2$' }, { key: 'D', text: '$5.6$' }],
        correctKey: 'A',
        explanation: '$(2 \\times 3 + 6 \\times 7)/10 = 48/10 = 4.8$.'
      },
      {
        id: 'c3_ex_mc7',
        question: 'Nhóm $[20; 30)$ có độ dài khoảng bằng:',
        options: [{ key: 'A', text: '$10$' }, { key: 'B', text: '$25$' }, { key: 'C', text: '$50$' }, { key: 'D', text: '$5$' }],
        correctKey: 'A',
        explanation: '$30 - 20 = 10$.'
      },
      {
        id: 'c3_ex_mc8',
        question: 'Nhân các số liệu với $3$ thì phương sai tăng gấp bao nhiêu lần?',
        options: [{ key: 'A', text: '$9$ lần' }, { key: 'B', text: '$3$ lần' }, { key: 'C', text: '$6$ lần' }, { key: 'D', text: '$27$ lần' }],
        correctKey: 'A',
        explanation: '$s^2_{new} = 3^2 s^2 = 9 s^2$.'
      },
      {
        id: 'c3_ex_mc9',
        question: 'Nhân các số liệu với $3$ thì độ lệch chuẩn tăng gấp bao nhiêu lần?',
        options: [{ key: 'A', text: '$3$ lần' }, { key: 'B', text: '$9$ lần' }, { key: 'C', text: '$1$ lần' }, { key: 'D', text: '$6$ lần' }],
        correctKey: 'A',
        explanation: '$s_{new} = 3s$.'
      },
      {
        id: 'c3_ex_mc10',
        question: 'Mẫu có $Q_1 = 20, Q_3 = 35$. Khoảng tứ phân vị bằng:',
        options: [{ key: 'A', text: '$15$' }, { key: 'B', text: '$55$' }, { key: 'C', text: '$7.5$' }, { key: 'D', text: '$27.5$' }],
        correctKey: 'A',
        explanation: '$35 - 20 = 15$.'
      },
      {
        id: 'c3_ex_mc11',
        question: 'Đại lượng nào dùng để đo mức độ rủi ro trong tài chính?',
        options: [{ key: 'A', text: 'Độ lệch chuẩn lợi nhuận' }, { key: 'B', text: 'Tỷ suất lợi nhuận trung bình' }, { key: 'C', text: 'Mốt' }, { key: 'D', text: 'Số lượng cổ phiếu' }],
        correctKey: 'A',
        explanation: 'Độ lệch chuẩn phản ánh mức độ biến động/rủi ro.'
      },
      {
        id: 'c3_ex_mc12',
        question: 'Cho mẫu ghép nhóm $[10; 20), [20; 30), [30; 40)$. Tần số tích lũy của nhóm 2 bằng tổng tần số của:',
        options: [{ key: 'A', text: 'Nhóm 1 và nhóm 2' }, { key: 'B', text: 'Nhóm 2 và nhóm 3' }, { key: 'C', text: 'Tất cả 3 nhóm' }, { key: 'D', text: 'Chỉ nhóm 2' }],
        correctKey: 'A',
        explanation: 'Tần số tích lũy cộng từ nhóm đầu đến nhóm đang xét.'
      }
    ],
    part2: [
      {
        id: 'c3_ex_tf1',
        context: 'Điểm số môn Toán của 40 học sinh được chia thành 4 nhóm $[4; 5.5), [5.5; 7), [7; 8.5), [8.5; 10]$ với tần số tương ứng $4, 16, 14, 6$.',
        items: [
          { key: 'a', text: 'Giá trị đại diện nhóm $[7; 8.5)$ là $7.75$.', isCorrect: true, explanation: '$(7+8.5)/2 = 7.75$.' },
          { key: 'b', text: 'Số học sinh đạt từ $7$ điểm trở lên là $20$.', isCorrect: true, explanation: '$14 + 6 = 20$.' },
          { key: 'c', text: 'Khoảng biến thiên là $6$.', isCorrect: true, explanation: '$10 - 4 = 6$.' },
          { key: 'd', text: 'Tỷ lệ học sinh đạt điểm dưới $5.5$ là $10\\%$.', isCorrect: true, explanation: '$4/40 = 0.1 = 10\\%$.' }
        ],
        fullExplanation: 'Khảo sát điểm kiểm tra của học sinh.'
      },
      {
        id: 'c3_ex_tf2',
        context: 'Cho mẫu có $s^2 = 100$ và số trung bình bằng $50$.',
        items: [
          { key: 'a', text: 'Độ lệch chuẩn là $10$.', isCorrect: true, explanation: '$\\sqrt{100} = 10$.' },
          { key: 'b', text: 'Hệ số biến thiên $CV = \\frac{s}{\\bar{x}} = 20\\%$.', isCorrect: true, explanation: '$10/50 = 0.2 = 20\\%$.' },
          { key: 'c', text: 'Nếu mọi số liệu cộng thêm 10 thì độ lệch chuẩn thành 20.', isCorrect: false, explanation: 'Cộng hằng số độ lệch chuẩn không đổi.' },
          { key: 'd', text: 'Nếu mọi số liệu nhân đôi thì phương sai bằng 400.', isCorrect: true, explanation: '$2^2 \\times 100 = 400$.' }
        ],
        fullExplanation: 'Tính chất của phương sai và độ lệch chuẩn.'
      },
      {
        id: 'c3_ex_tf3',
        context: 'Hai vận động viên bắn súng A và B có điểm trung bình bằng nhau $\\bar{x} = 9.2$. Độ lệch chuẩn điểm của A là $0.3$, của B là $0.7$.',
        items: [
          { key: 'a', text: 'Vận động viên A bắn ổn định hơn vận động viên B.', isCorrect: true, explanation: '$s_A < s_B$.' },
          { key: 'b', text: 'Phương sai của A là $0.09$.', isCorrect: true, explanation: '$0.3^2 = 0.09$.' },
          { key: 'c', text: 'Phương sai của B là $0.49$.', isCorrect: true, explanation: '$0.7^2 = 0.49$.' },
          { key: 'd', text: 'Vận động viên B chắc chắn có tổng điểm cao hơn A.', isCorrect: false, explanation: 'Hai bạn có trung bình bằng nhau nên tổng điểm bằng nhau.' }
        ],
        fullExplanation: 'Ứng dụng độ phân tán so sánh phong độ thể thao.'
      },
      {
        id: 'c3_ex_tf4',
        context: 'Xét số liệu ghép nhóm về doanh số bán hàng.',
        items: [
          { key: 'a', text: 'Khoảng tứ phân vị chứa $50\\%$ số liệu trung tâm.', isCorrect: true, explanation: 'Từ $Q_1$ đến $Q_3$.' },
          { key: 'b', text: 'Khoảng biến thiên $R$ luôn lớn hơn hoặc bằng $\\Delta_Q$.', isCorrect: true, explanation: '$R = x_{\\max} - x_{\\min} \\ge Q_3 - Q_1$.' },
          { key: 'c', text: 'Giá trị ngoại lệ nằm ngoài $[Q_1 - 1.5\\Delta_Q; Q_3 + 1.5\\Delta_Q]$.', isCorrect: true, explanation: 'Quy tắc hàng rào Tukey.' },
          { key: 'd', text: 'Khoảng biến thiên luôn tốt hơn phương sai trong mọi trường hợp.', isCorrect: false, explanation: 'Khoảng biến thiên chỉ dùng 2 giá trị đầu mút nên rất nhạy cảm với ngoại lệ.' }
        ],
        fullExplanation: 'Lý thuyết số đặc trưng đo độ phân tán.'
      }
    ],
    part3: [
      {
        id: 'c3_ex_sa1',
        question: 'Tính giá trị đại diện của nhóm $[30; 50)$.',
        correctAnswer: '40',
        acceptedAnswers: ['40'],
        explanation: '$(30+50)/2 = 40$.'
      },
      {
        id: 'c3_ex_sa2',
        question: 'Một mẫu số liệu có độ lệch chuẩn $s = 6$. Tính phương sai $s^2$.',
        correctAnswer: '36',
        acceptedAnswers: ['36'],
        explanation: '$6^2 = 36$.'
      },
      {
        id: 'c3_ex_sa3',
        question: 'Tính khoảng biến thiên của mẫu ghép nhóm từ $[15; 25)$ đến $[65; 85)$.',
        correctAnswer: '70',
        acceptedAnswers: ['70'],
        explanation: '$85 - 15 = 70$.'
      },
      {
        id: 'c3_ex_sa4',
        question: 'Biết $Q_1 = 40$ và $Q_3 = 65$. Tính khoảng tứ phân vị.',
        correctAnswer: '25',
        acceptedAnswers: ['25'],
        explanation: '$65 - 40 = 25$.'
      },
      {
        id: 'c3_ex_sa5',
        question: 'Cho 2 nhóm: $[0; 10)$ tần số 5 và $[10; 20)$ tần số 5. Tính số trung bình.',
        correctAnswer: '10',
        acceptedAnswers: ['10'],
        explanation: '$(5 \\times 5 + 15 \\times 5)/10 = 10$.'
      },
      {
        id: 'c3_ex_sa6',
        question: 'Nếu tất cả dữ liệu nhân với $4$ thì độ lệch chuẩn tăng gấp bao nhiêu lần?',
        correctAnswer: '4',
        acceptedAnswers: ['4'],
        explanation: 'Tăng gấp $4$ lần.'
      }
    ]
  }
};
