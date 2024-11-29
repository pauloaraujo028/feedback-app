import { ModeToggle } from "@/components/mode-toggle";
import Widget from "@/components/widget";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <ModeToggle />

      <Widget />
    </main>
  );
}
