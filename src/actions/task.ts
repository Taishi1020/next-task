'use server';

import { Task, TaskModel } from '@/models/task';
import { connectDb } from '@/app/utils/database';
import { redirect } from 'next/navigation';

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    duDate: formData.get('duDate') as string,
    isCompleted: false,
  };

  try {
    await connectDb();
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = 'タスクの作成に失敗しました。';
    return state;
  }

  redirect('/')
};
