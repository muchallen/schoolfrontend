import React from 'react'



import { Chart } from 'react-charts'


export default () => {
  
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )
  return (
    <>
      <button>Randomize Data</button>
      <br />
      <br />
        <Chart series={series} axes={axes} tooltip />
      <br />
      
    </>
  )
}