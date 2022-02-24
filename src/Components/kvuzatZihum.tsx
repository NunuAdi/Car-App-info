import React, { useEffect, useState } from 'react'

interface IProps {
  carNumber:number
}

export default function KvuzatZihum(props: IProps) {
  const [carPNumber,setCarPNumber] = useState(0);
  useEffect(() =>
  {
      setCarPNumber(props.carNumber);      
  },[]);

  return (
    <div className="flex flex-row justify-center items-center gap-2 my-5 pollution">

      <div className="font-bold pol-headers">זיהום מרבי</div>
      <div className={`bg-red-600 w-6 p-1 ${carPNumber == 15 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>15</div>
      <div className={`bg-red-600 w-6 p-1 ${carPNumber == 14 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>14</div>
      <div className={`bg-orange-600 w-6 p-1 ${carPNumber == 13 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>13</div>
      <div className={`bg-orange-600 w-6 p-1 ${carPNumber == 12 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>12</div>
      <div className={`bg-yellow-600 w-6 p-1 ${carPNumber == 11 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>11</div>
      <div className={`bg-yellow-600 w-6 p-1 ${carPNumber == 10 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>10</div>
      <div className={`bg-yellow-500 w-6 p-1 ${carPNumber == 9 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>9</div>
      <div className={`bg-yellow-500 w-6 p-1 ${carPNumber == 8 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>8</div>
      <div className={`bg-green-600 w-6 p-1 ${carPNumber == 7 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>7</div>
      <div className={`bg-green-600 w-6 p-1 ${carPNumber == 6 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>6</div>
      <div className={`bg-green-700 w-6 p-1 ${carPNumber == 5 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>5</div>
      <div className={`bg-green-700 w-6 p-1 ${carPNumber == 4 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>4</div>
      <div className={`bg-green-900 w-6 p-1 ${carPNumber == 3 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>3</div>
      <div className={`bg-green-900 w-6 p-1 ${carPNumber == 2 ? "border-dashed border-2 border-black w-10 text-center h-10": null}`}>2</div>
      <div className={`bg-green-900 w-6 p-1 ${carPNumber == 1 ? "border-dashed border-2 border-black w-10 text-center h-10 ": null}`}>1</div>
      <div className="font-bold pol-headers">זיהום מזערי</div>
    </div>
  )
}
