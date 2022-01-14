import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [idOuvrier, setidOuvrier] = useState(0);
  const [NomOuvrier, setNomOuvrier] = useState("");
  const [PreOuvrier, setPreOuvrier] = useState("");
  const [Email, setEmail] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [AdrOuvrier, setAdrOuvrier] = useState("");
  const [DateNaiOuvrier, setDateNaiOuvrier] = useState("");
  const [newTelephone, setnewTelephone] = useState("");
  const [idChant, setidChant] = useState("");
  const [idSpec, setidSpec] = useState("");
  const [OuvrierList, setOuvrierList] = useState([]);

  const addOuvrier = () => {
    Axios.post("http://localhost:3001/create", {
      idOuvrier: idOuvrier,
      NomOuvrier: NomOuvrier,
      PreOuvrier: PreOuvrier,
      DateNaiOuvrier: DateNaiOuvrier,
      Email: Email,
      Telephone: Telephone,
      AdrOuvrier: AdrOuvrier,
      idChant: idChant,
      idSpec: idSpec,


    }).then(() => {
      setOuvrierList([
        ...OuvrierList,
        {
          idOuvrier: idOuvrier,
          NomOuvrier: NomOuvrier,
          PreOuvrier: PreOuvrier,
          DateNaiOuvrier: DateNaiOuvrier,
          Email:Email,
          Telephone: Telephone,
          AdrOuvrier: AdrOuvrier,
          idChant: idChant,
          idSpec: idSpec,

        },
      ]);
    });
    console.log('Success')
  };

  const getOuvrier = () => {
    Axios.get("http://localhost:3001/ouvriers").then((response) => {
      setOuvrierList(response.data);
    });
  };

 const updateOuvrier = (idOuvrier) => {
    Axios.put("http://localhost:3001/update", { Telephone: newTelephone, idOuvrier: idOuvrier }).then(
     (response) => {
        setOuvrierList(
          OuvrierList.map((val) => {
            return val.idOuvrier == idOuvrier
             ? {
              idOuvrier: idOuvrier,
              NomOuvrier: NomOuvrier,
              PreOuvrier: PreOuvrier,
              DateNaiOuvrier: DateNaiOuvrier,
              Email: Email,
              Telephone: Telephone,
              AdrOuvrier: AdrOuvrier,
              idChant: idChant,
              idSpec: idSpec,
                      }
              : val;
          })
        );
      }
    );
  };

  const deleteOuvrier = (idOuvrier) => {
    Axios.delete(`http://localhost:3001/delete/${idOuvrier}`).then((response) => {
      setOuvrierList(
        OuvrierList.filter((val) => {
          return val.idOuvrier != idOuvrier;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>idOuvrier</label>
        <input
          type="number"
          onChange={(event) => {
            setidOuvrier(event.target.value);
          }}
        />
        <label>NomOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setNomOuvrier(event.target.value);
          }}
        />
        <label>SPEC</label>
        <input
          type="number"
          onChange={(event) => {
            setidSpec(event.target.value);
          }}
        />
        <label>PreOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setPreOuvrier(event.target.value);
          }}
        />
        <label>EmailOuvrier</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Telephone</label>
        <input
          type="number"
          onChange={(event) => {
            setTelephone(event.target.value);
          }}
        />
        <label>Adresse</label>
        <input
          type="text"
          onChange={(event) => {
            setAdrOuvrier(event.target.value);
          }}
        />
        <label>chantier</label>
        <input
          type="text"
          onChange={(event) => {
            setidChant(event.target.value);
          }}
        />
        <label>Date naissance</label>
        <input
          type="text"
          onChange={(event) => {
            setDateNaiOuvrier(event.target.value);
          }}
        />
        <button onClick={addOuvrier}>Add Ouvrier</button>
      </div>
      <div className="OUVRIERS">
        <button onClick={getOuvrier}>Show Ouvriers</button>

        {OuvrierList.map((val, key) => {
          return (
            <div className="Ouvrier">
              <div>
                <h3>idOuvrier {val.idOuvrier}</h3>
                <h3>NomOuvrier {val.NomOuvrier}</h3>
                <h3>PreOuvrier {val.PreOuvrier}</h3>
                <h3>Date naissance {val.DateNaiOuvrier}</h3>
                <h3>EmailOuvrier {val.Email}</h3>
                <h3>Adresse {val.AdrOuvrier}</h3>
                <h3>Telephone {val.Telephone}</h3>
                <h3>idChant {val.idChant}</h3>
                <h3>idSpec {val.idSpec}</h3>
                
               
               
              </div>
              <div>
                <input
                  type="number"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewTelephone(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateOuvrier(val.idOuvrier);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                       deleteOuvrier(val.idOuvrier);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;