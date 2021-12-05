import { Wrap, WrapItem} from "@chakra-ui/react";

import CardUser from "../common/CardUser";
import { useUsers } from "../hooks/useGrid";

export default function GridUsers() {
    const {usersAll} = useUsers()

    return (
        <>
            <Wrap spacing="50" justify="center" minH="77vh">
                {usersAll?.map((e, i) => (
                    <WrapItem key={i}>
                        <CardUser {...e} />
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
}
