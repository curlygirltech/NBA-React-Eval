import React from 'react'


export default function PlayerCard(props:any) {
const {player} = props
  
  return (
    <>
      <div className='playerCard'>
      {player.map((player: { pid: React.Key | null | undefined; fn: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; ln: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; headshot: string | undefined }) => (
        <div key={player.pid}>
          <h2>
           <img src={player.headshot} />
            Name: {player.fn} {player.ln}
          </h2>
        </div>
      ))}
      </div>
    </>
      
    
  )
      }