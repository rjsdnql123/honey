'use client';

import styled from '@emotion/styled';

import BottomNavigation from '@/component/BottomNavigation/BottomNavigation';

const Container = styled.div`
  width: 100%;
  background: red;
`;
export default function Page() {
  return (
    <main>
      <Container>gd</Container>

      <BottomNavigation />
    </main>
  );
}
