"use client";

import { useMemo } from "react";

const mockStats = {
  thisWeek: 0,
  inProgress: 3,
  total: 25,
  completion: 40,
};

const mockColumns = [
  {
    id: "recurring",
    title: "Recurring",
    color: "#818cf8",
    tasks: [],
  },
  {
    id: "backlog",
    title: "Backlog",
    color: "#f472b6",
    tasks: [
      { id: "1", title: "Record Claude Code…", owner: "YouTube", age: "1h" },
      { id: "2", title: "Flesh out $10k Mac Studio", owner: "OpsDesk", age: "4h" },
      { id: "3", title: "Pre-train a local model", owner: "Agents", age: "6h" },
      { id: "4", title: "Build activity feed for…", owner: "Agents", age: "16h" },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "#60a5fa",
    tasks: [
      { id: "5", title: "Build Council — Societ…", owner: "Council", age: "2h" },
      { id: "6", title: "Research Exo Labs du…", owner: "Mac Station", age: "3h" },
      { id: "7", title: "Build AI Employee Sc…", owner: "Mission Control", age: "7h" },
    ],
  },
];

const mockEvents = [];

export function TaskBoard() {
  return (
    <div className="min-h-screen bg-[#03050b] text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-300">Mission Control</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">Shared operations between M.K. & Hamouda</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-400">
              Every circle is a mission. The ring color shows phase, the pulse shows priority. Drag, update, or open a
              feed to sync without breaking focus.
            </p>
          </div>
          <div className="flex gap-6 text-center text-sm">
            <Stat label="This week" value={mockStats.thisWeek} />
            <Stat label="In progress" value={mockStats.inProgress} />
            <Stat label="Total" value={mockStats.total} />
            <Stat label="Completion" value={`${mockStats.completion}%`} />
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_2fr_2fr_1fr]">
          {mockColumns.map((column) => (
            <Column key={column.id} {...column} />
          ))}
          <LiveActivity events={mockEvents} />
        </main>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 px-4 py-3">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</span>
      <span className="mt-1 text-2xl font-semibold text-white">{value}</span>
    </div>
  );
}

function Column({ title, color, tasks }: { title: string; color: string; tasks: typeof mockColumns[number]["tasks"] }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/5 px-4 py-6">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
          <h2 className="text-white">{title}</h2>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{tasks.length} tasks</span>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {tasks.length === 0 && <p className="text-sm text-slate-500">Clean slate. Assign the next mission.</p>}
        {tasks.map((task) => (
          <TaskCircle key={task.id} title={task.title} owner={task.owner} age={task.age} color={color} />
        ))}
      </div>
    </section>
  );
}

function TaskCircle({ title, owner, age, color }: { title: string; owner: string; age: string; color: string }) {
  const ring = useMemo(() => ({
    background: `conic-gradient(${color} 0deg, ${color} 240deg, rgba(255,255,255,0.15) 240deg)`,
  }), [color]);

  return (
    <article className="relative flex items-center gap-4 rounded-3xl border border-white/5 bg-slate-900/60 px-4 py-3">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full opacity-50 blur-sm" style={ring} />
        <div className="absolute inset-2 rounded-full border border-white/10 bg-slate-950" />
        <div className="absolute inset-4 rounded-full bg-black/50 text-center text-xs uppercase tracking-widest text-slate-300 flex items-center justify-center">
          {owner}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-slate-500">Updated {age} ago</p>
      </div>
      <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 hover:border-white/30">
        Open
      </button>
    </article>
  );
}

function LiveActivity({ events }: { events: { id: string; text: string; age: string }[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Live activity</p>
          <h2 className="text-lg font-semibold text-white">Pulse of every agent</h2>
        </div>
        <span className="text-xs text-slate-500">Only mission-critical events stream here.</span>
      </header>
      <div className="mt-6 space-y-3 text-sm text-slate-400">
        {events.length === 0 && <p>No recent activity.</p>}
        {events.map((event) => (
          <p key={event.id} className="rounded-2xl border border-white/5 bg-white/5 px-3 py-2 text-xs text-slate-300">
            {event.text} • {event.age} ago
          </p>
        ))}
      </div>
    </section>
  );
}
