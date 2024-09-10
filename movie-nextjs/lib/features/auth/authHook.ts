import { selectAuth } from "@/lib/features/auth/authSlice";
import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector(selectAuth);
  console.log(auth);
  return auth;
}
