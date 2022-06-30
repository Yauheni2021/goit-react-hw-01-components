import styled from "@emotion/styled";


export const TableTitle = styled.th`
    fontWeights: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    padding: ${p => `${p.theme.space[4]}px`};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent}
`;

export const TableRow = styled.tr`

  :nth-of-type(even) {
    background-color: ${p => p.theme.colors.muted};
  }
`;
export const TableBody = styled.tbody`

    background-color: ${p => p.theme.colors.white};
`;

export const TableDescription = styled.th`
font-size: ${p => p.theme.fontSizes.s};
color: ${p => p.theme.colors.secondaryText};
font-weight: ${p => p.theme.fontWeights.normal};
padding: ${p => `${p.theme.space[3]}px`};
border-bottom: ${p => p.theme.borders.normal};

`;


