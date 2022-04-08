import { useState } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";

const welcome = ["discord-chat-server", "audio-room", "general"];
const questions = ["react-redux", "tailwind-css", "vue-js"];
const random = ["game-hub", "servers"];

const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />
      <Divider />
      <SearchField />
      <Divider />
      <div className="channel-container">
        <Dropdown id="1" header="Welcome" selections={welcome} />
        <Dropdown id="2" header="Questions" selections={questions} />
        <Dropdown id="3" header="Random" selections={random} />
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections, id }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <div
        onClick={() => setExpanded(!expanded)}
        key={id}
        className="dropdown-header"
      >
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded ? "dropdown-header-text-selected" : "dropdown-header-text"
          }
        >
          {header}
        </h5>
        <FaPlus
          size="12"
          className="text-accent text-opacity-80 my-auto ml-auto"
        />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = "text-accent text-opacity-80 my-auto mr-1";
  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div
    className={
      selection === "discord-chat-server"
        ? "dropdown-selection selected-bar"
        : "dropdown-selection"
    }
  >
    <BsHash
      size="24"
      className={
        selection === "discord-chat-server"
          ? "text-gray-700"
          : "text-gray-500 text-opacity-90"
      }
    />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
);

const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Discord(Clone)</h5>
  </div>
);

const Divider = () => {
  return <hr className="mx-2 my-2" />;
};

const SearchField = () => {
  return (
    <div className="friend-search">
      <input
        className="search-input"
        type="text"
        placeholder="Find or start a conversation"
      />
    </div>
  );
};

export default ChannelBar;
