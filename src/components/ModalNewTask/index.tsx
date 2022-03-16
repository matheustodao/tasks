import Image from 'next/image';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import tasksService from '../../services/tasksService';
import handleChangeSetFieldValue from '../../utils/handleChangeSetValue';
import { InputContainer } from '../Input';
import PortalProvider from '../PortalProvider';
import {
  Container, Actions, Button,
} from './styles';

export default function ModalNewTask() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  // Here it's using controlled components
  // How is not many fields not have a great impact in perfomace
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const router = useRouter();

  if (!modalVisible) {
    return (
      <Button type="button" onClick={() => setModalVisible(true)}>
        <Image
          src="/images/icons/plus.svg"
          width={24}
          height={24}
          alt="plus"
        />
        Nova Tarefa
      </Button>
    );
  }

  async function handleOnSubmitNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { title, description };
    await tasksService.storeTask({ data });
    router.replace(router.pathname);
    setModalVisible(false);
  }

  return (
    <PortalProvider
      selector="#modal-task"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    >
      <Container onSubmit={(e) => handleOnSubmitNewTask(e)}>
        <h3>Criar Tarefa</h3>
        <InputContainer>
          <label htmlFor="nome">Nome da tarefa</label>
          <input
            type="text"
            name="nome"
            id="nome"
            autoComplete="off"
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
            maxLength={1024}
          />
        </InputContainer>
        <Actions>
          <button
            type="button"
            onClick={() => setModalVisible(false)}
          >
            Cancelar
          </button>
          <button type="submit" disabled={!title}>Salvar</button>
        </Actions>
      </Container>
    </PortalProvider>
  );
}
