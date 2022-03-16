import { useRouter } from 'next/router';
import {
  FormEvent, useMemo, useState,
} from 'react';
import tasksService from '../../services/tasksService';
import { Task } from '../../types/Task';
import handleChangeSetFieldValue from '../../utils/handleChangeSetValue';
import { InputContainer } from '../Input';
import PortalProvider from '../PortalProvider';
import {
  Container, Actions, Status,
} from './styles';

interface Props {
  task: Task,
  modalVisible: boolean,
  setModalVisible: Function,
}

export default function ModalEditTask({ task, modalVisible, setModalVisible }: Props) {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [situation, setSituation] = useState(task.situation);
  // Above variables get the current datas and set in fields as default value
  const [isPending, setIsPendingn] = useState<boolean>(task.situation === 'uncompleted');
  const router = useRouter();

  const hasAnyChange = useMemo(() => {
    // Here verify if task values has any change
    // Case not, it'll disable button submit
    const possibilityNewTask = {
      guid: task.guid,
      title,
      description,
      situation,
    };

    return JSON.stringify(possibilityNewTask) === JSON.stringify(task);
  }, [title, description, situation]);

  function handleToggleStatus(status: 'completed' | 'uncompleted') {
    if (status === 'completed') {
      setIsPendingn(false);
      return setSituation('completed');
    }

    if (status === 'uncompleted') {
      setIsPendingn(true);
      return setSituation('uncompleted');
    }
  }

  async function handleOnSubmitNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newData = {
      ...task,
      title,
      description,
      situation,
    };
    await tasksService.updateTask({ newData });
    router.replace(router.pathname);
    setModalVisible(false);
  }

  return (
    <PortalProvider
      selector="#modal-task-edit"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    >
      <Container onSubmit={(e) => handleOnSubmitNewTask(e)}>
        <h3>Editar tarefa</h3>
        <InputContainer>
          <label htmlFor="nome">Nome da tarefa</label>
          <input
            type="text"
            name="nome"
            id="nome"
            autoComplete="off"
            defaultValue={title}
            onChange={(e) => handleChangeSetFieldValue(e, setTitle)}
            minLength={1}
            maxLength={100}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Descrição da tarefa</label>
          <textarea
            name="description"
            id="description"
            onChange={(e) => handleChangeSetFieldValue(e, setDescription)}
            defaultValue={description}
            maxLength={1024}
          />
        </InputContainer>
        <Status isPending={isPending}>
          <button
            type="button"
            onClick={() => handleToggleStatus('uncompleted')}
            id="pending"
          >
            Em progresso
          </button>
          <button
            type="button"
            onClick={() => handleToggleStatus('completed')}
            id="done"
          >
            Concluído
          </button>
        </Status>
        <Actions>
          <button
            type="button"
            onClick={() => setModalVisible(false)}
          >
            Cancelar
          </button>
          <button type="submit" disabled={hasAnyChange}>Salvar</button>
        </Actions>
      </Container>
    </PortalProvider>
  );
}
