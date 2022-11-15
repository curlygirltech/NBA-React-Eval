import React from 'react'


export default function PlayerCard(player:any,image:any) {

  
  return (
    <>
      {player.map(data => (
        <div key={data.pid}>
          <h2>
            Name: {data.fn} {data.ln}
          </h2>
        </div>
      ))}
      {image.map(data => (
        <div>
          <img src={data.headshot}/>
        </div>
      ))}
    </>
      
    
  )
      }