import { PropTypes } from "prop-types"
import {
    TableTitle,
    TableRow,
    TableBody,
    TableDescription,
} from "./TransactionHistory.styled";
import { Box } from "components/Box";

export const TransactionHistory = ({ items }) => {
    return (
        <Box
            mt={3}
            mx="auto"
            width={3}
            textAlign="center"
            borderRadius="normal"
            boxShadow={'darkBox'}
            as={'table'}
        >
            <thead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </thead>

            <TableBody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableRow key={id} id={id}>
                        <TableDescription>{type}</TableDescription>
                        <TableDescription>{amount}</TableDescription>
                        <TableDescription>{currency}</TableDescription>
                    </TableRow>
                ))
                }
                
            </TableBody>
        </Box>
    );
};

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};