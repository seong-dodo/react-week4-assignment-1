import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    context('with new task title', () => {
      it('returns new state', () => {
        const newState = reducer({
          taskTitle: '',
        }, {
          type: 'updateTaskTitle',
          payload: {
            taskTitle: 'New task',
          },
        });

        expect(newState.taskTitle).toBe('New task');
      });
    });
  });

  describe('addTask', () => {
    function recudeAddTask(taskTitle) {
      return reducer({
        newId: 1,
        taskTitle,
        tasks: [],
      }, {
        type: 'addTask',
      });
    }

    context('with task title', () => {
      it('tasks에 새로운 task가 추가된다.', () => {
        const newState = recudeAddTask('첫 번째 할 일');

        expect(newState.tasks).toHaveLength(1);
      });

      it('추가된 task에 id가 부여된다.', () => {
        const newState = recudeAddTask('첫 번째 할 일');

        expect(newState.tasks[0].id).not.toBeNull();
        expect(newState.tasks[0].id).toBe(1);
        expect(newState.newId).toBe(1 + 1);
        expect(newState.tasks[0].title).toBe('첫 번째 할 일');
      });

      it('taskTitle이 초기화된다.', () => {
        const newState = recudeAddTask('첫 번째 할 일');

        expect(newState.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it('동작하지 않는다.', () => {
        const newState = recudeAddTask('');

        expect(newState.tasks).toHaveLength(0);
        expect(newState.newId).toBe(1);
      });
    });
  });

  describe('delete task', () => {
    context('with existed task id', () => {
      it('task가 삭제된다.', () => {
        const newState = reducer({
          tasks: [
            {
              id: 1,
              title: '첫 번째 할 일',
            },
          ],
        }, {
          type: 'deleteTask',
          payload: {
            id: 1,
          },
        });

        expect(newState.tasks).toHaveLength(0);
      });
    });

    });
  });
});
