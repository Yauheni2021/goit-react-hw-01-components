import { PropTypes } from "prop-types"
import {
    Title,
    Section,
    StatList,
    StatsListItem,
    StatsLabel,
    StatsPercentage,
} from "./Statistics.styled"
import { setColor } from '../Aplications/RandonColor'

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}
            <StatList >
                {stats.map(({ id, label, percentage }) => (
                    <StatsListItem key={id} id={id} backgroundColor={setColor()}>
                        <StatsLabel>{label}</StatsLabel>
                        <StatsPercentage>{percentage}</StatsPercentage>
                    </StatsListItem>
                ))}
            </StatList>
        </Section>
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