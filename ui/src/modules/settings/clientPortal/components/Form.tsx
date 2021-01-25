import Button from 'erxes-ui/lib/components/Button';
import React, { useState } from 'react';
import { CONFIG_TYPES } from '../constants';
import General from './General';

export type GeneralFormType = {
  name?: string;
  description?: string;
  logo?: string;
  icon?: string;
  knowledgeBaseLabel?: string;
  ticketLabel?: string;
  taskLabel?: string;
  taskStageId?: string;
  taskBoardId?: string;
  taskPipelineId?: string;
  ticketStageId?: string;
  ticketBoardId?: string;
  ticketPipelineId?: string;
};

type Props = {
  configType: string;
  defaultConfigValues?: GeneralFormType;
  handleUpdate: (doc: GeneralFormType) => void;
};

function Form({ defaultConfigValues = {}, handleUpdate, configType }: Props) {
  const [formValues, setFormValues] = useState<GeneralFormType>({
    name: defaultConfigValues.name || '',
    description: defaultConfigValues.description || '',
    icon: defaultConfigValues.icon || '',
    logo: defaultConfigValues.logo || '',
    knowledgeBaseLabel: defaultConfigValues.knowledgeBaseLabel || '',
    ticketLabel: defaultConfigValues.ticketLabel || '',
    taskLabel: defaultConfigValues.taskLabel || '',
    taskStageId: defaultConfigValues.taskStageId || '',
    taskBoardId: defaultConfigValues.taskBoardId || '',
    taskPipelineId: defaultConfigValues.taskPipelineId || '',
    ticketStageId: defaultConfigValues.ticketStageId || '',
    ticketBoardId: defaultConfigValues.ticketBoardId || '',
    ticketPipelineId: defaultConfigValues.ticketPipelineId || ''
  });

  const handleFormChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    handleUpdate(formValues);
  };

  function renderContent() {
    if (configType === CONFIG_TYPES.GENERAL) {
      return <General {...formValues} handleFormChange={handleFormChange} />;
    }

    return null;
  }

  function renderSubmit() {
    return (
      <Button btnStyle="success" type="submit">
        Submit
      </Button>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderContent()}
      {renderSubmit()}
    </form>
  );
}

export default Form;
