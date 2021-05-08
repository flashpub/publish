import React from 'react';
import Collapsible from 'react-collapsible';
import { Button } from '../Button';

export const ContentPanel: React.FC<any> = ({
  addStep,
  onStep,
  panel,
  removeStep,
  nextPanel,
  children,
}) => {
  const onNextStep = () => {
    addStep(nextPanel);
    removeStep(panel);
  };

  return (
    <div className="flex w-full m-4">
      <Collapsible
        open={onStep(panel)}
        transitionTime={200}
        trigger={`${panel}`}
        onOpening={() => addStep(panel)}
        onClosing={() => removeStep(panel)}
        className="bg-gray-200 rounded-lg w-full"
        contentInnerClassName="px-6 py-4"
        contentOuterClassName="w-full"
        // triggerDisabled={panel === 'introduction' || !onStep(panel)}
        triggerOpenedClassName="cursor-pointer bg-blue-300 w-full text-center py-2 rounded-lg"
        openedClassName="bg-gray-200 flex w-full flex-col items-center rounded-lg"
        triggerClassName="cursor-pointer bg-gray-200 py-2 px-6 flex w-full justify-center rounded-lg"
      >
        <div className="flex flex-col items-center">
          {children}
          <Button onClick={onNextStep} className="mt-4" label="Next step" />
        </div>
      </Collapsible>
    </div>
  );
};
