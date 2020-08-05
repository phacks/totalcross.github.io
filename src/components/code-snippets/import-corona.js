import React from "react";

const ImportCorona = () => {
  return (
    <pre>
      <span style={{ color: "orange" }}>{`
    private void `}</span>
      <span style={{ color: "cornsilk" }}>{`fillData()`}</span>
      {` {

        confirmedList.clear();
        recoveredList.clear();
        deathsList.clear();
        `}
      <span style={{ color: "grey" }}>{`
        // Getting the information and filling the lists used to fill the CoronaChart`}</span>
      <span style={{ color: "orange" }}>{`
        if `}</span>
      {`(!offlineCheck.isChecked())
            response = getCoronavirusData(
              `}
      <span
        style={{ color: "lightgreen" }}
      >{`"https://coronavirus-map.p.rapidapi.com/v1/summary/latest"`}</span>
      {`, 
              HttpStream.`}
      <span style={{ color: "cornflowerblue" }}>{`GET`}</span>
      {`
              );`}
      <span style={{ color: "orange" }}>{`
        else`}</span>
      {`
            response = `}
      <span style={{ color: "orange" }}>{`new `}</span>
      {`JSONObject(`}
      <span style={{ color: "orange" }}>{`new `}</span>
      {`String(Vm.getFile(`}
      <span style={{ color: "lightgreen" }}>{`"request.json"`}</span>
      {`)));

        JSONObject data = response.getJSONObject(`}
      <span style={{ color: "lightgreen" }}>{`"data"`}</span>
      {`);
        dates = data.names();
        array = data.toJSONArray(dates);
        `}
      <span style={{ color: "orange" }}>{`for `}</span>
      {`(`}
      <span style={{ color: "orange" }}>{`int `}</span>
      {`i = `}
      <span style={{ color: "cornflowerblue" }}>{`0`}</span>
      {`; i < array.length(); i++) {
            date = dates.getString(i);
            item = array.getJSONObject(i);
            MyDate myDate = `}
      <span style={{ color: "orange" }}>{`new `}</span>
      {`MyDate(Integer.parseInt(Convert.remove(date, `}
      <span style={{ color: "lightgreen" }}>{`"-"`}</span>
      {`)));
            confirmedList.add(
              `}
      <span style={{ color: "orange" }}>{`new Data`}</span>
      {`<MyDate, Integer>(myDate, item.getInt(`}
      <span style={{ color: "lightgreen" }}>{`"total_cases"`}</span>
      {`))
              );
            recoveredList.add(
              `}
      <span style={{ color: "orange" }}>{`new Data`}</span>
      {`<MyDate, Integer>(myDate, item.getInt(`}
      <span style={{ color: "lightgreen" }}>{`"recovered"`}</span>
      {`))
              );
            deathsList.add(`}
      <span style={{ color: "orange" }}>{`new Data`}</span>
      {`<MyDate, Integer>(myDate, item.getInt(`}
      <span style={{ color: "lightgreen" }}>{`"deaths"`}</span>
      {`)));
        }

        `}
      <span style={{ color: "grey" }}>{`// Sorts the data by date;`}</span>
      {`
        Collections.sort(confirmedList, `}
      <span style={{ color: "orange" }}>{`new Comparator`}</span>
      {`<`}
      <span style={{ color: "orange" }}>{`Data`}</span>
      {`<MyDate, Integer>>() {
                `}
      <span style={{ color: "orange" }}>{`
            @Override
            public int`}</span>
      {` `}
      <span style={{ color: "cornsilk" }}>{`compare`}</span>
      {`(`}
      <span style={{ color: "orange" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "plum" }}>{`o1`}</span>
      {`, `}
      <span style={{ color: "orange" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "plum" }}>{`o2`}</span>
      {`) {
                `}
      <span style={{ color: "orange" }}>{`return`}</span>
      {` o1.x.compareTo(o2.x);
            }
        });
        Collections.sort(recoveredList, new Comparator<Data<MyDate, Integer>>() {
        `}
      <span style={{ color: "orange" }}>{`
            @Override
            public int`}</span>
      {` `}
      <span style={{ color: "cornsilk" }}>{`compare`}</span>
      {`(`}
      <span style={{ color: "orange" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "plum" }}>{`o1`}</span>
      {`, `}
      <span style={{ color: "orange" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "plum" }}>{`o2`}</span>
      {`) {
                `}
      <span style={{ color: "orange" }}>{`return`}</span>
      {` o1.x.compareTo(o2.x);
            }
        });
        Collections.sort(deathsList, new Comparator<Data<MyDate, Integer>>() {
        `}
      <span style={{ color: "orange" }}>{`
            @Override
            public int`}</span>
      {` `}
      <span style={{ color: "cornsilk" }}>{`compare`}</span>
      {`(`}
      <span style={{ color: "orange" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "plum" }}>{`o1`}</span>
      {`, `}
      <span style={{ color: "orange" }}>{`Data`}</span>
      {`<MyDate, Integer> `}
      <span style={{ color: "plum" }}>{`o2`}</span>
      {`) {
                `}
      <span style={{ color: "orange" }}>{`return`}</span>
      {` o1.x.compareTo(o2.x);
            }
        });
    }
    `}
    </pre>
  );
};

export default ImportCorona;
