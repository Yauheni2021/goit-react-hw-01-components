import styled from "@emotion/styled";

export const Section = styled.section`
padding:15px

`

export const Title = styled.h2`
  padding: ${p => `${p.theme.space[4]}px`} 0;
  text-aligin: center;
  font-sizes: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.secondaryText};
`;
export const StatList = styled.ul`
  display: flex;
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${p => `${p.theme.space[3]}px`};
  background-color: ${p => p.backgroundColor};
  &:first-child {
    border-bottom-left-radius: ${p => p.theme.radii.normal};
  }
  &:last-child {
    border-bottom-right-radius: ${p => p.theme.radii.normal};
  }
`

export const StatsLabel = styled.span`
  color: ${p => p.theme.colors.white};
  font-sizes: ${p => p.theme.fontSizes.s};
  text-shadows: ${p => p.theme.shadows.darkText};
`

export const StatsPercentage = styled.span`
  color: ${p => p.theme.colors.white};
  font-sizes: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => `p.theme.space[2]}px`};
  line-height: ${p => p.theme.lineHeights.body};
  text-shadow: ${p => p.theme.shadows.darkText};
`