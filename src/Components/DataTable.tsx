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
        <div className="text-center mt-12">
            {props.data?._id && (
            <div>
                <h1 className="text-5xl mb-12">מפרט רכב</h1>
                <table>
                <tbody>
                    <tr>
                        <td className="w-80 border-black border-solid border text-2xl p-2"> {carData.mispar_rechev} </td>
                        <td className="w-80 font-bold border-black border-solid border text-2xl p-2">מספר רכב</td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {carData.tozeret_nm} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> מפעל ייצור </td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {carData.kinuy_mishari} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> סוג דגם </td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {carData.ramat_gimur} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> רמת גימור </td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {carData.shnat_yitzur} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> שנת ייצור </td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {carData.zmig_kidmi} {"+"}{carData.zmig_ahori} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> גודל צמיגים </td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {carData.tzeva_rechev} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> צבע </td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {carData.baalut} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> בעלות נוכחית </td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {carData.sug_delek_nm} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> סוג דלק </td>
                    </tr>

                    <tr>
                        <td className="border-black border-solid border text-2xl p-2"> {expiredDate} </td>
                        <td className="font-bold border-black border-solid border text-2xl p-2"> תוקף רשיון רכב </td>
                    </tr>
                </tbody>
                </table>
                
                <KvuzatZihum carNumber={carData.kvutzat_zihum}/>
            </div>
            )}
      </div>
    );
};
  