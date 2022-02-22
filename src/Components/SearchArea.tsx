import axios from "axios";
import { useState } from "react";
import { DataTable } from "./DataTable";
import { RefreshBtn } from "./RefreshBtn";
import { LoadingApp } from "./LoadingApp";

export const SearchArea = () => {
  const [registarationNum, setRegistarationNum] = useState("");
  const [carGovData, setCarGovData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRegistarationNum(value);
  };

  const handleOnClick = async () => {
    const registarationNumAPI = `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=1&sort=mispar_rechev&q=${registarationNum}`;
    setCarGovData({});
    setIsLoading(true);
    setMessage("");
    setCarGovData(false);

    axios
      .get(registarationNumAPI)
      .then(function (res) {
        const { result } = res.data;
        const [record] = result.records;
        return record;
      })
      .then(function (record) {
        if (record?._id) {
          setCarGovData(record);
        } else {
            alert("לא נמצאו נתונים, נסה שוב");
        }
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="flex flex-col items-center">

        {isLoading ? < LoadingApp /> :
        <div className="flex flex-row items-center justify-center mt-12 gap-8">
          <img className="w-8 cursor-pointer" onClick={RefreshBtn} src="https://www.svgrepo.com/show/41644/refresh.svg" alt="ref" />
          <button className="btnSearch hover:from-gray-400 bg-slate-200 font-sans rounded-2xl bg-gray-200 bg-gradient-to-r shadow-xl border-solid border cursor-pointer inline-block text-xl py-2 px-5 text-black no-underline" onClick={handleOnClick}> חפש </button>
          <input className="my-2 rounded-3xl text-2xl text-center text-red-800 w-6/12 p-2 h-10 font-bold" type="search" value={registarationNum} onChange={handleChange} />
          <p className="text-3xl w-6/12"> :הכנס מספר רכב </p>
        </div>
        }

      <div>
        {carGovData && Object.entries(carGovData)[0] && <DataTable data={carGovData} />}
      </div>

    </div>
  );
};