import React from 'react';
import styled from '@emotion/styled';
import { IntroduceCard } from '..';
import { Step4Box } from './Step4Box';

type Props = {};

export const Step4 = React.forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <Wrapper ref={ref}>
      <IntroduceCard title="Reflow">
        구축된 RenderTree를 통해서
        <br />
        화면의 레이아웃을 배치합니다
      </IntroduceCard>
      <Step4Box />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-top: 30vh;
`;
