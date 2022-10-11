// export const getQuizTopicsAndQuiz = async (id) => {
//     const quizTopicData = await fetch(`https://openapi.programming-hero.com/api/quiz`)
//     let quizTopics = await quizTopicData.json()
//     quizTopics = quizTopics.data;

//     const quizData = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
//     let quiz = await quizData.json()
//     quiz = quiz.data;

//     return { quizTopics, quiz };
// }