import React from "react";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";
import { useOthers } from "@/liveblocks.config";

const LiveCursors = () => {
  const others = useOthers();

  return (
    <>
      {others.map(({ connectionId, presence }) => {
        // here we are mapping on all other people in the room
        //@ts-ignore
        if (presence == null || !presence?.cursor) return null;

        return (
          <Cursor
            key={connectionId}
            color={COLORS[Number(connectionId) % COLORS.length]}
            //@ts-ignore
            x={presence.cursor.x}
            //@ts-ignore
            y={presence.cursor.y}
            //@ts-ignore
            message={presence.message}
          />
        );
      })}
    </>
  );
};

export default LiveCursors;
