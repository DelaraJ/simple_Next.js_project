# Next.js Authentication & Dashboard

یک پروژه ساده احراز هویت با Next.js شامل صفحه ورود و داشبورد.

## 🚀 راه‌اندازی سریع

```bash
npm install
npm run dev
```

پروژه در `http://localhost:3000` اجرا می‌شود.

## 🛠️ تکنولوژی‌ها

- Next.js 14+ (App Router)
- TypeScript
- SCSS Modules
- Random User API

## 📁 ساختار پروژه

```
src/
├── app/
│   ├── auth/           # صفحه ورود
│   └── dashboard/      # صفحه داشبورد
├── components/
│   ├── Button/         # کامپوننت دکمه
│   └── Input/          # کامپوننت ورودی
└── context/
    └── AuthContext.tsx # مدیریت احراز هویت
```

## ✨ ویژگی‌ها

- 🔐 احراز هویت با Random User API
- 📱 طراحی Responsive
- 🛡️ اعتبارسنجی شماره تلفن ایران
- 💾 ذخیره در localStorage
- 🔄 محافظت از مسیرها

## 📄 صفحات

- `/auth` - فرم ورود با اعتبارسنجی
- `/dashboard` - داشبورد محافظت شده

## 🎨 استایل‌دهی

استفاده از SCSS Modules با Nesting و طراحی responsive.

## 🔧 Commands

```bash
npm run dev      # اجرا در حالت توسعه
npm run build    # ساخت production
npm run start    # اجرای production
```