import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import LoadingScreen from "./components/LoadingScreen";
import PlayerCard from "./components/PlayerCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [teamJsonData, setTeamJsonData] = useState<any>(null);
  const [playerJsonData, setPlayerJsonData] = useState<any>([]);

  useEffect(() => {
    //fetch teams
    async function fetchJsonData(): Promise<any> {
      const response = await fetch(`/api/teams`);
      const teamData = await response.json();
      setTeamJsonData(teamData);
      console.log("LOOK HERE", { teamData });

      //fetch players
      const playerresponse = await fetch('http://localhost:3000/api/players');
      const playerData = await playerresponse.json();
      setPlayerJsonData(playerData);
      console.log("Player data HERE", { playerData });

      setIsLoading(false);
    }
    fetchJsonData();
  }, []);

  return (
    <div className={styles.container}>
      {!isLoading ? (
        <>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <div>
            <PlayerCard
              player={playerJsonData.fn}
            image={playerJsonData.headshot} />
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
