import { title } from "@/components/primitives";
import { Timeline } from "@/components/timeline/timeline";

export default function AboutPage() {
  return (
    <div style={{ width: "100%", height: "600px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "500px", height: "500px" }}>
        <Timeline />
      </div>
    </div>
  );
}
