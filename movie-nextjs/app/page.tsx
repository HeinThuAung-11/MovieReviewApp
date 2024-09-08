import type { Metadata } from "next";
import { Welcome } from "./components/Welcome";

export default function IndexPage() {
  return <Welcome />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
