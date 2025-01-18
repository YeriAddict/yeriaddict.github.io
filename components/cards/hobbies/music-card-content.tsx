import { Spacer } from "@heroui/spacer";

export const MusicCardContent = {
  title: "🎼 Music",
  cardBody: (
    <>
      <div className="flex flex-col">
        <p>🎵 I am addicted to music!</p>
        <Spacer y={6} />
        <p>
          🎹 I probably spend 80% of my day listening to music. If my ears never
          got tired, I would even listen while sleeping.
        </p>
        <Spacer y={6} />
        <p>
          🎻 I enjoy all genres of music, whether it is French chansons,
          mainstream pop, or even Russian rap. Always happy to discover!
        </p>
        <Spacer y={6} />
        <p>🎶 K-pop is my favorite, though!</p>
      </div>
    </>
  ),
  modalBody: (
    <>
      <p className="text-md font-bold">My current favorite songs:</p>
      <div className="flex flex-row gap-4 justify-between">
        <iframe
          className="w-1/2"
          height={400}
          src="https://www.youtube.com/embed/X7hMrLuWgBk"
          title="colouring"
        />
        <iframe
          className="w-1/2"
          height={400}
          src="https://www.youtube.com/embed/pCsyyQoyEDU"
          title="last_drop"
        />
      </div>
      <p className="text-md font-bold">Honorable mention: Red Velvet 🙂</p>
    </>
  ),
};
