import { PropTypes } from "prop-types"
import {
    Title,
    StatList,
    StatsListItem,
    StatsLabel,
    StatsPercentage,
} from "./Statistics.styled"
import { setColor } from '../Aplications/RandonColor'
import { Box } from "components/Box"

export const Statistics = ({ title, stats }) => {
    return (
        <Box mt={3} mx="auto" maxWidth={3} bg="secondary" borderRadius="normal">
            {title && <Title>{title}</Title>}
            <StatList >
                {stats.map(({ id, label, percentage }) => (
                    <StatsListItem key={id} id={id} backgroundColor={setColor()}>
                        <StatsLabel>{label}</StatsLabel>
                        <StatsPercentage>{percentage}</StatsPercentage>
                    </StatsListItem>
                ))}
            </StatList>
        </Box>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};