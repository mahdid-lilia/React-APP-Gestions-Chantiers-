import "../styles/App.css";
import { useState } from "react";
import Axios from "axios";


function Ouvriers() {
  // declaration des variables
  // Pour la table Ouvriers
  const [idOuvrier, setidOuvrier] = useState(0);
  const [NomOuvrier, setNomOuvrier] = useState("");
  const [PreOuvrier, setPreOuvrier] = useState("");
  const [DateNaiOuvrier, setDateNaiOuvrier] = useState("");
  const [Email, setEmail] = useState("");
  const [AdrOuvrier, setAdrOuvrier] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [idSpec, setidSpec] = useState("");
  const [idChant, setidChant] = useState("");

  const [newEmail, setnewEmail] = useState("");
  const [newTelephone, setnewTelephone] = useState("");

  const [OuvrierList, setOuvrierList] = useState([]);
// l'operation d'ajoute d'un ouvrier
  const addOuvrier = () => {
    Axios.post("http://localhost:3001/create", {
      idOuvrier: idOuvrier,
      NomOuvrier: NomOuvrier,
      PreOuvrier: PreOuvrier,
      DateNaiOuvrier:DateNaiOuvrier,
      Email:Email, 
      AdrOuvrier:AdrOuvrier, 
      Telephone: Telephone , 
      idSpec: idSpec, 
      idChant : idChant,
     
    }).then(() => {
      setOuvrierList([
        ...OuvrierList,
        {
          idOuvrier: idOuvrier,
          NomOuvrier: NomOuvrier,
          PreOuvrier: PreOuvrier,
          DateNaiOuvrier:DateNaiOuvrier,
          Email:Email, 
          AdrOuvrier:AdrOuvrier, 
          Telephone: Telephone , 
          idSpec: idSpec, 
          idChant : idChant,
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
//Operation de mise a jours du numero de telephone d'un ouvrier
  const updateTelephone = (idOuvrier) => {
    Axios.put("http://localhost:3001/update", { Telephone: newTelephone, idOuvrier: idOuvrier }).then(
      (response) => {
        setOuvrierList(
          OuvrierList.map((val) => {
            return val.idOuvrier !== idOuvrier
              ? {
                idOuvrier: val.idOuvrier,
                NomOuvrier: val.NomOuvrier,
                PreOuvrier: val.PreOuvrier,
                DateNaiOuvrier:val.DateNaiOuvrier,
                Email:val.Email, 
                AdrOuvrier:val.AdrOuvrier, 
                Telephone: val.Telephone , 
                idSpec: val.idSpec, 
                idChant : val.idChant,
                }
              : val;
          })
        );
      }
    );
    console.log("mise a jour effectuee avec success")
  };
// suppression d'un ouvriers de la base de donnees
  const deleteOuvrier = (idOuvrier) => {
    Axios.delete(`http://localhost:3001/delete/${idOuvrier}`).then((response) => {
      setOuvrierList(
        OuvrierList.filter((val) => {
          return val.idOuvrier !== idOuvrier;
        })
      );
    });
    console.log("suppression effectuee avec success")
  };
// le code html pour les ouvriers
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
        <label>PrenomOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setPreOuvrier(event.target.value);
          }}
        />
        <label>PrenomOuvrier</label>
        <input
          type="Date"
          onChange={(event) => {
            setDateNaiOuvrier(event.target.value);
          }}
        />
        <label>EmailOuvrier</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
         <label>AdrOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setAdrOuvrier(event.target.value);
          }}
        />
        <label>Telephone</label>
        <input
          type="number"
          onChange={(event) => {
            setTelephone(event.target.value);
          }}
        />
        <label>Specialite</label>
        <input
          type="number"
          onChange={(event) => {
            setidSpec(event.target.value);
          }}
        />
        <label>Chantier</label>
        <input
          type="number"
          onChange={(event) => {
            setidChant(event.target.value);
          }}
        />
        <button onClick={addOuvrier}>Add Ouvrier</button>
      </div>
      <div className="ouvriers">
        <button onClick={getOuvrier}>Show Ouvriers</button>

        {OuvrierList.map((val, key) => {
          return (
            <div className="Ouvriers">
              <div>
                <h3>idOuvrier {val.idOuvrier}</h3>
                <h3>NomOuvrier {val.NomOuvrier}</h3>
                <h3>PreOuvrier {val.PreOuvrier}</h3>
                <h3>DateNaiOuvrier {val.DateNaiOuvrier}</h3>
                <h3>Email {val.Email}</h3>
                <h3>AdrOuvrier {val.AdrOuvrier}</h3>
                <h3>Telephone {val.Telephone}</h3>
                <h3>idSpec {val.idSpec}</h3>
                <h3>idChant {val.idChant}</h3>

              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewTelephone(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                      updateTelephone(val.idOuvrier);
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
/* 
function App() {
  // declaration des variables
  // Pour la table Client
  const [idClient, setidClient] = useState(0);
  const [idChantier, setidChantier] = useState("");
  const [NomClient, setNomClient] = useState("");
  const [PreClient, setPreClient] = useState("");
  const [DateNaiClient, setDateNaiClient] = useState("");
  const [Email, setEmail] = useState("");
  const [AdrClient, setAdrClient] = useState("");
  const [	TelClient, set	TelClient] = useState("");

  const [newEmail, setnewEmail] = useState("");
  const [newTelephone, setnewTelephone] = useState("");

  const [OuvrierList, setOuvrierList] = useState([]);
// l'operation d'ajoute d'un ouvrier
  const addOuvrier = () => {
    Axios.post("http://localhost:3001/create", {
      idOuvrier: idOuvrier,
      NomOuvrier: NomOuvrier,
      PreOuvrier: PreOuvrier,
      DateNaiOuvrier:DateNaiOuvrier,
      Email:Email, 
      AdrOuvrier:AdrOuvrier, 
      Telephone: Telephone , 
      idSpec: idSpec, 
      idChant : idChant,
     
    }).then(() => {
      setOuvrierList([
        ...OuvrierList,
        {
          idOuvrier: idOuvrier,
          NomOuvrier: NomOuvrier,
          PreOuvrier: PreOuvrier,
          DateNaiOuvrier:DateNaiOuvrier,
          Email:Email, 
          AdrOuvrier:AdrOuvrier, 
          Telephone: Telephone , 
          idSpec: idSpec, 
          idChant : idChant,
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
//Operation de mise a jours du numero de telephone d'un ouvrier
  const updateTelephone = (idOuvrier) => {
    Axios.put("http://localhost:3001/update", { Telephone: newTelephone, idOuvrier: idOuvrier }).then(
      (response) => {
        setOuvrierList(
          OuvrierList.map((val) => {
            return val.idOuvrier !== idOuvrier
              ? {
                idOuvrier: val.idOuvrier,
                NomOuvrier: val.NomOuvrier,
                PreOuvrier: val.PreOuvrier,
                DateNaiOuvrier:val.DateNaiOuvrier,
                Email:val.Email, 
                AdrOuvrier:val.AdrOuvrier, 
                Telephone: val.Telephone , 
                idSpec: val.idSpec, 
                idChant : val.idChant,
                }
              : val;
          })
        );
      }
    );
    console.log("mise a jour effectuee avec success")
  };
// suppression d'un ouvriers de la base de donnees
  const deleteOuvrier = (idOuvrier) => {
    Axios.delete(`http://localhost:3001/delete/${idOuvrier}`).then((response) => {
      setOuvrierList(
        OuvrierList.filter((val) => {
          return val.idOuvrier !== idOuvrier;
        })
      );
    });
    console.log("suppression effectuee avec success")
  };
// le code html pour les ouvriers
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
        <label>PrenomOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setPreOuvrier(event.target.value);
          }}
        />
        <label>PrenomOuvrier</label>
        <input
          type="Date"
          onChange={(event) => {
            setDateNaiOuvrier(event.target.value);
          }}
        />
        <label>EmailOuvrier</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
         <label>AdrOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setAdrOuvrier(event.target.value);
          }}
        />
        <label>Telephone</label>
        <input
          type="number"
          onChange={(event) => {
            setTelephone(event.target.value);
          }}
        />
        <label>Specialite</label>
        <input
          type="number"
          onChange={(event) => {
            setidSpec(event.target.value);
          }}
        />
        <label>Chantier</label>
        <input
          type="number"
          onChange={(event) => {
            setidChant(event.target.value);
          }}
        />
        <button onClick={addOuvrier}>Add Ouvrier</button>
      </div>
      <div className="ouvriers">
        <button onClick={getOuvrier}>Show Ouvriers</button>

        {OuvrierList.map((val, key) => {
          return (
            <div className="Ouvriers">
              <div>
                <h3>idOuvrier {val.idOuvrier}</h3>
                <h3>NomOuvrier {val.NomOuvrier}</h3>
                <h3>PreOuvrier {val.PreOuvrier}</h3>
                <h3>DateNaiOuvrier {val.DateNaiOuvrier}</h3>
                <h3>Email {val.Email}</h3>
                <h3>AdrOuvrier {val.AdrOuvrier}</h3>
                <h3>Telephone {val.Telephone}</h3>
                <h3>idSpec {val.idSpec}</h3>
                <h3>idChant {val.idChant}</h3>

              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewTelephone(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                      updateTelephone(val.idOuvrier);
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

*/

export default Ouvriers;