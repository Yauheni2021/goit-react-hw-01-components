import { PropTypes } from "prop-types";
import { Box } from "components/Box";
import { FriendListItem } from "./FriendListItem";

export const FriendsList = ({ friends }) => {
    return (
        <Box mt={3} mx="auto" py={3} maxWidth={2} as={'ul'}>
            {friends.map(({ id, name, isOnline, avatar }) => (
                <FriendListItem
                    key={id}
                    name={name}
                    isOnline={isOnline}
                    avatar={avatar}
                
                />
            ))}
        </Box>
    );
};

FriendsList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};