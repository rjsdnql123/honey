'use client';
import { useState } from 'react';

import { Button } from '@/component/BaseButton/index';
import { BottomNavigation } from '@/component/BottomNavigation';
import { Checkbox } from '@/component/CheckBox';

export default function Page() {
  const [checkboxState, setCheckboxState] = useState<boolean>(false);
  const onchangeTest = (checked: boolean) => {
    setCheckboxState(checked);
  };
  return (
    <main>
      <Button color='yellow'>Button</Button>
      <Checkbox checkboxOnchange={onchangeTest} checkboxState={checkboxState}></Checkbox>
      <BottomNavigation></BottomNavigation>
    </main>
  );
}
