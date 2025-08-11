## 🐼 Panda Dashboard

Next.js web application (Pages Router) built for the Panda Hub technical test.
Dashboard with an interactive Kanban (drag-and-drop), responsive layout (Sidebar + Navbar), and reusable UI components.

## 📋 Features

- **Layout**: `Sidebar` + `Navbar`, responsive content area, mobile drawer.
- **Kanban**: drag-and-drop across columns and in-column reordering via `@hello-pangea/dnd`.
- **Filters**: built-in status filter (`all`, `todo`, `in-progress`, `done`).
- **State persistence**: in-memory store with Zustand; state survives navigation.
- **Data**: local seeds in `src/lib/data.ts` and hydration from DummyJSON (`src/lib/dummyjson.ts`).
- **Projects**: routes `/mobile-app`, `/website-redesign`, `/design-system`, `/wireframes` (linked in the sidebar).
- **Accessibility**: semantic structure and relevant ARIA attributes.

## 🛠 Tech Stack

- **Framework**: Next.js 15
- **UI**: React 19 + TailwindCSS 4
- **Language**: TypeScript
- **State**: Zustand
- **Drag & Drop**: `@hello-pangea/dnd`
- **HTTP**: axios
- **Icons**: lucide-react
- **Lint**: ESLint + Next.js config

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (20 recommended)
- npm (or pnpm/yarn/bun)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd panda-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open the app

- Go to `http://localhost:3000` (redirects to `/mobile-app`).

### Useful scripts

```bash
npm run dev    # Development
npm run build  # Production build
npm run start  # Start server (after build)
npm run lint   # Lint the project
```

## 📁 Project Structure

```
src/
├── dashboard/
│   ├── KanbanBoard.tsx     # Board orchestration + drag-and-drop
│   ├── KanbanColumn.tsx    # Column (Droppable)
│   └── KanbanCard.tsx      # Task card (Draggable)
├── layout/
│   ├── Layout.tsx          # App shell (Sidebar + Navbar + main)
│   ├── Navbar.tsx          # Top navigation bar
│   └── Sidebar.tsx         # Side navigation
├── lib/
│   ├── data.ts             # Initial mock data
│   ├── dummyjson.ts        # Hydration from the DummyJSON API
│   ├── kanbanStore.ts      # Zustand store (Kanban state)
│   ├── projects.ts         # Project labels and helpers
│   └── types.ts            # Types/Interfaces (Task, Column, BoardData, ...)
├── pages/
│   ├── _app.tsx            # Next.js entry (Pages Router)
│   ├── index.tsx           # Redirect to `/mobile-app`
│   └── [project].tsx       # Dynamic project page
├── shared/
│   ├── Avatar.tsx          # Avatar
│   ├── AvatarGroup.tsx     # Overlapping avatars group
│   ├── Card.tsx            # Generic card component
│   ├── InviteButton.tsx    # Invite button
│   └── SearchBar.tsx       # Search input
└── styles/
    └── globals.css         # Tailwind global styles
```

Architecture notes:

- **Absolute imports** from `src/` (configured via `tsconfig.json`).
- **TailwindCSS** for all styling (no inline styles / CSS Modules).
- **Functional components** in TypeScript, small and single-responsibility.

## 🎯 Kanban Details

- **Types**: `src/lib/types.ts` (`BoardData`, `Column`, `Task`, etc.).
- **Data**: `initialBoardData` in `src/lib/data.ts`.
- **Store**: `src/lib/kanbanStore.ts` exposes:
  - `moveTask(taskId, fromColumnId, toColumnId, toIndex)`
  - `reorderTask(columnId, fromIndex, toIndex)`
  - `loadFromDummyJSON()` (remote hydration, with participants)
  - `switchProject(projectKey)` and `statusFilter` (+ `setStatusFilter`)
- **Drag & Drop**: integrated in `src/dashboard/KanbanBoard.tsx` using `@hello-pangea/dnd`.

## 🧭 Project Navigation

- Directly access: `/mobile-app`, `/website-redesign`, `/design-system`, `/wireframes`.
- The sidebar contains links and the Kanban state persists between pages.

## 🧩 Practices

- **Readability**: descriptive names, simple components, clear responsibilities.
- **Performance**: targeted imports, avoid unnecessary re-renders.
- **Design**: matches the design (spacing/typography/colors), responsive.

---

Built with ❤️ for Panda Hub.
