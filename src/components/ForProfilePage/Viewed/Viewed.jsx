// @ts-nocheck

import { useAuth } from "../../../hooks/useAuth";
import { Text } from "../NoCollectionText/NoCollectionText.styled";
import ViewedList from "./ViewedList/ViewedList";

const Viewed = () => {
  const { viewedNotices } = useAuth();

  return (
    <div>
      {viewedNotices?.length === 0 ? (
        <Text>
          Oops, <b>looks like there aren't any furries</b> on our adorable page
          yet. Do not worry! When you open notices, they will appear here.
        </Text>
      ) : (
        <ViewedList />
      )}
    </div>
  );
};

export default Viewed;
