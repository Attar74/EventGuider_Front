import { resource } from './client';

const { get: getQuestions, replace: updateQuestions } = resource(
  'vendors/my-questions'
);

export { getQuestions, updateQuestions };
