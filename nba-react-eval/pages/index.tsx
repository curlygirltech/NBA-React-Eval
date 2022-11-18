import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import LoadingScreen from "./components/LoadingScreen";
import PlayerCard from "./components/PlayerCard";
import TeamList from "./components/TeamList";
import useFetch from "./components/useFetch";

export default function Home() {
 const {isLoading, teamJsonData, playerJsonData} = useFetch()

  return (
    <div className={styles.container}>
      {!isLoading ? (
        <>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <div>
            <PlayerCard
              player={playerJsonData}/>
          </div>
          <TeamList team={teamJsonData} />
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
