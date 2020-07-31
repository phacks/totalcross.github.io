import React from "react";

const ImportCorona = () => {
  return (
    <pre>
      <span style={{ color: "firebrick" }}>{`
    private void `}</span>
      <span style={{ color: "purple" }}>{`fillData()`}</span>
      {` {

        confirmedList.clear();
        recoveredList.clear();
        deathsList.clear();
        `}
      <span style={{ color: "grey" }}>{`
        // Getting the information and filling the lists used to fill the CoronaChart`}</span>
      <span style={{ color: "firebrick" }}>{`
        if `}</span>
      {`(!offlineCheck.isChecked())
            response = getCoronavirusData(`}
      <span
        style={{ color: "navy" }}
      >{`"https://coronavirus-map.p.rapidapi.com/v1/summary/latest"`}</span>
      {`, HttpStream.`}
      <span style={{ color: "blue" }}>{`GET`}</span>
      {`);`}
      <span style={{ color: "firebrick" }}>{`
        else`}</span>
      {`
            response = `}
      <span style={{ color: "firebrick" }}>{`new `}</span>
      {`JSONObject(`}
      <span style={{ color: "firebrick" }}>{`new `}</span>
      {`String(Vm.getFile(`}
      <span style={{ color: "navy" }}>{`"request.json"`}</span>
      {`)));

        JSONObject data = response.getJSONObject(`}
      <span style={{ color: "navy" }}>{`"data"`}</span>
      {`);
        dates = data.names();
        array = data.toJSONArray(dates);
        `}
      <span style={{ color: "firebrick" }}>{`for `}</span>
      {`(`}
      <span style={{ color: "firebrick" }}>{`int `}</span>
      {`i = `}
      <span style={{ color: "blue" }}>{`0`}</span>
      {`; i < array.length(); i++) {
            date = dates.getString(i);
            item = array.getJSONObject(i);
            MyDate myDate = `}
      <span style={{ color: "firebrick" }}>{`new `}</span>
      {`MyDate(Integer.parseInt(Convert.remove(date, `}
      <span style={{ color: "navy" }}>{`"-"`}</span>
      {`)));
            confirmedList.add(`}
      <span style={{ color: "firebrick" }}>{`new Data`}</span>
      {`<MyDate, Integer>(myDate, item.getInt(`}
      <span style={{ color: "navy" }}>{`"total_cases"`}</span>
      {`)));
            recoveredList.add(`}
      <span style={{ color: "firebrick" }}>{`new Data`}</span>
      {`<MyDate, Integer>(myDate, item.getInt(`}
      <span style={{ color: "navy" }}>{`"recovered"`}</span>
      {`)));
            deathsList.add(`}
      <span style={{ color: "firebrick" }}>{`new Data`}</span>
      {`<MyDate, Integer>(myDate, item.getInt(`}
      <span style={{ color: "navy" }}>{`"deaths"`}</span>
      {`)));
        }

        `}
      <span style={{ color: "grey" }}>{`// Sorts the data by date;`}</span>
      {`
        Collections.sort(confirmedList, `}
      <span style={{ color: "firebrick" }}>{`new Comparator`}</span>
      {`<`}
      <span style={{ color: "firebrick" }}>{`Data`}</span>
      {`<MyDate, Integer>>() {
                `}
      <span style={{ color: "firebrick" }}>{`
            @Override
            public int`}</span>
      {` `}
      <span style={{ color: "purple" }}>{`compare`}</span>
      {`(`}
      <span style={{ color: "firebrick" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "orange" }}>{`o1`}</span>
      {`, `}
      <span style={{ color: "firebrick" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "orange" }}>{`o2`}</span>
      {`) {
                `}
      <span style={{ color: "firebrick" }}>{`return`}</span>
      {` o1.x.compareTo(o2.x);
            }
        });
        Collections.sort(recoveredList, new Comparator<Data<MyDate, Integer>>() {
        `}
      <span style={{ color: "firebrick" }}>{`
            @Override
            public int`}</span>
      {` `}
      <span style={{ color: "purple" }}>{`compare`}</span>
      {`(`}
      <span style={{ color: "firebrick" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "orange" }}>{`o1`}</span>
      {`, `}
      <span style={{ color: "firebrick" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "orange" }}>{`o2`}</span>
      {`) {
                `}
      <span style={{ color: "firebrick" }}>{`return`}</span>
      {` o1.x.compareTo(o2.x);
            }
        });
        Collections.sort(deathsList, new Comparator<Data<MyDate, Integer>>() {
        `}
      <span style={{ color: "firebrick" }}>{`
            @Override
            public int`}</span>
      {` `}
      <span style={{ color: "purple" }}>{`compare`}</span>
      {`(`}
      <span style={{ color: "firebrick" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "orange" }}>{`o1`}</span>
      {`, `}
      <span style={{ color: "firebrick" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "orange" }}>{`o2`}</span>
      {`) {
                `}
      <span style={{ color: "firebrick" }}>{`return`}</span>
      {` o1.x.compareTo(o2.x);
            }
        });
    }
    `}
    </pre>
  );
};

export default ImportCorona;
