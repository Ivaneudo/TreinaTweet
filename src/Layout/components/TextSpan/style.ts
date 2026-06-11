import styled from "@emotion/styled";

export type SpanVariant = 'userName' | 'userUserName' | 'date';

interface CustonsProps {
  variant: SpanVariant
}

export const TextSpan = styled.span<CustonsProps>`
  ${({ variant, theme }) => {
    const variantes = {
      userName: `
        font-weight: bold;
        color: var(--primary-text);
        color: ${theme.color.primarytext};
      `,
      userUserName: `
        padding-left: 5px;
        color: ${theme.color.segundarytext};
      `,
      date: `
        padding-left: 5px;
        color: ${theme.color.segundarytext}; /* Interpolação direta e limpa */
      `
    };

    return variantes[variant];
  }}
`;