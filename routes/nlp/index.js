const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });

manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'see you soon!');

manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');
manager.addAnswer('en', 'greetings.hello', 'Hey there!');
manager.addAnswer('en', 'greetings.hello', 'Greetings!');

manager.addDocument('en', 'What\'s your name?', 'questions.name');
manager.addAnswer('en', 'questions.name', 'I am Younggyo Lee');

manager.addDocument('en', 'resume', 'questions.resume');
manager.addAnswer('en', 'questions.resume', 'Ah, you want to see my resume? Here it is. https://docs.google.com/document/d/1YPAfDPnAIoo5AREdLj_x0C4TAA5RwysK_GYyLTFXH_o/edit?usp=sharing');

manager.addDocument('en', 'Linkedin', 'questions.linkedin');
manager.addAnswer('en', 'questions.linkedin', 'My Linkedin Profile ▶️ https://linkedin.com/in/younggyolee');

manager.addDocument('en', 'Github', 'questions.github');
manager.addAnswer('en', 'questions.github', 'My Github Profile ▶️ https://github.com/younggyolee');

manager.addDocument('en', 'Email', 'questions.email');
manager.addDocument('en', 'e-mail', 'questions.email');
manager.addDocument('en', 'mail', 'questions.email');
manager.addAnswer('en', 'questions.email', 'My inbox is always open! Don\'t hesitate to reach out to me at mailto:younglee.work@gmail.com, and I will make sure to respond.');

manager.addAnswer('en', 'None', 'Sorry, but I don\'t understand');

(async() => {
  await manager.train();
  manager.save();
})();

module.exports = manager;
