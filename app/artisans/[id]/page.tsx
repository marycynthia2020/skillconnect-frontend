'use client'
import { useParams } from 'next/navigation'

const ArtisanProfile = () => {
    const {id} = useParams()
    
  return (
    <div>ArtisanProfile {id}</div>
  )
}

export default ArtisanProfile