import {PropTypes}  from "prop-types"
import {
    Description,
    Avatar,
    Name,
    AdditionalInfo, 
    Location,
    Stats,
    StatsItem,
    StatsLabel,
    StatsQuantity,
} from "./Profile.styled";
import { Box } from "../Box";


export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    return (
        <Box  mt={3}
      mx="auto"
      maxWidth={2}
      bg="secondary"
      borderRadius="large">
            <Description key={tag}>
                <Avatar src={avatar} alt= "User avatar"/>
                <Name>{username}</Name>
                <AdditionalInfo>@{tag}</AdditionalInfo>
                <Location>{location}</Location>
            </Description>
            <Stats>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsLabel>{followers}</StatsLabel>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsLabel>{views}</StatsLabel>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsLabel>{likes}</StatsLabel>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{likes}</StatsQuantity>
                </StatsItem>
            </Stats>
        </Box>
    )


};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

