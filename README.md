# 🛍️ Xalvion Commerce

**Xalvion Commerce** is a modern **eCommerce SaaS platform** built with **Next.js**, **Node.js**, and **Turborepo**.  
It includes a **storefront**, **admin dashboard**, and **backend API**, all managed inside a single **monorepo** for seamless scalability, shared code, and developer efficiency.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend (Storefront)** | [Next.js 15](https://nextjs.org/) + React + TypeScript |
| **Admin Dashboard** | Next.js + Tailwind CSS + ShadCN UI |
| **Backend API** | Node.js + Express + MongoDB |
| **Monorepo Management** | [Turborepo](https://turbo.build/) + PNPM |
| **Language** | TypeScript / JavaScript |
| **Package Sharing** | Internal packages via `/packages` |
| **Styling** | Tailwind CSS, CSS Modules |
| **Environment Management** | `.env` per app |

---

## 📁 Folder Structure
xalvion-commerce/
│
├── apps/
│ ├── web/ # 🛒 Storefront (Next.js)
│ ├── admin/ # ⚙️ Admin Dashboard (Next.js)
│ └── api/ # 🔗 Backend API (Node.js / Express)
│
├── packages/
│ ├── ui/ # 🎨 Shared UI components
│ ├── utils/ # 🧠 Shared logic and helpers
│ └── config/ # ⚙️ Shared configuration/constants
│
├── turbo.json # Turborepo pipeline configuration
├── pnpm-workspace.yaml # PNPM workspace setup
├── package.json # Root scripts and dependencies
├── .gitignore # Ignore node_modules, .env, etc.
└── README.md # You're here!



---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/xalvion-commerce.git
cd xalvion-commerce
pnpm install

Create .env files
apps/
├── web/.env
├── admin/.env
└── api/.env
Example for apps/api/.env:
PORT=5000
MONGO_URI=mongodb+srv://...
STRIPE_SECRET_KEY=sk_test_...
JWT_SECRET=your_secret


Development

pnpm --filter ./apps/web dev
pnpm --filter ./apps/admin dev
pnpm --filter ./apps/backend dev

pnpm dev:web
pnpm dev:admin
pnpm dev:api



Turborepo will run:

apps/web → Storefront (Next.js)
apps/admin → Admin Dashboard (Next.js)
apps/api → Backend API (Express)

You’ll see URLs like:
🌐 Storefront → http://localhost:3001
🛠️ Admin Dashboard → http://localhost:3000
🔌 API Server → http://localhost:5000


🏗️ Build
pnpm build


Or build individually:
cd apps/web && pnpm build
cd apps/admin && pnpm build
cd apps/api && pnpm build

🔍 Linting & Formatting
pnpm lint


🧩 Monorepo Commands Overview
| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `pnpm install`    | Install dependencies across all apps  |
| `pnpm dev`        | Run all apps in parallel              |
| `pnpm build`      | Build all apps                        |
| `pnpm lint`       | Run lint checks                       |
| `npx turbo prune` | Optimize repo for CI/CD or deployment |


📄 License
This project is licensed under the MIT License — free for personal and commercial use.

💬 Contributing
We welcome contributions!
Please open an issue or submit a PR for bugs, improvements, or new features.


✨ Author

Hammad Sandhu
Founder & Developer of Xalvion Commerce

📧 Email: [your-email@example.com]
🌐 Website: https://xalvion.com
🐙 GitHub: @hammadsandhuu

