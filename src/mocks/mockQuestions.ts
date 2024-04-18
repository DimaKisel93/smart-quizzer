import { Question } from "../types/types";

export const mockQuestions: Question[]= [
  {
    id: 1,
    type: 'single_choice',
    question: 'Что означает аббревиатура HTML?',
    options: [
      { id: 1, text: 'Hyper Text Markup Language' },
      { id: 2, text: 'Hyperlinks and Text Markup Language' },
      { id: 3, text: 'Home Tool Markup Language' },
      { id: 4, text: 'Hyper Tool Multi Language' }
    ]
  },
  {
    id: 2,
    type: 'single_choice',
    question: 'Какое расширение имеют файлы стилей CSS?',
    options: [
      { id: 1, text: '.css' },
      { id: 2, text: '.html' },
      { id: 3, text: '.js' },
      { id: 4, text: '.php' }
    ]
  },
  {
    id: 3,
    type: 'multiple_choice',
    question: 'Какие языки программирования используются для создания интерактивности на веб-страницах?',
    options: [
      { id: 1, text: 'JavaScript' },
      { id: 2, text: 'PHP' },
      { id: 3, text: 'Python' },
      { id: 4, text: 'Ruby' }
    ]
  },
  {
    id: 4,
    type: 'short_answer',
    question: 'Как называется основная структурная единица веб-страницы?',
  },
  {
    id: 5,
    type: 'long_answer',
    question: 'Опишите принцип работы протокола HTTP.',
  },
  {
    id: 6,
    type: 'single_choice',
    question: 'Как объявить переменную в JavaScript?',
    options: [
      { id: 1, text: 'let' },
      { id: 2, text: 'var' },
      { id: 3, text: 'const' },
      { id: 4, text: 'all of the above' }
    ]
  },
  {
    id: 7,
    type: 'single_choice',
    question: 'Что выведет console.log(2 + 3 + "7")?',
    options: [
      { id: 1, text: '57' },
      { id: 2, text: '12' },
      { id: 3, text: '23' },
      { id: 4, text: 'NaN' }
    ]
  },
  {
    id: 8,
    type: 'multiple_choice',
    question: 'Какие встроенные методы есть у массивов в JavaScript?',
    options: [
      { id: 1, text: 'push()' },
      { id: 2, text: 'has()' },
      { id: 3, text: 'keys()' },
      { id: 4, text: 'values()' },
      { id: 5, text: 'entries()' },
      { id: 6, text: 'clear()' },
      { id: 7, text: 'pop()' },
      { id: 8, text: 'size()' }
    ]
  },
  {
    id: 9,
    type: 'long_answer',
    question: 'Что такое замыкание (closure) в JavaScript?',
  },
  {
    id: 10,
    type: 'long_answer',
    question: 'Расскажите о принципе работы промисов (promises) в JavaScript.',
  },
  {
    id: 11,
    type: 'single_choice',
    question: 'Как создать новый React-проект с использованием Create React App?',
    options: [
      { id: 1, text: 'npx create-react-app my-app' },
      { id: 2, text: 'npm init react-app my-app' },
      { id: 3, text: 'create-react my-app' },
      { id: 4, text: 'npm create-react my-app' }
    ]
  },
  {
    id: 12,
    type: 'single_choice',
    question: 'Что такое JSX в React?',
    options: [
      { id: 1, text: 'Расширение JavaScript, которое позволяет писать HTML-подобный код в JavaScript' },
      { id: 2, text: 'JavaScript библиотека для работы с DOM' },
      { id: 3, text: 'Шаблонизатор для React-компонентов' },
      { id: 4, text: 'Препроцессор для стилей в React-приложениях' }
    ]
  },
  {
    id: 13,
    type: 'multiple_choice',
    question: 'Какие методы жизненного цикла существуют у компонентов React?',
    options: [
      { id: 1, text: 'componentDidMount' },
      { id: 2, text: 'componentWillUnmount' },
      { id: 3, text: 'componentWillUpdate' },
      { id: 4, text: 'shouldComponentUpdate' },
      { id: 5, text: 'render' }
    ]
  },
  {
    id: 14,
    type: 'long_answer',
    question: 'Что такое state в React?',
  },
  {
    id: 15,
    type: 'long_answer',
    question: 'Чем отличается компонент React от функционального компонента и классового компонента?',
  },
];

