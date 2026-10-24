import React, { createContext, useContext, useState, useCallback } from "react";
import websiteData from "../data/websiteData";

const SiteContext = createContext({
  siteData: websiteData,
  loading: false,
  refreshData: () => { },
});

export function SiteProvider({ children }) {
  const [siteData, setSiteData] = useState(websiteData);
  const [loading] = useState(false);

  const refreshData = useCallback(() => {
    setSiteData(websiteData);
  }, []);

  return (
    <SiteContext.Provider value={{ siteData, loading, refreshData }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteContext);
}

export default SiteContext;
