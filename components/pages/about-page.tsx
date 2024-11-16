import { Timeline } from "@/components/timeline/timeline";
import { timelineContent, timelineItems } from "@/config/items/timeline-items";

export default function AboutPageComponent() {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <div style={{ width: "100%", height: "1200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Timeline
            timelineContent={timelineContent}
            timelineItems={timelineItems}
          />
        </div>
      </div>
    </>
  );
}