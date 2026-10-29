import { useEffect } from "react";
import { useSearchParams } from "react-router"

function Room() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');

    useEffect(()=> {
        // logic to init user to the room
    },[name])

  return (
    <div>Room joined by: {name}</div>
  )
}

export default Room