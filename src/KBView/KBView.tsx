import styled from 'styled-components/native';

interface IContainerProps {
  background?: string;
}
export const KBContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.background ? props.background : 'white'};
`;
