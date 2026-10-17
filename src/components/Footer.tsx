import React from 'react';
import { BookOpen, Award, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 border-t border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-900 text-slate-300" id="thang-diem">
      {/* Visual Asset: s9_tongket_01.png (Background Footer 16:9) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/assets/s9_tongket_01.png"
          alt="Đồ thị hàm số và họa tiết toán học nền footer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Slide 9: Đồng bộ quy tắc & trải nghiệm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Toán 12 · Chuẩn GDPT 2025
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Website học tập môn Toán 12 toàn diện theo chương trình Giáo dục Phổ thông mới. Đồng bộ toàn bộ các quy tắc thi trắc nghiệm, củng cố lý thuyết, bài tập đúng/sai và bộ đề khảo sát 60 phút.
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Cập nhật ma trận cấu trúc đề thi tốt nghiệp THPT từ năm 2025</span>
            </div>
          </div>

          {/* Ministry Scoring Table Card (Quy tắc chấm mới) */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Cấu Trúc &amp; Thang Điểm Đề Thi Chuẩn Bộ GD&amp;ĐT 2025
              </h4>
              <span className="text-xs font-mono text-indigo-400 font-semibold">
                60 Phút · Thang 10.0
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60">
                <div className="font-bold text-white mb-1">Phần I: Trắc nghiệm</div>
                <div className="text-slate-400 leading-relaxed">
                  12 câu 4 lựa chọn (chọn 1 phương án đúng). Mỗi câu đúng: <strong>0.25 điểm</strong>.
                </div>
                <div className="text-indigo-400 font-bold mt-2">Tối đa: 3.0 điểm</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60">
                <div className="font-bold text-white mb-1">Phần II: Đúng / Sai</div>
                <div className="text-slate-400 leading-relaxed">
                  4 câu (mỗi câu 4 ý a,b,c,d). Đúng 1 ý: 0.1đ; 2 ý: 0.25đ; 3 ý: 0.5đ; 4 ý: <strong>1.0 điểm</strong>.
                </div>
                <div className="text-emerald-400 font-bold mt-2">Tối đa: 4.0 điểm</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60">
                <div className="font-bold text-white mb-1">Phần III: Trả lời ngắn</div>
                <div className="text-slate-400 leading-relaxed">
                  6 câu điền số kết quả (không chọn đáp án có sẵn). Mỗi câu đúng: <strong>0.5 điểm</strong>.
                </div>
                <div className="text-purple-400 font-bold mt-2">Tối đa: 3.0 điểm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2025 - 2026 Website Học Tập Toán 12. Triển khai theo Blueprint 9 Slides &amp; Bảng Quy Hoạch Hình Ảnh.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Sơ đồ tư duy KaTeX</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Ngân hàng câu hỏi đổi mới</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">10 Đề thi chuẩn 60P</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
