import { Timeline } from "@/components/timeline/timeline";
import { timelineContent, timelineItems } from "@/config/items/timeline-items";

export default function AboutPageComponent() {
  return (
    <>
      <div style={{ width: "100%", height: "1200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Timeline 
          timelineContent={timelineContent}
          timelineItems={timelineItems}
        />
      </div>
    </>
  );
}