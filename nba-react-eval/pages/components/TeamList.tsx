import React from 'react'

export default function TeamList(props: any) {
  const {team} = props
  return (
  
      <div>
        {team.map((team: { tid: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; ln: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => (
        <div key={team.tid}>
          <h2>
            Name: {team.name} 
          </h2>
        </div>
      ))}
      </div>
    
  )
}

