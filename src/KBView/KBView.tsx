import type { FlexAlignType } from 'react-native';
import styled from 'styled-components/native';

interface IContainerProps {
  background?: string;
  centered?: boolean;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  align?: FlexAlignType | undefined;
  alignSelf?: 'auto' | FlexAlignType | undefined;
  flex?: number | undefined;
}
export const KBContainer = styled.View`
  flex: ${(props: IContainerProps) => (props.flex ? props.flex : 1)};
  background-color: ${(props: IContainerProps) =>
    props.background ? props.background : 'white'};
  justify-content: ${(props: IContainerProps) =>
    props.centered ? 'center' : props.justify || 'flex-start'};
  align-items: ${(props: IContainerProps) =>
    props.centered ? 'center' : props.align || 'flex-start'};
  align-self: ${(props: IContainerProps) => props.alignSelf || 'auto'};
`;
