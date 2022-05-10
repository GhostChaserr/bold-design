import { FC, useState } from "react";
import classNames from "classnames";
import { BsSearch, BsArrowLeft } from "react-icons/bs";
import styles from "./styles.module.css";
import TextInput from "../TextInput";

type SearchProps = {
  onChange: (text: string) => void;
};

const Search: FC<SearchProps> = () => {
  const [inputExpanded, setInputExpanded] = useState<boolean>(false);
  const onInputExpand = () => {
    setInputExpanded(true);
  };

  const onInputShrink = () => setInputExpanded(false);

  const renderExpandedInput = () => {
    return (
      <div className={classNames(styles.expanded_input_container)}>
        <div
          onClick={onInputShrink}
          className={classNames(styles.expanded_input_arrow_icon)}
        >
          <BsArrowLeft />
        </div>
        <TextInput disabled={!inputExpanded} placeholder="Search in rooms" />
      </div>
    );
  };

  const renderReadOnlyInput = () => {
    return (
      <section onClick={onInputExpand}>
        <TextInput
          icon={<BsSearch />}
          disabled={!inputExpanded}
          placeholder="Search in rooms"
        />
      </section>
    );
  };

  return (
    <>
      {inputExpanded && renderExpandedInput()}
      {!inputExpanded && renderReadOnlyInput()}
    </>
  );
};

export default Search;
