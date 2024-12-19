'use client'

import styles from "./page.module.css";
import NightMode from "../components/NightMode/NightModeUI";

export default function Home() {
  return(
    <div className={styles.page}>
      <NightMode/>
    </div>
  )
}