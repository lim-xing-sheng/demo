import NotePicker from "@/components/NotePicker";
import Notes from "@/components/Notes";

export default function Home() {
  return (
    <div className="bg-slate-950 w-full min-h-screen pb-10">
      <NotePicker />
      <Notes />
    </div>
  );
}
