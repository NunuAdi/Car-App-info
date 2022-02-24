import { useEffect, useState } from "react";
import KvuzatZihum from "./kvuzatZihum";

interface IProps {
    data:any
}

export const DataTable = (props: IProps) => {
    const { data: carData } = props;
    const [expiredDate,setExpiredDate] = useState('');
    useEffect(() =>
    {
        const date = new Date(carData.tokef_dt);
        const finalDate  = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        setExpiredDate(finalDate);
    },[]);
    
    return (
        <div className="text-center size-2 mt-12 table-data">
            {props.data?._id && (
            <div className="flex flex-col items-center">
                <h1 className="text-5xl mb-12 car-header">מפרט רכב</h1>
                <table className="table-container table-box ">
                <tbody>
                    <tr>
                        <td className="w-80 font-bold  border-black border-solid border">מספר רכב</td>
                        <td className="w-80 border-black border-solid border"> {carData.mispar_rechev} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border "> מפעל ייצור </td>
                        <td className="border-black border-solid border"> {carData.tozeret_nm} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border"> סוג דגם </td>
                        <td className="border-black border-solid border"> {carData.kinuy_mishari} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border"> רמת גימור </td>
                        <td className="border-black border-solid border"> {carData.ramat_gimur} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border"> שנת ייצור </td>
                        <td className="border-black border-solid border"> {carData.shnat_yitzur} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border"> גודל צמיגים </td>
                        <td className="border-black border-solid border"> {carData.zmig_kidmi} {"+"}{carData.zmig_ahori} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border"> צבע </td>
                        <td className="border-black border-solid border"> {carData.tzeva_rechev} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border"> בעלות נוכחית </td>
                        <td className="border-black border-solid border"> {carData.baalut} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border"> סוג דלק </td>
                        <td className="border-black border-solid border"> {carData.sug_delek_nm} </td>
                    </tr>

                    <tr>
                        <td className="font-bold border-black border-solid border"> תוקף רשיון רכב </td>
                        <td className="border-black border-solid border"> {expiredDate} </td>
                    </tr>
                </tbody>
                </table>
                
                <KvuzatZihum carNumber={carData.kvutzat_zihum}/>
            </div>
            )}
      </div>
    );
};
  