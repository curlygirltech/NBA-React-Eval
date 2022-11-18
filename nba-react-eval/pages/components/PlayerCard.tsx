import React from 'react'


export default function PlayerCard(props:any) {
const {player,image} = props
  
  return (
    <>
      {player.map((player: { pid: React.Key | null | undefined; fn: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; ln: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => (
        <div key={player.pid}>
          <h2>
            Name: {player.fn} {player.ln}
          </h2>
        </div>
      ))}
      {image.map((data: { headshot: string | undefined; }) => (
        <div>
          <img src={data.headshot}/>
        </div>
      ))}
    </>
      
    
  )
      }