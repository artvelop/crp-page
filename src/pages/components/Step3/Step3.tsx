import styled from '@emotion/styled';
import React from 'react';
import { IntroduceCard } from '..';
import { Step3Box } from './Step3Box';

type Props = {};

export const Step3 = React.forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <Wrapper ref={ref}>
      <IntroduceCard title="RenderTree구축">
        DomTree와 CssomTree가 합쳐져서
        <br />
        RenderTree가 구축됩니다
      </IntroduceCard>
      <Step3Box />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-top: 30vh;
`;
