import React, { useState } from "react";
import PostsTab from "./Tabs/PostsTab";
import SavedTab from "./Tabs/SavedTab";
import TaggedTab from "./Tabs/TaggedTab";

function Tab() {
  const [openTab, setOpenTab] = useState(1);

  const checkTab = (numberTab) => {
    return openTab === numberTab ? "tab-active" : "";
  };

  const onClick = (numberTab) => setOpenTab(numberTab);

  return (
    <>
      <div className="tabs justify-center my-8">
        <div className={`tab ${checkTab(1)}`} onClick={() => onClick(1)}>
          Posts
        </div>
        <div className={`tab ${checkTab(2)}`} onClick={() => onClick(2)}>
          Saved
        </div>
        <div className={`tab ${checkTab(3)}`} onClick={() => onClick(3)}>
          Tagged
        </div>
      </div>
      <div>
        {openTab === 1 ? (
          <PostsTab />
        ) : openTab === 2 ? (
          <SavedTab />
        ) : (
          <TaggedTab />
        )}
      </div>
    </>
  );
}

export default Tab;
