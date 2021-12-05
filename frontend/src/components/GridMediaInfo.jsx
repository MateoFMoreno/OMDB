import { useParams } from "react-router-dom";

import CardMediaInfo from "../common/CardMediaInfo";
import { useMediaInfo } from "../hooks/useGrid";

export default function GridMediaInfo() {
    const { id } = useParams();
    const { movie, user, state, setState, handleOnClick } = useMediaInfo(id);

    return (
        <div>
            <CardMediaInfo user={user} state={state} setState={setState} {...movie} handleOnClick={handleOnClick} />
        </div>
    );
}
