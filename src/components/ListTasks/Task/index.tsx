import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import tasksService from '../../../services/tasksService';
import { Task as TaskType } from '../../../types/Task';
import ModalEditTask from '../../ModalEditTask';

import {
  Container, Content, Action, DropDownOverlay, Status,
} from './styles';

interface Props {
  task: TaskType,
}

export default function Task({ task }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const router = useRouter();

  function handleToggleVisibility() {
    setIsVisible((state) => !state);
  }

  function handleToggleModalVisibility() {
    setModalIsOpen(true);
  }

  async function handleClickDeleteTask(id: string) {
    await tasksService.deleteTask(id);
    router.replace(router.asPath);
  }

  return (
    <Container key={task.guid}>
      <Content>
        <Action onMouseLeave={() => setIsVisible(false)}>
          <button
            type="button"
            onClick={() => handleToggleVisibility()}
          >
            <Image
              src="/images/icons/dots-vertical.svg"
              width={24}
              height={24}
              alt="Mais opções"
            />
          </button>

          <DropDownOverlay isVisible={isVisible}>
            {modalIsOpen && (
              <ModalEditTask
                task={task}
                modalVisible={modalIsOpen}
                setModalVisible={setModalIsOpen}
              />
            )}
            <button type="button" onClick={() => handleToggleModalVisibility()}>
              <Image
                src="/images/icons/edit-pencil.svg"
                width={16}
                height={16}
                alt="Icone de lapis"
              />
              Atualizar tarefa
            </button>

            <button type="button" onClick={() => handleClickDeleteTask(task.guid)}>
              <Image
                src="/images/icons/trash.svg"
                width={14}
                height={17}
                alt="Lixeira"
              />
              Remover tarefa
            </button>
          </DropDownOverlay>
        </Action>
        <div className="info">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      </Content>

      <Status className="status">
        {task.situation === 'completed'
          ? (
            <>
              <img
                src="/images/icons/check.svg"
                width={24}
                height={24}
                alt="check"
              />
              Concluído
            </>
          )
          : 'Em progresso'}
      </Status>
    </Container>
  );
}
