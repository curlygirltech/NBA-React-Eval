import React from 'react'
import {useState, useEffect} from 'react'

export default function useFetch() {
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


  return { isLoading, teamJsonData, playerJsonData }
    
  
}
