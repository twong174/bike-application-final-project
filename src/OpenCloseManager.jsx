import React, {useState} from "react";

const OpenCloseManager = ({children}) => { 
  const [toggleOpenClose, setOpenClose] = useState(false);

  const openCloseEvent = () => { 
    setOpenClose(!toggleOpenClose);
  };

  return children({toggleOpenClose, openCloseEvent})
};

export default OpenCloseManager;