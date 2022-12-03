import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditCard, editCardId } from "../atoms";
import useSWR from "swr";
import { fetchAPI } from "../index";

export function useGetToken() {
  const [token, setToken] = useState({ email: null, token: null, set: false });
  useEffect(() => {
    const tokenStorage = localStorage.getItem("token") as string;
    setToken({ ...JSON.parse(tokenStorage), set: true });
  }, []);

  if (typeof window !== "undefined") {
    const listener = () => {
      const tokenStorage = localStorage.getItem("token") as string;
      setToken({ ...JSON.parse(tokenStorage), set: true });
      window.removeEventListener("token", listener, false);
    };
    window.addEventListener("token", listener);
  }

  return token;
}

export function removeToken() {
  localStorage.removeItem("token");
  window.dispatchEvent(new Event("token"));
  return true;
}

export function useUserId() {
  return 1;
}

export const useIsEditCard = () => useRecoilState(isEditCard);
export const useEditCardId = () => useRecoilState(editCardId);
export function useUserReports() {
  const { data } = useSWR("/me/reports", fetchAPI);

  return data;
}
