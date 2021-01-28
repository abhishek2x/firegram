// Its work is to get all the exiting images from the firebase Storage provied it to ImageGrid

import { useState, useEffect } from "react";
import { projectfirestore } from "../firebase/config";

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    console.log("Effecting...")
    const unsub = projectfirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        console.log(snap);
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        console.log("from hook", documents)
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
}

export default useFirestore;
