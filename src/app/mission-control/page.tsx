import type { Metadata } from "next";
import { TaskBoard } from "./task-board";

export const metadata: Metadata = {
  title: "Mission Control",
  description: "Plan, communicate, and execute with Hamouda in a shared control room.",
};

export default function MissionControlPage() {
  return <TaskBoard />;
}
