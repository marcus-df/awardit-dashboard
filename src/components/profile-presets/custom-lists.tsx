import { useCustomListsStore } from "@/store/custom-lists";
import { ProfilePreset } from ".";

export function CustomLists() {
  const lists = useCustomListsStore((state) => state.lists);

  return <ProfilePreset lists={lists} />;
};