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
manager.addAnswer('en', 'questions.email', 'My inbox is always open! Don\'t hesitate to reach out to me via younglee.work@gmail.com, and I will make sure to respond.');

manager.addDocument('en', 'How do I pronounce your first name?', 'questions.pronunciation');
manager.addAnswer('en', 'questions.pronunciation', 'This will be added soon, thanks for your patience.');

manager.addDocument('en', 'Projects?', 'questions.projects');
manager.addAnswer('en', 'questions.projects', 'Get It Done Timer (iOS App) : https://apps.apple.com/app/get-it-done-timer-focus/id1508493617?ls=1');
manager.addAnswer('en', 'questions.projects', 'Sparkling Joys : https://www.sparklingjoys.com');
manager.addAnswer('en', 'questions.projects', 'This is also my project - You are also chatting with a bot, not the real Younggyo. He is too busy now...');

manager.addDocument('en', 'Work experiences', 'questions.works1');
manager.addAnswer('en', 'questions.works1', 'I worked at Farfetch as a performance marketing executive.');

manager.addDocument('en', 'More work experiences', 'questions.works2')
manager.addAnswer('en', 'questions.works2', 'I am currently working as a freelancer data engineer.');

manager.addDocument('en', 'Any other work that you did?', 'questions.works3');
manager.addAnswer('en', 'questions.works3', 'I also have a work experience in the mobile gaming industry as a game designer at Playdog Soft, a 2015 Facebook Games Of The Year winner.');

manager.addDocument('en', 'Facebook', 'questions.facebook');
manager.addAnswer('en', 'questions.facebook', 'Meet me at Facebook https://facebook.com/younggyolee.fb');

manager.addDocument('en', 'Instagram', 'questions.instagram');
manager.addAnswer('en', 'questions.instagram', 'Meet me at Instagram https://instagram.com/younggyo.lee');

manager.addAnswer('en', 'None', 'Sorry, but I don\'t understand. Younggyo has not taught me enough. Can you tell him to spend more time with me?');

(async() => {
  await manager.train();
  manager.save();
})();

module.exports = manager;
