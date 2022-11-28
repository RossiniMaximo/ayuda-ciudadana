import { useRecoilState, useRecoilValue } from "recoil";
import { isEditCard, editCardId } from "./atoms";

export function useUserId() {
  return 1;
}

export const useIsEditCard = () => useRecoilState(isEditCard);
export const useEditCardId = () => useRecoilState(editCardId);
