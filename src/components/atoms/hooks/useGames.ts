import { useState } from "react";
// import apiClient from "../helpers/api-client";
import gamesList from "../helpers/apiData";
// import { CanceledError } from "axios";



export interface Game {
    id: number;
    title: string;
    thumbnail: string;
    platform: string;
    genre: string;
  }

  
  // interface FetchGameResponse {
  //   count: number;
  //   results: Game[];
  // }
  
const useGames = () => {
    const [games, setGames] = useState<Game[]>(gamesList);
    const [error, setError] = useState("");
  
    // useEffect(() => {
    //     const controller = new AbortController();

    //   apiClient
    //     .get<FetchGameResponse>("/games", { signal: controller.signal })
    //     .then((res) => setGames(res.data.results))
    //     .catch((err) => {
    //         if (err instanceof CanceledError) return;
    //         setError(err.message)
    //      });

    // return () => controller.abort();
    // }, []);

    return { games, error };
}

export default useGames;