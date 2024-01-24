import axios from "axios";
import { useEffect, useState } from "react";

const SpellGenerator = () => {

  const [spells, setSpells] = useState([]);
  const [selectSpell, setSelectedSpell] = useState(null)
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const url = "https://hp-api.onrender.com/api/spells";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setSpells(res.data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError('Error fetching from API')
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getSpells = (spellId) => {
    setSelectedSpell(selectSpell === spellId ? null : spellId)
  }

  return (
    <div className="quote-container">
       
      {!loading && !error && 

      (
        <div className="items">
          {spells.map((spell) => (
            <div key={spell.id} className='spell-one' onClick={() => getSpells(spell.id)}>
              <h2>{spell.name}</h2>
             {selectSpell === spell.id && <p>{spell.description}</p>}
            </div>
          ))}
        </div>
      )}


    </div>
  );
};

export default SpellGenerator;
