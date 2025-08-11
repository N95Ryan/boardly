## 🐼 Panda Dashboard

Web application built for the Panda Hub technical test.
Next.js dashboard with an interactive Kanban (drag-and-drop), responsive layout (Sidebar + Navbar), and simple, reusable UI components.

## 📋 Features

- **Layout**: Sidebar, top navbar, and main content area
- **Kanban**: Drag-and-drop across columns and in-column reordering
- **State persistence**: Kanban state survives route changes via Zustand
- **Mock data**: Initial dataset in `src/lib/data.ts`
- **Stats component**: Simple metric cards in `src/dashboard/Stats.tsx`
- **Pixel-perfect & Responsive**: Matches Figma design and adapts to various screen sizes
- **Accessibility**: Semantic elements and ARIA attributes where needed

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15
- **UI**: [React](https://react.dev/) 19 + [TailwindCSS](https://tailwindcss.com/) 4
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Drag & Drop**: [`@hello-pangea/dnd`](https://github.com/hello-pangea/dnd)
- **Linting**: ESLint + Next.js config

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (20+ recommended)
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
   - Go to `http://localhost:3000`

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
│   ├── KanbanBoard.tsx     # Main board + drag-and-drop orchestration
│   ├── KanbanColumn.tsx    # Kanban column (Droppable)
│   ├── KanbanCard.tsx      # Task card (Draggable)
│   └── Stats.tsx           # Simple stats cards
├── layout/
│   ├── Layout.tsx          # App shell (Sidebar + Navbar + main)
│   ├── Navbar.tsx          # Top navigation bar
│   └── Sidebar.tsx         # Side navigation
├── lib/
│   ├── data.ts             # Initial Kanban data (mock)
│   ├── kanbanStore.ts      # Zustand store (in-memory state)
│   └── types.ts            # Interfaces/Types for the Kanban
├── pages/
│   ├── _app.tsx            # Next.js entry (Pages Router)
│   ├── index.tsx           # Home (Dashboard + Kanban)
│   ├── projects.tsx        # Projects page (example)
│   └── settings.tsx        # Settings page (example)
├── shared/
│   ├── Button.tsx          # Reusable button
│   └── Card.tsx            # Generic card component
└── styles/
    └── globals.css         # Tailwind global styles
```

Architecture notes:

- **Absolute imports** from `src/` (configured via `tsconfig.json`).
- **TailwindCSS** for all styling (no inline styles, no CSS Modules).
- **Functional components** in TypeScript, small and single-responsibility.

## 🎯 Kanban Details

- **Types**: Defined in `src/lib/types.ts` (e.g., `BoardData`, `Column`, `Task`).
- **Data**: `src/lib/data.ts` exports `initialBoardData` for initial render.
- **Store**: `src/lib/kanbanStore.ts` manages state via Zustand and exposes:
  - `moveTask(taskId, fromColumnId, toColumnId, toIndex)` to move a task across columns
  - `reorderTask(columnId, fromIndex, toIndex)` to reorder within a column
- **Drag & Drop**: `src/dashboard/KanbanBoard.tsx` wires `onDragEnd` to call `moveTask` or `reorderTask` via `@hello-pangea/dnd`.
- **Accessibility**: The board is rendered inside `<section aria-label="Kanban Board">` with semantic structure.

## ✅ Practices Followed

- **Performance**: Targeted imports, simple components; minimal global state.
- **Readability**: Descriptive names, clear separation of responsibilities.
- **Design**: Tailwind-aligned; responsive; spacing/typography per Figma.

---

Built with ❤️ for Panda Hub.
