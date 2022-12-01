import { useRecoilState, useRecoilValue } from "recoil";
import { isEditCard, editCardId } from "./atoms";
import useSWR from "swr";
import { fetchAPI } from "../lib/index";

export function useUserId() {
  return 1;
}

export const useIsEditCard = () => useRecoilState(isEditCard);
export const useEditCardId = () => useRecoilState(editCardId);

export function useUserReports() {
  const { data } = useSWR("/user", fetchAPI);
  return data;
}
