import React from 'react';
import {getUserMeLoader} from "@/data/services/get-user-me-loader";
import LoggedAsideContent from "@/components/aside/asideContent/LoggedAsideContent";
import DefaultAsideContent from "@/components/aside/asideContent/DefaultAsideContent";

const Aside = async () => {
  const user = await getUserMeLoader();

  return (
    <aside className="fixed top-16 left-0 z-40 w-60 h-full pt-4 border-r border-custom-white-200">
      {
        user.ok ? <LoggedAsideContent/> : <DefaultAsideContent/>
      }
    </aside>
  );
};

export default Aside;