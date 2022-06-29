import { PropTypes } from "prop-types";
import { Box } from "components/Box";

export const FriendsList = ({ Friends }) => {
    return (
        <Box mt={3} mx="auto" py={3} maxWidth={2} as={'ul'}>
            {Friends.map(({ id, name, isOnline, avatar }) => (
                <FriendsList
                    key={id}
                    name={name}
                    isOnline={isOnline}
                    avatar={avatar}
                >
                </FriendsList>
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