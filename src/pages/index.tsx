import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import { useMemo, useState } from 'react';
import { Container, InputSearchContainer } from '../assets/styles/pages';
import ListTasks from '../components/ListTasks';
import tasksService from '../services/tasksService';
import { Task } from '../types/Task';
import ModalNewTask from '../components/ModalNewTask';
import handleChangeSetFieldValue from '../utils/handleChangeSetValue';

interface Props {
  tasks: Task[];
}

export default function Home({ tasks }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredTasks = useMemo(() => (
    !tasks
      ? []
      : tasks.filter((task) => (
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) && task
      ))), [searchTerm, tasks]);

  return (
    <Container>
      <header>
        <InputSearchContainer>
          <img src="/images/icons/search.svg" alt="Lupa" width={24} height={24} />
          <input
            value={searchTerm}
            type="search"
            placeholder="Pesquise pelo nome..."
            onChange={(e) => handleChangeSetFieldValue(e, setSearchTerm)}
          />
        </InputSearchContainer>
      </header>
      <section>
        {filteredTasks.length > 0
          ? (
            <div className="container__list--tasks">
              <h1>Tarefas</h1>
              <ListTasks tasks={filteredTasks} />
            </div>
          )
          : <h1>Nenhuma tarefa criada</h1>}
        <ModalNewTask />
      </section>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: tasks }: AxiosResponse<Task[]> = await tasksService.getAllTasks();

  return {
    props: {
      tasks,
    },
  };
};
