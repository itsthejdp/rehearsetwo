import React, { useMemo } from 'react'
import Card from '../components/Card'
import { Wrapper } from '@googlemaps/react-wrapper';

export default function MapAPI() {
    let map;

    async function initMap() {
        const { Map } = await google.maps.importlibrary("maps")
    }
  return (
    <div>
        <Card>
            fetch('')
        </Card>
    </div>
  )
}
