import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import Example from "@/components/Example/Example";

export default function Home() {
  return(
    <div className={styles.page}>
      <Intro/>
      <Example/>
    </div>
  )
}